import { useState } from "react";
import api from "../services/api";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult(null);
    setError("");
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a PDF file first");
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await api.post("/resume/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", fontFamily: "sans-serif", padding: "0 20px" }}>
      <h1>Upload Your Resume</h1>

      <form onSubmit={handleUpload} style={{ marginBottom: 30 }}>
        <input type="file" accept="application/pdf" onChange={handleFileChange} />
        <button type="submit" disabled={loading} style={{ marginLeft: 10, padding: "8px 16px" }}>
          {loading ? "Analyzing..." : "Upload & Analyze"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div>
          <h2>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
            {result.parsedData?.skills?.length > 0 ? (
              result.parsedData.skills.map((skill, i) => (
                <span
                  key={i}
                  style={{
                    background: "#eee",
                    padding: "4px 10px",
                    borderRadius: 12,
                    fontSize: 14,
                  }}
                >
                  {skill}
                </span>
              ))
            ) : (
              <p>No skills detected</p>
            )}
          </div>

          <h2>Education</h2>
          {result.parsedData?.education?.length > 0 ? (
            result.parsedData.education.map((edu, i) => (
              <div key={i} style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8, marginBottom: 10 }}>
                <strong>{edu.institution}</strong>
                <p>{edu.degree}</p>
                <p style={{ color: "#666" }}>{edu.duration}</p>
              </div>
            ))
          ) : (
            <p>No education detected</p>
          )}

          <h2>Projects</h2>
          {result.parsedData?.projects?.length > 0 ? (
            result.parsedData.projects.map((proj, i) => (
              <div key={i} style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8, marginBottom: 10 }}>
                <strong>{proj.title}</strong>
                <p>{proj.description}</p>
                <p style={{ color: "#666" }}>{proj.techStack?.join(", ")}</p>
              </div>
            ))
          ) : (
            <p>No projects detected</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;
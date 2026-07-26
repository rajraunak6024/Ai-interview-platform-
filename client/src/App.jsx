import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [status, setStatus] = useState("checking...");

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/")
      .then((res) => setStatus(res.data.message))
      .catch(() => setStatus("Could not reach server"));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>AI Interview Platform</h1>
      <p>Backend says: <strong>{status}</strong></p>
    </div>
  );
}

export default App;
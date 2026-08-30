import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";


function Dashboard() {
  const { user, logout } = useAuth();
  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.name}</p>
       <Link to="/resume-upload">Upload Resume</Link>
      <br /><br />
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
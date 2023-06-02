import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import Goals from "./pages/Goals";
import Teams from "./pages/Teams";
import { AuthContext } from "./authcontext";

function App() {

  const { user, loading } = useContext(AuthContext);

  if (loading){
    return <p>Loading...</p>
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={(!user)?<Login/>:<Overview/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/goals/show" element={<Goals />} />
        <Route path="/teams/index" element={<Teams />} />
      </Routes>
    </Router>
  );
}

export default App;

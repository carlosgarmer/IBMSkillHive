import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import Goals from "./pages/Goals";
import Teams from "./pages/Teams";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/overview/index" element={<Overview />} />
        <Route path="/goals/show" element={<Goals />} />
        <Route path="/teams/index" element={<Teams />} />
      </Routes>
    </Router>
  );
}

export default App;

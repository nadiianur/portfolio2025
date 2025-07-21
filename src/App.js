import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import OrganizationalExperience from "./components/OrganisationalExperiences.js";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile2025" element={<Home />} />
        <Route path="/profile2025/organizational-experience/" element={<OrganizationalExperience />} />
      </Routes>
    </Router>
  );
}
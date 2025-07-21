import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OrganizationalExperience from "./components/OrganisationalExperiences";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organizational-experience" element={<OrganizationalExperience />} />
      </Routes>
    </Router>
  );
}
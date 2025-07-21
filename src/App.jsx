import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import OrganizationalExperience from "./components/OrganisationalExperiences.js";

export default function App() {
  return (
    <Router basename="/profile2025">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organizational-experience" element={<OrganizationalExperience />} />
      </Routes>
    </Router>
  );
}

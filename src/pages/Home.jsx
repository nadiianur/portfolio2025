import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";
import WorkExperiences from "../components/WorkExperience";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";

export default function Home() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Header />
      <Hero />
      <About />
      <Skills />
      <WorkExperiences />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}

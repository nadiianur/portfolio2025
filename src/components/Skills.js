import React, { useState } from "react";
import mysql from "../assets/tech/mySql.png";
import vscode from "../assets/tech/vsCode.png";
import bootstrap from "../assets/tech/bootstrap.png";
import typescript from "../assets/tech/TypeScript.png";
import javascript from "../assets/tech/JavaScript.png";
import nodejs from "../assets/tech/nodeJs.png";
import reactjs from "../assets/tech/React.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import git from "../assets/tech/git.png";
import drawio from "../assets/tech/draw.png";
import figma from "../assets/tech/Figma.png";
import visio from "../assets/tech/mVisio.png";
import bizagi from "../assets/tech/bizagi.png";
import outlook from "../assets/tech/outlook.png";
import microsoft from "../assets/tech/microsoft.png";
import postman from "../assets/tech/postman.png";
import background from "../assets/background1.png";

const softSkills = [
  "Analytical Thinking",
  "Communication",
  "Attention to Detail",
  "Team Collaboration",
  "Public Speaking",
  "Time Management",
  "Fast Learner",
  "Problem Solving",
  "Project Management",
  "Technical Writing",
];

const hardSkills = [
  { name: "MySQL", icon: mysql },
  { name: "VS Code", icon: vscode },
  { name: "Bootstrap", icon: bootstrap },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "Node.js", icon: nodejs },
  { name: "React", icon: reactjs },
  { name: "HTML5", icon: html },
  { name: "CSS", icon: css },
  { name: "GIT", icon: git },
];

const tools = [
  { name: "Draw.io", icon: drawio },
  { name: "Figma", icon: figma },
  { name: "Visio", icon: visio },
  { name: "Bizagi", icon: bizagi },
  { name: "Outlook", icon: outlook },
  { name: "Microsoft", icon: microsoft },
  { name: "Postman", icon: postman },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Soft Skills");

  const renderSkills = () => {
    if (activeTab === "Soft Skills") {
      return (
        <div className="flex flex-wrap gap-3 ms-2">
          {softSkills.map((skill, i) => (
            <span
              key={i}
              className="bg-white/10 border border-[#b8798c] text-xs sm:text-sm md:text-base px-4 py-2 rounded font-medium tracking-wide shadow-lg hover:bg-[#b8798c] hover:text-white transition-all duration-200"
            >
              {skill.toUpperCase()}
            </span>
          ))}
        </div>
      );
    }

    const data = activeTab === "Hard Skills" ? hardSkills : tools;

    return (
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center mt-4">
        {data.map((tech, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-3 rounded-lg hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-md shadow-md"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain mb-2"
            />
            <span className="text-sm sm:text-xs md:text-sm z-10 text-white/80 font-normal">{tech.name}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="relative text-white min-h-screen flex items-center bg-cover bg-center px-10 py-20"
      style={{ backgroundImage: `url(${background})` }}
    >
    <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">    
        <div className="md:w-1/2 space-y-6 me-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold z-10">
                <span className="text-[#b8798c]">MY EXPERT AREAS </span>
            </h2>

            <p className="soft-glows text-sm sm:text-base md:text-lg z-10">
                I have experience in software and information systems development, with strong capabilities in both technical and managerial aspects. I thrive in collaborative environments, am a quick learner, and easily adapt to new tools and technologies.
            </p>
        </div>

        <div className="md:w-1/2">
          <div className="flex gap-8 mb-12 font-bold">
            {["Soft Skills", "Hard Skills", "Tools"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full border ${
                  activeTab === tab
                    ? "bg-[#b8798c] text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                } transition`}
              >
                {tab}
              </button>
            ))}
          </div>

          {renderSkills()}
        </div>
      </div>
    </section>
  );
}

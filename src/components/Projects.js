import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import project1 from "../assets/Swagger.png";
import project2 from "../assets/DMMS.png";
import project3 from "../assets/Resong.png";
import project4 from "../assets/Pharmacy.png";
import project5 from "../assets/MMS.png";
import project6 from "../assets/Biorasi.png";
import project7 from "../assets/Labuan.png";
import project8 from "../assets/Coffenary.png";
import project9 from "../assets/BundoKanduang.png";
import project10 from "../assets/SiLetter.png";
import project11 from "../assets/StudyIn.png";

const projects = [
{
    title: "Content Management System (CMS) for MDI Logistic Service",
    subtitle: "Technical Documentation",
    description: "Created comprehensive API documentation using Swagger to ensure backend clarity and developer efficiency.",
    tags: ["Swagger", "GIT"],
    image: project1,
    demo: "https://d-mdi-logistic-service-cms-be.mdi.id/tms/docs-api"
  },
  {
    title: "Maintenance Management System (MMS)",
    subtitle: "System Analyst",
    description: "Conducted end-to-end business analysis and produced system design documentation to optimize maintenance workflows.",
    tags: ["Draw.io", "Microsoft Visio", "Figma", "Outlook"],
    image: project2,
    demo: "https://docs.google.com/document/d/1odRLMQw-vG46Du1bzdhvUwofHapB1pz3"
  },
  {
    title: "Resong Hotel Management Information System",
    subtitle: "System Analyst",
    description: "Developed system specifications and technical documents for streamlining hotel operations and reservations.",
    tags: ["Draw.io", "Figma", "Microsoft Word"],
    image: project3,
    demo: "https://drive.google.com/drive/folders/1M6x2DCEwJQW4rBCiiMPuySsI9LD-8Yjp"
  },
  {
    title: "Pharmacy Management Information System",
    subtitle: "System Analyst",
    description: "Designed and documented workflows to digitalize pharmacy services and support daily operations.",
    tags: ["Draw.io", "Figma", "Microsoft Word"],
    image: project4,
    demo: "https://drive.google.com/drive/u/0/folders/1XKeuT-W9WRdC90hY_d4pSgl4j2-porIn"
  },
  {
    title: "Maintenance Management System (MMS)",
    subtitle: "Front-end developer",
    description: "Built dynamic frontend components using Next.js and Tailwind CSS for a scalable maintenance solution.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "GIT"],
    image: project5,
  },
  {
    title: "Employee Assessment Website (BIORASI)",
    subtitle: "Front-end developer",
    description: "Engineered an interactive user interface for employee performance evaluations using modern frontend tools.",
    tags: ["JavaScript", "HTML", "CSS", "Bootstrap", "GitHub"],
    image: project6,
    code: "https://github.com/nadiianur/SPK-Biorasi"
  },
  {
    title: "Web Profile Labuan Sundai Resort",
    subtitle: "Front-end developer",
    description: "Developed a responsive and engaging company profile website to enhance resort branding.",
    tags: ["JavaScript", "HTML", "CSS", "Bootstrap", "GitHub"],
    image: project7,
  },
  {
    title: "Coffeenary Reservation and Order Delivery",
    subtitle: "Front-end developer",
    description: "Designed a customer-friendly interface for online coffee orders and in-store reservations.",
    tags: ["JavaScript", "HTML", "CSS", "Bootstrap", "GitHub"],
    image: project8,
  },
  {
    title: "Edotel Bundo Kanduang Reservation System",
    subtitle: "Full-stack developer",
    description: "Built and maintained a full-stack web platform to manage hotel room bookings and guest information.",
    tags: ["PHP", "Laravel Framework", "Bootstrap"],
    code: "https://github.com/nadiianur/ReservasiKamar_Edotel_Bundo_Kanduang",
    image: project9,
  },
  {
    title: "Official Letter Management System",
    subtitle: "Full-stack developer",
    description: "Implemented a full-stack solution to track and manage internal and external correspondence.",
    tags: ["Express.js", "JavaScript", "Bootstrap"],
    image: project10,
  },
  {
    title: "Assignment Submission Platform (StudyIn)",
    subtitle: "Full-stack developer",
    description: "Engineered a collaborative platform for students and lecturers to manage and review academic submissions.",
    tags: ["Express.js", "JavaScript", "Bootstrap"],
    image: project11,
    code: "https://github.com/nadiianur/StudyIn"
  }
];

export default function Projects() {
  const scrollRef = useRef(null);
  const [center, setCenter] = useState(1);

  const handleLeft = () => setCenter(c => Math.max(0, c - 1));
  const handleRight = () => setCenter(c => Math.min(projects.length - 1, c + 1));

  return (
    <section
      id="projects"
      className="bg-[#4b4848] text-white min-h-screen w-fullflex flex-col justify-center items-center relative overflow-x-hidden flex bg-cover bg-center px-10 py-20"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold z-10 text-center mb-10">
          <span className="text-[#b8798c]">MY </span>
          <span className="text-[#dbdad7]">PROJECTS</span>
      </h2>
      <div className="flex items-center justify-between w-full relative min-h-[500px]">
        <button
          onClick={handleLeft}
          className="text-[#dbdad7] hover:scale-110 transition absolute top-1/2 -translate-y-1/2 z-20 left-4 sm:left-10"
        >
          <FaArrowLeft size={28} />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-visible snap-x snap-mandatory scroll-smooth px-6 py-4 perspective-[1500px] scrollbar-thin scrollbar-thumb-[#b8798c]/70 scrollbar-track-transparent relative w-full justify-center min-h-[400px]"
        >
          {projects.map((project, index) => {
            const offset = index - center;
            if (Math.abs(offset) > 2) return null;

            let scale = 1, rotateY = 0, zIndex = 10 - Math.abs(offset), opacity = 1, translateX = offset * 320;

            if (offset === 0) {
              scale = 1.05;
              rotateY = 0;
              opacity = 1;
              zIndex = 30;
            } else if (offset === -1) {
              scale = 0.9;
              rotateY = 30;
              opacity = 0.7;
              zIndex = 20;
              translateX = offset * 300;
            } else if (offset === 1) {
              scale = 0.9;
              rotateY = -30;
              opacity = 0.7;
              zIndex = 20;
              translateX = offset * 300;
            } else if (offset === -2) {
              scale = 0.8;
              rotateY = 60;
              opacity = 0.4;
              zIndex = 10;
              translateX = offset * 260;
            } else if (offset === 2) {
              scale = 0.8;
              rotateY = -60;
              opacity = 0.4;
              zIndex = 10;
              translateX = offset * 260;
            }

            return (
              <motion.div
                key={index}
                className="bg-[#dbdad7] rounded-xl w-80 snap-center shrink-0 overflow-hidden shadow-lg border border-[#b8798c] transition-transform duration-500 absolute left-1/2"
                style={{
                  zIndex,
                  opacity,
                  transform: `
                    translateX(-50%)
                    translateX(${translateX}px)
                    scale(${scale})
                    rotateY(${rotateY}deg)
                  `,
                  transformStyle: "preserve-3d",
                  transition: "all 0.5s cubic-bezier(.4,2,.6,1)"
                }}
              >

                {project.image && (
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-4">
                  <h3 className="text-base sm:text-lg md:text-xl z-10 font-bold mb-1 text-[#4b4848]">{project.title}</h3>
                  {project.subtitle && (
                    <p className="text-xs sm:text-sm md:text-sm z-10 soft-glow font-semibold mb-2">{project.subtitle}</p>
                  )}
                  <p className="text-xs sm:text-sm md:text-sm z-10 text-[#4b4848] mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-sm mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-[#b8798c] px-2 py-1 rounded-full text-white text-xs sm:text-sm md:text-sm z-10">#{tag}</span>
                    ))}
                  </div>
                  {(project.code || project.demo) && (
                    <div className="flex justify-between text-sm">
                      {project.demo && !project.code && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm md:text-base z-10 text-blue-400 hover:underline">Live Demo</a>
                      )}
                      {project.code && (
                        <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm md:text-base z-10 text-blue-400 hover:underline">View Code</a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
        <button
          onClick={handleRight}
          className="text-[#dbdad7] hover:scale-110 transition absolute top-1/2 -translate-y-1/2 z-20 right-4 sm:right-10"
        >
          <FaArrowRight size={28} />
        </button>
      </div>

      
    </section>
  );
}

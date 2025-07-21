import React, { useState } from "react";
import { motion } from "framer-motion";
import mdiLogo from "../assets/mobilitas.jpeg";
import metroLogo from "../assets/metro.jpeg";
import sumbarLogo from "../assets/pemprov.png";
import certMdi from "../assets/CerMdi.png";
import certMetro from "../assets/CertMetro.png";
import certSumbar from "../assets/certSumbar.png";

const experiences = [
  {
    company: "PT Mobilitas Digital Indonesia",
    role: "System Analyst Intern",
    period: "Sep 2024 - Dec 2024",
    icon: mdiLogo,
    certificate: certMdi,
  },
  {
    company: "PT Metro Indonesian Software",
    role: "System Analyst Intern",
    period: "Feb 2024 - May 2024",
    icon: metroLogo,
    certificate: certMetro,
  },
  {
    company: "Sekretariat Daerah Provinsi Sumatera Barat",
    role: "Front End Developer Intern",
    period: "Jan 2024 - Feb 2024",
    icon: sumbarLogo,
    certificate: certSumbar,
  },
];

export default function WorkExperience() {
  const [showModal, setShowModal] = useState(false);
  const [activeCert, setActiveCert] = useState(null);

  const handleShowCert = (cert) => {
    setActiveCert(cert);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setActiveCert(null);
  };

  return (
    <section
      id="work-experiences"
      className="text-white min-h-screen flex flex-col items-center px-4 py-20 bg-gradient-to-br from-[#dad8d4] via-[#f0ede8] to-[#ebe8e3]/10"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold z-10 text-center mb-16">
        <span className="text-[#4b4848]">WORK </span>
        <span className="text-[#b8798c]">EXPERIENCES</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 relative max-w-6xl mx-auto w-full mt-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center w-64 relative z-10 group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.07,
            }}
            onClick={() => handleShowCert(exp.certificate)}
            title="Click to view certificate"
          >
            
            <motion.div
              className={`shadow-xl rounded-full w-24 h-24 flex items-center justify-center mb-4 border-4 border-[#b8798c] overflow-hidden transition-all duration-300
                ${exp.company === "PT Metro Indonesian Software" ? "bg-black" : "bg-white"}
                group-hover:scale-110`}
              whileHover={{ rotate: 8 }}
            >
              <img
                src={exp.icon}
                alt={exp.company}
                className="w-14 h-14 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
            
            <div className="text-center">
              <h3 className="font-bold text-base sm:text-lg md:text-xl z-10 text-[#4b4848] mb-4">{exp.company}</h3>
              <div className="soft-glow font-semibold text-sm sm:text-base md:text-lg z-10">{exp.role}</div>
              <div className=" text-gray-500 text-xs sm:text-xs md:text-sm z-10">{exp.period}</div>
              <div className="mt-4 soft-glows bg-[#b8798c] p-2 px-4 w-max mx-auto rounded-full items-center text-xs sm:text-xs md:text-sm z-10">View Certificate</div>
            </div>
           
            {idx < experiences.length - 1 && (
              <motion.div
                className="hidden md:block absolute top-12 right-[-96px] w-44 h-1 bg-gradient-to-r from-[#b8798c] to-[#dad8d4] z-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 + idx * 0.2 }}
                style={{ transformOrigin: "left" }}
              />
            )}
          </motion.div>
        ))}
      </div>

      <a
          href="/profile2025/organizational-experience"
          className="inline-block px-6 py-3 bg-[#4b4848] text-white font-semibold rounded hover:bg-[#a06074] transition duration-300 mt-24"
        >
          View Organizational Experience
      </a>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-xl w-full relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-[#b8798c] text-2xl font-bold hover:text-[#4b4848]"
              aria-label="Tutup"
            >
              &times;
            </button>
            <img src={activeCert} alt="Sertifikat" className="w-full h-auto rounded shadow-lg p-4" />
          </div>
        </div>
      )}

      <style>
        {`
          .group:hover .group-hover\\:scale-110 {
            transform: scale(1.10);
          }
        `}
      </style>
    </section>
  );
}
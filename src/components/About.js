import React from "react";
import { motion } from "framer-motion";
import background from "../assets/background.png";
import background1 from "../assets/background1.png";
import profile from "../assets/profile3.png";

export default function About() {
  return (
    <section
      id="about-me"
      className="relative text-white min-h-screen flex items-center bg-cover bg-center px-10 py-20"
      style={{ backgroundImage: `url(${background})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="flex justify-center md:col-span-1">
            <img
              src={profile}
              alt="profile"
              className="rounded-lg  max-w-xs md:max-w-sm h-auto w-full"
            />
          </div>

          <div className="md:col-span-2 text-[#4b4848] ms-16 me-36">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold z-10 mb-4">
                <span className="text-[#4b4848]">ABOUT ME</span>
              </h2>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold z-10 mb-10">
                <span className="text-[#4b4848]">Who is </span>
                <span className="text-[#b8798c]">Nadia Nur Saida?</span>
              </h2>

            <p className="text-sm sm:text-base md:text-lg z-10 mb-10">
              I'm a <span className="text-[#b8798c] font-semibold">fresh graduate</span> in Information Systems from Andalas University with a proven track record of contributing to impactful projects during internships and organizational roles. My experience spans <span className="font-semibold">System Analysis, Web Development, and Software Engineering</span>, enabling me to effectively bridge the gap between business requirements and technical solutions.
            </p>
            <div className="bg-[#4b4848] border-l-4 border-[#b8798c] shadow-md rounded-md p-4 mb-14"
            style={{ backgroundImage: `url(${background1})` }}>
              <h3 className="text-sm sm:text-base md:text-lg z-10 font-extrabold mb-3 flex items-center gap-2 soft-glows">
                 EDUCATION
              </h3>
              <div className="ml-1 text-xs sm:text-sm md:text-base z-10 text-[white]">
                <strong classname="font-extrabold" >Andalas University, 2021 - 2025</strong>
                <p className="mb-1 font-light">The public university located in Limau Manis Padang, West Sumatra, Indonesia.</p>
                <p className="mb-1 font-light">Bachelor of Information Systems</p>
                <strong classname="font-extrabold mb-2" >GPA 3.92 / 4.00</strong>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <style>
        {`
          .soft-glow {
            text-shadow:
               0 0 4px rgba(255, 192, 203, 0.5),
              0 0 8px rgba(255, 192, 203, 0.4);
            color: #b8798c;
          }
        `}
      </style>
    </section>
  );
}
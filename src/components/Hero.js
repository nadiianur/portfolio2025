import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import bgImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full text-white min-h-screen bg-cover bg-center flex items-center px-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      <motion.div className="z-10 max-w-3xl text-left mx-16">
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold z-10 text-shadow-xl soft-glow mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hello!
        </motion.h1>

        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold z-10 leading-tight tracking-wider soft-glows mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
           I'm Nadia Nur<br /> Saida
        </motion.h1>

        <motion.h1
          className="text-lg sm:text-xl md:text-2xl z-10 font-medium leading-tight tracking-wider mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
           Fresh Graduate of Information Systems
        </motion.h1>

        <motion.p
          className="text-sm md:text-sm z-10 text-white mb-10 max-w-xl font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Passionate about <span className="text-[#b8798c] font-medium">System Analyst</span> and aspiring <span className="text-[#b8798c] font-medium">Software Engineer</span>, committed to building elegant solutions and impactful digital experiences.
        </motion.p>

        <motion.div
          className="flex gap-6 text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div
            className="hover:bg-[#b8798c] hover:text-white soft-glow transition duration-300 bg-white px-6 py-2 rounded-full text-xs sm:text-xs md:text-xs z-10 font-medium"
          >
            GET IN TOUCH 👉
          </div>

          <a
            href="https://linkedin.com/in/nadia-nur-saida"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b8798c] transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nadiianur"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b8798c] transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:nadianursaida88@gmail.com"
            className="hover:text-[#b8798c] transition duration-300"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>

      <style>
        {`
          .soft-glows {
            text-shadow:
               0 0 4px rgba(255, 192, 203, 0.5),
              0 0 8px rgba(255, 192, 203, 0.4);
            color: #fff;
          }
        `}
      </style>
    </section>
  );
}

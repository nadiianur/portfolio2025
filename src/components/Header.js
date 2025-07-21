import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-opacity-80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <img src={logo} alt="Nadia Nur Saida" className="w-15 h-10 object-cover" />
        </div>

        <button
          className="sm:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul
          className={`flex-col sm:flex-row sm:flex items-center gap-8 font-medium text-gray-700 absolute sm:static bg-white sm:bg-transparent left-0 w-full sm:w-auto px-6 sm:px-0 py-4 sm:py-0 transition-all duration-300 ease-in-out ${
            isOpen ? "flex top-16" : "hidden sm:flex"
          }`}
        >
          <li><a href="#home" className="hover:text-pink-900 transition duration-300">Home</a></li>
          <li><a href="#about-me" className="hover:text-pink-900 transition duration-300">About Me</a></li>
          <li><a href="#skills" className="hover:text-pink-900 transition duration-300">Skills</a></li>
          <li><a href="#work-experiences" className="hover:text-pink-900 transition duration-300">Experiences</a></li>
          <li><a href="#projects" className="hover:text-pink-900 transition duration-300">Projects</a></li>
          <li><a href="#achievements" className="hover:text-pink-900 transition duration-300">Achievements</a></li>
          <li><a href="#contact" className="hover:text-pink-900 transition duration-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

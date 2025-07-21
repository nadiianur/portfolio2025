import React from "react";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br from-[#dad8d4] via-white to-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-[#b8798c] mb-4">
        Let's Do Something Amazing Together
      </h2>

      <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-normal">
        Interested in working together or just want to say hi? <br className="hidden md:inline" />
        Feel free to reach out through any of the platforms below!
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8 sm:text-lg md:text-xl lg:text-base z-10 text-gray-800">
        <div className="flex items-center gap-3 justify-center">
          <FaEnvelope className="text-[#4b4848]" />
          <span>nadianursaida88@gmail.com</span>
        </div>

        <div className="flex items-center gap-3 justify-center text-base sm:text-lg md:text-xl lg:text-base z-10">
          <FaLinkedin className="text-[#0077b5]" />
          <a
            href="https://www.linkedin.com/in/nadia-nur-saida-5b8380221/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="flex items-center gap-3 justify-center text-base sm:text-lg md:text-xl lg:text-base z-10">
          <FaInstagram className="text-pink-500" />
          <a
            href="https://www.instagram.com/nadiianrs_/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            @nadiianrs_
          </a>
        </div>

        {/* <div className="flex items-center gap-3 justify-center text-base sm:text-lg md:text-xl lg:text-base z-10">
          <FaMapMarkerAlt className="text-red-500" />
          <span>Tangerang Selatan, Indonesia</span>
        </div> */}
      </div>

      <p className="mt-12 text-xs sm:text-base md:text-lg lg:text-sm z-10 text-gray-500 italic">
        Thank you for visiting my portfolio. Have a wonderful day!
      </p>
    </section>
  );
}

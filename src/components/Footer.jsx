import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative py-10 text-center bg-black text-gray-400 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background Bubbles */}
      <div className="absolute -top-28 -left-28 w-56 sm:w-72 md:w-80 lg:w-96 h-56 sm:h-72 md:h-80 lg:h-96 bg-purple-700 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-28 -right-28 w-56 sm:w-72 md:w-80 lg:w-96 h-56 sm:h-72 md:h-80 lg:h-96 bg-blue-700 opacity-20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Glow Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>

      {/* Name / Branding */}
      <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 z-10 relative">
        Jeevan Shetty
      </h2>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-2xl mb-6 z-10 relative">
        <a
          href="https://github.com/Jeevan-Shetty07"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition transform hover:scale-125"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jeevan-shetty-241613229/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition transform hover:scale-125"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/g1shetty07"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition transform hover:scale-125"
        >
          <FaInstagram />
        </a>
        <a
        target="_blank"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jeevanshetty9481@gmail.com&su=Hello%20Jeevan&body=Hello%20Jeevan"
          className="hover:text-red-500 transition transform hover:scale-125"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/9353819063?text=Hello%20Jeevan%20%F0%9F%91%8B%F0%9F%8F%BB       "
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition transform hover:scale-125"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-500 z-10 relative">
        © {new Date().getFullYear()} Jeevan Shetty. All rights reserved.
      </p>
    </footer>
  );
}

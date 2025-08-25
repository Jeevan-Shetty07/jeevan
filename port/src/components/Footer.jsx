import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="py-10 text-center bg-gradient-to-r from-black via-gray-900 to-black text-gray-400 relative"
      data-aos="fade-up"
    >
      {/* Glow Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>

      {/* Name / Branding */}
      <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Jeevan Shetty
      </h2>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-2xl mb-6">
        <a
          href="https://github.com/Jeevan-Shetty07"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition transform hover:scale-125"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition transform hover:scale-125"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/YOUR_INSTAGRAM"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition transform hover:scale-125"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:jeevanshetty9481@gmail.com"
          className="hover:text-red-500 transition transform hover:scale-125"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Jeevan Shetty. All rights reserved.
      </p>
    </footer>
  );
}

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  // Gmail handler
  const openGmail = (e) => {
    e.preventDefault(); // Prevent default anchor
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      window.location.href =
        "mailto:jeevanshetty9481@gmail.com?subject=Hello%20Jeevan&body=Hello%20Jeevan";
    } else {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=jeevanshetty9481@gmail.com&su=Hello%20Jeevan&body=Hello%20Jeevan",
        "_blank"
      );
    }
  };

  const socials = [
    { icon: <FaGithub />, link: "https://github.com/Jeevan-Shetty07", color: "hover:text-white" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/jeevan-shetty-241613229/", color: "hover:text-blue-500" },
    { icon: <FaInstagram />, link: "https://instagram.com/g1shetty07", color: "hover:text-pink-500" },
    { icon: <FaEnvelope />, onClick: openGmail, color: "hover:text-red-500" },
    { icon: <FaWhatsapp />, link: "https://wa.me/9353819063?text=Hello%20Jeevan%20👋", color: "hover:text-green-500" },
  ];

  return (
    <footer className="relative py-12 text-center bg-black text-gray-400 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-blue-900/10 to-transparent blur-3xl animate-pulse"></div>

      {/* Background Glow Orbs */}
      <div className="absolute -top-28 -left-28 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-28 -right-28 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Particle Dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/40 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

  
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x"></div>

      {/* Branding */}
      <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 animate-gradient-x">
        Jeevan Shetty
      </h2>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 text-3xl mb-6 relative z-10">
        {socials.map((item, idx) => (
          <a
            key={idx}
            href={item.link || "#"}
            onClick={item.onClick || undefined}
            target={item.link ? "_blank" : undefined}
            rel={item.link ? "noopener noreferrer" : undefined}
            className={`relative group transition transform hover:scale-125 ${item.color}`}
          >
            <span className="absolute inset-0 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-blue-400 to-purple-600 blur-xl transition-all"></span>
            {item.icon}
          </a>
        ))}
      </div>

      {/* Copyright with shimmer */}
      <p className="text-sm text-gray-500 relative z-10 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent animate-gradient-x">
        © {new Date().getFullYear()} Jeevan Shetty. All rights reserved.
      </p>
    </footer>
  );
}
//nothing

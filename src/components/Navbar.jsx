import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = ["home", "about", "projects", "contact"];

  // Track active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // offset for navbar
      links.forEach((link) => {
        const section = document.getElementById(link);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(link);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-400 tracking-wide cursor-pointer hover:scale-105 transition"
        >
          G1Shetty07
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-10 text-gray-300 font-medium text-base lg:text-lg">
          {links.map((link, idx) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <a
                href={`#${link}`}
                className={`relative group transition-colors ${
                  active === link ? "text-blue-400" : ""
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div
          className="md:hidden text-2xl text-gray-300 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-0 right-0 h-screen w-2/3 sm:w-1/2 bg-black bg-opacity-95 backdrop-blur-md shadow-lg flex flex-col justify-center items-center space-y-8 text-gray-300 text-lg sm:text-xl"
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className={`hover:text-blue-400 transition ${
                  active === link ? "text-blue-400" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

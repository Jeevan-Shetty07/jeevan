import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const links = ["home", "about", "projects", "contact"];

  // Track active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // offset for navbar
      setScrolled(window.scrollY > 50);
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

  // Smooth scroll
 const handleScrollTo = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const navbarHeight = document.querySelector("nav").offsetHeight; // dynamic height
    window.scrollTo({
      top: section.offsetTop - navbarHeight - 10, // extra 10px for spacing
      behavior: "smooth",
    });
  }
  setIsOpen(false);
};


  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black bg-opacity-95 backdrop-blur-md shadow-2xl py-2"
          : "bg-black bg-opacity-90 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide cursor-pointer bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
          onClick={() => handleScrollTo("home")}
        >
          G1Shetty
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-10 text-gray-300 font-medium text-base lg:text-lg relative">
          {links.map((link, idx) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <button
                onClick={() => handleScrollTo(link)}
                className={`relative group transition-all px-1 py-1 ${
                  active === link ? "text-blue-400" : ""
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                {/* Animated underline */}
                <motion.span
                  layoutId="underline"
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400`}
                  animate={{
                    width: active === link ? "100%" : "0%",
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
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
            className="md:hidden fixed top-0 right-0 h-screen w-2/3 sm:w-1/2 bg-black bg-opacity-95 backdrop-blur-md shadow-2xl flex flex-col justify-center items-center space-y-8 text-gray-300 text-lg sm:text-xl"
          >
            {links.map((link, idx) => (
              <motion.button
                key={link}
                onClick={() => handleScrollTo(link)}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`hover:text-blue-400 transition ${
                  active === link ? "text-blue-400" : ""
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

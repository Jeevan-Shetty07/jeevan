import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // ✅ Added "skills" to nav links
  const links = ["home", "about", "skills", "projects", "contact"];

  // Track scroll + active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      setScrolled(window.scrollY > 50);

      // Progress bar calculation
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Active section detection
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
      const navbarHeight = document.querySelector("nav").offsetHeight;
      window.scrollTo({
        top: section.offsetTop - navbarHeight - 10,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/30 backdrop-blur-2xl shadow-[0_0_25px_rgba(0,200,255,0.3)] py-2"
          : "bg-black/90 py-4"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="h-[4px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
        fixed top-0 left-0 z-[60]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Aurora background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* ✅ Clean Logo (no glow, no shadow) */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide cursor-pointer 
          bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          onClick={() => handleScrollTo("home")}
        >
          Jeevan Shetty
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium text-lg relative">
          {links.map((link, idx) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <button
                onClick={() => handleScrollTo(link)}
                className={`relative px-2 py-1 tracking-wide transition-all duration-300 
                  ${
                    active === link
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400"
                      : "hover:text-white"
                  }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}

                {/* Underline Glow */}
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-400 to-pink-400 rounded-full"
                  animate={{ width: active === link ? "100%" : "0%" }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="md:hidden text-2xl text-gray-300 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="md:hidden fixed top-0 right-0 h-screen w-2/3 sm:w-1/2 
              bg-gradient-to-br from-black via-gray-900 to-black/90 
              z-50 flex flex-col justify-center 
              items-center space-y-12 py-16 sm:py-20 text-gray-200 text-xl"
            >
              {links.map((link, idx) => (
                <motion.button
                  key={link}
                  onClick={() => handleScrollTo(link)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className={`relative group hover:scale-110 hover:text-blue-400 transition-all duration-300 ${
                    active === link
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400"
                      : ""
                  }`}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

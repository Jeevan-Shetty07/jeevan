import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const links = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      setScrolled(window.scrollY > 50);

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      links.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      window.scrollTo({
        top: section.offsetTop - navbarHeight - 10,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* ✅ Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 hidden md:block ${
          scrolled
            ? "bg-black/30 backdrop-blur-2xl shadow-[0_0_25px_rgba(0,200,255,0.3)] py-2"
            : "bg-black/90 py-4"
        }`}
      >
        <motion.div
          className="h-[4px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
          fixed top-0 left-0 z-[60]"
          style={{ width: `${scrollProgress}%` }}
        />
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-extrabold cursor-pointer 
            bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            onClick={() => handleScrollTo("home")}
          >
            Jeevan Shetty
          </motion.h1>

          <ul className="flex space-x-8 text-gray-300 font-medium text-lg relative">
            {links.map(({ id, label }) => (
              <li key={id} className="relative group">
                <button
                  onClick={() => handleScrollTo(id)}
                  className={`relative px-2 py-1 tracking-wide transition-all duration-300 
                    ${
                      active === id
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400"
                        : "hover:text-white"
                    }`}
                >
                  {label}
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-400 to-pink-400 rounded-full"
                    animate={{ width: active === id ? "100%" : "0%" }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ✅ Mobile Bottom Nav (Icons + Labels, No Background) */}
      <div className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 
      flex justify-around items-center w-full max-w-md px-4 z-50">
        {links.map(({ id, icon, label }) => (
          <motion.button
            key={id}
            onClick={() => handleScrollTo(id)}
            whileTap={{ scale: 0.9 }}
            className={`flex flex-col text-black items-center justify-center space-y-1 transition-all duration-300 
            ${
              active === id
                ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <div className="text-2xl">{icon}</div>
            <span className="text-xs">{label}</span>
          </motion.button>
        ))}
      </div>
    </>
  );
}

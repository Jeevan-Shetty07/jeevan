import React, { useEffect, useState } from "react";
import myphoto from "../assets/myphoto.jpg";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

/* Typewriter effect */
function Typewriter({ items, typingSpeed = 70, pause = 1200 }) {
  const [i, setI] = useState(0);
  const [sub, setSub] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const current = items[i];
    if (dir === 1 && sub === current.length) {
      const t = setTimeout(() => setDir(-1), pause);
      return () => clearTimeout(t);
    }
    if (dir === -1 && sub === 0) {
      setI((prev) => (prev + 1) % items.length);
      setDir(1);
      return;
    }
    const t = setTimeout(() => setSub((s) => s + dir), typingSpeed);
    return () => clearTimeout(t);
  }, [sub, dir, i, items, typingSpeed, pause]);

  const display = items[i].slice(0, sub);
  return (
    <span className="relative text-blue-400">
      {display}
      <span className="ml-1 inline-block w-[2px] h-6 bg-blue-400 animate-pulse" />
    </span>
  );
}

export default function Hero() {
  const roles = [
    "💻 Web Developer",
    "☕ DSA in Java",
    "🔢 DSA in C",
    "⚛ React Developer",
    "🐘 PHP",
    "🗄 Database Handling (SQL)",
    "🎨 Bootstrap",
    "🌊 Tailwind CSS",
    "📝 HTML & CSS",
  ];

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center px-6 sm:px-8 md:px-12 bg-black text-white overflow-hidden"
    >
      {/* Background Bubbles */}
      <div className="absolute -top-20 -left-20 w-56 sm:w-72 md:w-80 lg:w-96 h-56 sm:h-72 md:h-80 lg:h-96 bg-purple-700 opacity-30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-56 sm:w-72 md:w-80 lg:w-96 h-56 sm:h-72 md:h-80 lg:h-96 bg-blue-700 opacity-30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-y-8 lg:gap-x-16">
        {/* Left Text */}
        <div className="z-10 flex-1 text-center lg:text-left px-2 sm:px-0">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug"
          >
            Hi, I'm <span className="text-blue-400">Jeevan Shetty</span> 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 text-gray-300"
          >
            A passionate <span className="font-semibold">developer</span> who
            builds modern, responsive apps with{" "}
            <span className="text-blue-400">Javascript, React, PHP & SQL</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-blue-400"
          >
            <Typewriter items={roles} />
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="/resume.pdf"
              download="Jeevan_Shetty_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition text-sm sm:text-base"
            >
              📄 Download Resume
            </a>
            <a
              href="#projects"
              className="px-5 py-3 bg-gray-800 text-white rounded-xl shadow-lg hover:bg-gray-900 hover:scale-105 transition text-sm sm:text-base"
            >
              🔗 View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            className="flex gap-5 sm:gap-6 mt-8 justify-center lg:justify-start text-2xl sm:text-3xl flex-wrap"
          >
            <FaGithub className="hover:text-gray-400 transition" />
            <FaLinkedin className="hover:text-blue-500 transition" />
            <FaInstagram className="hover:text-pink-500 transition" />
            <FaWhatsapp className="hover:text-green-500 transition" />
            <FaEnvelope className="hover:text-red-500 transition" />
          </motion.div>
        </div>

        {/* Right Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="z-10 flex-1 flex justify-center items-center mt-6 lg:mt-0"
        >
          <motion.img
            src={myphoto}
            alt="Jeevan Shetty"
            className="w-32 sm:w-44 md:w-56 lg:w-72 xl:w-80 h-32 sm:h-44 md:h-56 lg:h-72 xl:h-80 rounded-full border-4 border-gray-800 shadow-xl object-cover"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

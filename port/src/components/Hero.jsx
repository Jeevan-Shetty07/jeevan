import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
    "⚛️ React Developer",
    "🐘 PHP",
    "🗄️ Database Handling (SQL)",
    "🎨 Bootstrap",
    "🌊 Tailwind CSS",
    "📝 HTML & CSS",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-black text-white"
    >
      {/* Background glowing blobs */}
      <div className="absolute -top-20 -left-32 w-96 h-96 bg-purple-700 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-28 -right-32 w-96 h-96 bg-blue-700 opacity-30 rounded-full blur-3xl"></div>

      {/* Left Section */}
      <div className="z-10 flex-1 max-w-2xl text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Hi, I'm <span className="text-blue-400">Jeevan Shetty</span> 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="text-lg md:text-xl mt-4 text-gray-300"
        >
          A passionate <span className="font-semibold">developer</span> who
          builds modern, responsive apps with{" "}
          <span className="text-blue-400">Javascript, React, PHP and SQL</span>.
        </motion.p>

        {/* Typing Effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="mt-4 text-2xl md:text-3xl font-semibold text-blue-400"
        >
          <Typewriter items={roles} />
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <a
            href="/resume.pdf"
            download="Jeevan_Shetty_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition"
          >
            📄 Download Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-3 bg-gray-800 text-white rounded-xl shadow-lg hover:bg-gray-900 hover:scale-105 transition"
          >
            🔗 View Projects
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.9 }}
          className="flex gap-6 mt-8 justify-center md:justify-start text-3xl"
        >
          <a
            href="https://github.com/Jeevan-Shetty07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jeevan-shetty-241613229/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jeevanshetty9481@gmail.com"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>

      {/* Right Section (Photo) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.9 }}
        className="z-10 flex-1 mt-10 md:mt-0 flex justify-center"
      >
        <motion.img
          src="/myphoto.jpg" // place your photo in public/
          alt="Jeevan Shetty"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-gray-800 shadow-xl object-cover"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

import React, { useEffect, useState, useRef } from "react";
import myphoto from "../assets/myphoto.jpg";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaReact,
  FaPhp,
  FaJava,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiC,
  SiMysql,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";

import resume from "../assets/resume.pdf";

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
      <span className="ml-1 inline-block w-[2px] h-5 sm:h-6 bg-blue-400 animate-pulse" />
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
    "🗄 SQL Database Handling",
    "🎨 Bootstrap",
    "🌊 Tailwind CSS",
    "📝 HTML & CSS",
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/Jeevan-Shetty07",
      color: "hover:text-gray-400 hover:shadow-gray-400/50",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/jeevan-shetty-241613229/",
      color: "hover:text-blue-500 hover:shadow-blue-500/50",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://instagram.com/g1shetty07",
      color: "hover:text-pink-500 hover:shadow-pink-500/50",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/9353819063?text=Hello%20Jeevan%20%F0%9F%91%8B%F0%9F%8F%BB",
      color: "hover:text-green-500 hover:shadow-green-500/50",
    },
    {
      name: "Gmail",
      icon: <FaEnvelope />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=jeevanshetty9481@gmail.com&su=Hello%20Jeevan&body=Hello%20Jeevan",
      color: "hover:text-red-500 hover:shadow-red-500/50",
    },
  ];



  const containerRef = useRef(null);

  // 🌌 Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const { innerWidth, innerHeight } = window;
        const moveX = (e.clientX - innerWidth / 2) / 50;
        const moveY = (e.clientY - innerHeight / 2) / 50;
        containerRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative pb-30 m-0 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Background gradient blur orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 bg-purple-600 opacity-30 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600 opacity-30 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <div className="flex pb-10 flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-y-10 lg:gap-x-16">
        {/* LEFT */}
        <motion.div
          className="z-10 flex-1 text-center lg:text-left px-2 sm:px-0"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-3xl  pt-10 sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-snug"
          >
            Hi, I'm <span className="text-blue-400">Jeevan Shetty</span> 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-sm sm:text-lg md:text-xl lg:text-2xl mt-3 text-gray-300"
          >
            A passionate <span className="font-semibold">developer</span> who
            builds modern, responsive apps with{" "}
            <span className="text-blue-400">Javascript, React, PHP & SQL</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="mt-3 text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-blue-400"
          >
            <Typewriter items={roles} />
          </motion.p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #3b82f6" }}
              href={resume}
              download="Jeevan_Shetty_Resume.pdf"
              className="px-5 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition text-sm sm:text-base"
            >
              📄 Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #22d3ee" }}
              href="#projects"
              className="px-5 py-3 bg-gray-800 text-white rounded-xl shadow-lg hover:bg-gray-900 transition text-sm sm:text-base"
            >
              🔗 View Projects
            </motion.a>
          </div>

          {/* Socials */}
          <div className="flex gap-6 mt-6 justify-center lg:justify-start text-2xl flex-wrap">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} transition`}
                whileHover={{ scale: 1.3, rotate: 8, textShadow: "0px 0px 12px" }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT with floating aura */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 flex-1 flex justify-center items-center mt-6 lg:mt-0"
        >
          {/* Pulsing glow behind profile */}
          <motion.div
            className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-blue-500/20 blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

         

          {/* Profile Image */}
          <motion.img
            src="https://res.cloudinary.com/dhlxwqmxt/image/upload/v1756484353/Untitled_design_wum5kd.jpg"
            alt="Jeevan Shetty"
            className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 
              rounded-full border-4 border-gray-700 shadow-[0_0_25px_rgba(59,130,246,0.6)] object-cover"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.07, rotate: 2 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

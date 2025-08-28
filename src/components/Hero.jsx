import React, { useEffect, useState } from "react";
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
  FaHtml5
} from "react-icons/fa";
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
      link: "mailto:jeevanshetty9481@gmail.com",
      color: "hover:text-red-500 hover:shadow-red-500/50",
    },
  ];

  // Orbiting Tech Icons
  const orbitingIcons = [
    { icon: <FaReact className="text-cyan-400" />, delay: 0 },
    { icon: <FaPhp className="text-indigo-500" />, delay: 1 },
    { icon: <FaJava className="text-orange-500" />, delay: 2 },
    { icon: <FaDatabase className="text-yellow-400" />, delay: 3 },
    { icon: <FaGithub className="text-gray-300" />, delay: 4},
    
    { icon: <FaHtml5 className="text-orange-600" />, delay: 5},
  ];

  return (
    <section
      id="home"
      className="relative pb-30 m-0 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 bg-black text-white overflow-hidden"
    >
      {/* Background Bubbles */}
      <motion.div
        className="absolute -top-20 -left-20 w-40 sm:w-56 pt-5 md:w-72 h-40 sm:h-56 md:h-72 bg-purple-700 opacity-30 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-20 -right-20 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-blue-700 opacity-30 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Content */}
      <div className="flex pb-10 flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-y-10 lg:gap-x-16">
        {/* Left Text */}
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
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug"
          >
            Hi, I'm <span className="text-blue-400">Jeevan Shetty</span> 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl mt-3 text-gray-300"
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="mt-5 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={resume}
              download="Jeevan_Shetty_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-5 sm:py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition text-xs sm:text-sm md:text-base"
            >
              📄 Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-4 py-2 sm:px-5 sm:py-3 bg-gray-800 text-white rounded-xl shadow-lg hover:bg-gray-900 transition text-xs sm:text-sm md:text-base"
            >
              🔗 View Projects
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="flex gap-4 sm:gap-6 mt-6 justify-center lg:justify-start text-xl sm:text-2xl md:text-3xl flex-wrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} transition`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Photo with Creativity */}
        {/* Right Photo with Creativity */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 flex-1 flex justify-center items-center mt-6 lg:mt-0"
        >
          {/* Gradient Ring */}
          <motion.div
            className="absolute w-50 h-50 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 
               rounded-full bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          ></motion.div>

          {/* Pulsing Glow */}
          <motion.div
            className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 
               rounded-full bg-blue-500/20 blur-2xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>

          {/* Orbiting Tech Icons */}
          {orbitingIcons.map((item, idx) => (
            <motion.div
              key={idx}
              className="absolute text-xl sm:text-2xl md:text-3xl"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear",
                delay: item.delay,
              }}
              style={{
                transformOrigin: "110px", // orbit closer to image
              }}
            >
              {item.icon}
            </motion.div>
          ))}

          {/* Profile Image */}
          <motion.img
            src={myphoto}
            alt="Jeevan Shetty"
            className="relative w-49 h-49 sm:w-49 sm:h-49 md:w-48 md:h-48 lg:w-56 lg:h-56 
               rounded-full border-4 border-gray-800 shadow-xl object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

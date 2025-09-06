import React from "react";
import { motion } from "framer-motion";
import "./skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import { SiTailwindcss, SiBootstrap } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "PHP", icon: <FaPhp />, color: "text-indigo-500" },
    { name: "Java", icon: <FaJava />, color: "text-red-600" },
    { name: "Python", icon: <FaPython />, color: "text-green-400" },
    { name: "Database", icon: <FaDatabase />, color: "text-pink-400" },
    { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
    { name: "GitHub", icon: <FaGithub />, color: "text-gray-300" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400" },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden starry-bg"
    >
      {/* Aurora Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-blue-900/10 to-transparent blur-3xl animate-pulse"></div>

      {/* Nebula Glow Orbs */}
      <div className="absolute -top-28 -left-28 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-28 -right-28 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/60 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl pt-5 font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 relative z-10"
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="grid pb-14 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl relative z-10"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.15, rotate: 6 }}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            <div className={`text-5xl mb-3 ${skill.color}`}>{skill.icon}</div>
            <p className="text-lg font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

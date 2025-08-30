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

import {
  SiTailwindcss,
  SiVercel,
  SiBootstrap,
} from "react-icons/si";

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
  { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" }, // ✅ Added Bootstrap
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400" },
  // { name: "Vercel", icon: <SiVercel />, color: "text-white" },
];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent)] pointer-events-none" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl pt-5 font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500"
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="grid pb-14 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.15, rotate: 6 }}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            <div className={`text-5xl mb-3 ${skill.color}`}>{skill.icon}</div>
            <p className="text-lg font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

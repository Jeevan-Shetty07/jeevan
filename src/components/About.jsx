import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaReact, FaPhp, FaDatabase, FaJs } from "react-icons/fa";

export default function About() {
  const skillIcons = [
    { icon: <FaReact />, name: "React", color: "text-blue-400" },
    { icon: <FaPhp />, name: "PHP", color: "text-indigo-500" },
    { icon: <FaDatabase />, name: "SQL", color: "text-yellow-400" },
    { icon: <FaJs />, name: "JavaScript", color: "text-yellow-500" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 py-12 bg-black overflow-hidden"
    >
      {/* Background bubbles */}
      <div className="absolute -top-20 -left-20 w-56 sm:w-72 md:w-80 lg:w-96 h-56 sm:h-72 md:h-80 lg:h-96 bg-purple-700 opacity-30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-56 sm:w-72 md:w-80 lg:w-96 h-56 sm:h-72 md:h-80 lg:h-96 bg-blue-700 opacity-30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Animated gradient heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x z-10 relative"
      >
        🌟 About Me
      </motion.h2>

      {/* Typing effect intro */}
      <TypeAnimation
        sequence={[
          "Hi, I'm Jeevan Shetty 👋",
          1500,
          "A Passionate Web Developer 💻",
          1500,
          "I Build Creative & Responsive websites 🚀",
          2000,
        ]}
        wrapper="h3"
        cursor={true}
        repeat={Infinity}
        className="text-xl md:text-2xl font-semibold text-blue-400 mb-8 z-10 relative"
      />

      {/* Main content */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-3xl text-gray-300 text-lg md:text-xl leading-relaxed mb-8 z-10 relative"
      >
        I love crafting{" "}
        <span className="font-semibold text-white hover:text-blue-400 transition">
          clean UIs
        </span>{" "}
        ✨ with{" "}
        <span className="font-semibold text-white hover:text-purple-400 transition">
          efficient backend logic
        </span>{" "}
        ⚙️. Skilled in:
      </motion.p>

      {/* Skills section with icons */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mb-8 z-10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {skillIcons.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.2 }}
            className={`flex flex-col items-center gap-2 text-gray-200 ${skill.color} transition`}
          >
            <div className="text-4xl">{skill.icon}</div>
            <span className="text-sm md:text-base font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Fun fact / current focus */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        className="text-gray-300 text-lg md:text-xl z-10 relative"
      >
        Currently diving into{" "}
        <span className="text-blue-400 hover:text-green-400 transition font-semibold">
          DSA in C & Java
        </span>{" "}
        📚 to sharpen my problem-solving skills.  
        <span className="block mt-2 text-pink-400 animate-pulse">💡 Fun fact: I code better at 3 AM!</span>
      </motion.p>
    </section>
  );
}

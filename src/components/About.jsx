import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaReact, FaPhp, FaDatabase, FaJs } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import "./about.css";

export default function About() {
  const skillIcons = [
    { icon: FaReact, name: "React", gradientId: "reactGradient", colors: ["#06b6d4", "#3b82f6"], glow: "shadow-cyan-400/70" },
    { icon: FaPhp, name: "PHP", gradientId: "phpGradient", colors: ["#6366f1", "#a855f7"], glow: "shadow-purple-500/70" },
    { icon: FaDatabase, name: "SQL", gradientId: "sqlGradient", colors: ["#facc15", "#f97316"], glow: "shadow-yellow-400/70" },
    { icon: FaJs, name: "JavaScript", gradientId: "jsGradient", colors: ["#facc15", "#fbbf24"], glow: "shadow-amber-400/70" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 bg-black overflow-hidden"
    >
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.7),_black_100%)]"></div>
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(120deg,rgba(0,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(0,255,255,0.1)_50%,rgba(0,255,255,0.1)_75%,transparent_75%,transparent)] [background-size:60px_60px] animate-pulse"></div>

      <div className="grid grid-cols-1 pt-20 md:grid-cols-2 gap-12 items-center max-w-6xl w-full relative z-10">
        {/* Left: Text content */}
        <div className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text 
              bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          >
            🌟 About Me
          </motion.h2>

          <TypeAnimation
            sequence={[
              "Hi, I'm Jeevan Shetty 👋",
              2000,
              "A Passionate Web Developer 💻",
              2000,
              "I Build Creative & Responsive Websites 🚀",
              2500,
            ]}
            wrapper="h3"
            cursor={true}
            repeat={Infinity}
            className="text-xl md:text-2xl font-semibold text-blue-400 mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8"
          >
            I thrive on crafting{" "}
            <span className="font-semibold text-white hover:text-blue-400 transition">
              clean, modern UIs
            </span>{" "}
            ✨ powered by{" "}
            <span className="font-semibold text-white hover:text-purple-400 transition">
              efficient backend systems
            </span>{" "}
            ⚙️. My goal? Building apps that are not just functional, but unforgettable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="px-6 py-4 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 
              backdrop-blur-md border border-white/10 shadow-lg text-gray-200"
          >
            🚀 Currently learning{" "}
            <span className="text-blue-400 font-semibold">DSA in C & Java</span>{" "}
            📚 to sharpen my problem-solving skills.
          </motion.div>
        </div>

        {/* Right: Interactive Skill Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="grid grid-cols-2 gap-6"
        >
          {skillIcons.map((skill, index) => {
            const IconComp = skill.icon;
            return (
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                glareEnable={true}
                glareMaxOpacity={0.3}
                key={index}
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 2,
                    boxShadow: `0 0 30px ${skill.colors[0]}`,
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
                    shadow-md hover:shadow-lg transition-all duration-300 
                    hover:bg-gradient-to-br cursor-pointer"
                >
                  {/* Gradient defs */}
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id={skill.gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop stopColor={skill.colors[0]} offset="0%" />
                        <stop stopColor={skill.colors[1]} offset="100%" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Icon with glow */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className={`text-5xl drop-shadow-lg ${skill.glow}`}
                  >
                    <IconComp style={{ fill: `url(#${skill.gradientId})` }} />
                  </motion.div>

                  <p className="mt-3 text-gray-200 font-semibold">{skill.name}</p>
                </motion.div>
              </Tilt>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

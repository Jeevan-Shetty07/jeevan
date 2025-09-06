import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative min-h-screen galaxy-bg text-white flex items-center justify-center px-8 overflow-hidden">
      {/* Aurora Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-blue-900/10 to-transparent blur-3xl animate-pulse"></div>

      {/* Glow Orbs */}
      <div className="absolute -top-28 -left-28 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-28 -right-28 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* ⭐ Floating Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/50 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* 🌠 Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="shooting-star"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Divider (top line like footer) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl space-y-10 text-center">
        {/* Title */}
        <motion.h2
          className="text-5xl pt-10 font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🚀 My Journey
        </motion.h2>

        {/* Paragraphs */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My academic path in technology took shape during my{" "}
          <span className="text-cyan-400 font-semibold">
            Bachelor of Computer Applications (BCA)
          </span>{" "}
          at{" "}
          <span className="text-purple-400">St. Philomena College, Puttur</span>
          , which I successfully completed in 2025. During these three years, I
          explored the fundamentals of software development, worked on projects
          like a{" "}
          <span className="text-cyan-400 font-semibold">Carpooling System</span>{" "}
          and an{" "}
          <span className="text-purple-400 font-semibold">
            Event Management System
          </span>
          , and built a strong foundation in programming, databases, and web
          technologies. These experiences not only sharpened my technical skills
          but also taught me the value of teamwork, problem-solving, and
          creativity in coding.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Currently, I am pursuing my{" "}
          <span className="text-cyan-400 font-semibold">
            Master of Computer Applications (MCA)
          </span>{" "}
          at{" "}
          <span className="text-purple-400">
            NMAM Institute of Technology, Nitte
          </span>
          . This phase of my journey is focused on diving deeper into{" "}
          <span className="text-cyan-400">Data Structures & Algorithms</span>,
          exploring{" "}
          <span className="text-purple-400">
            modern frameworks and full-stack development
          </span>
          , and refining my problem-solving mindset to prepare for real-world
          challenges. I aim to specialize in{" "}
          <span className="text-cyan-400">software development</span> and{" "}
          <span className="text-purple-400">system design</span>, with a vision
          to contribute to impactful and scalable solutions in the tech
          industry.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-300 italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Beyond academics, I enjoy experimenting with new tools, improving my
          problem-solving speed, and staying curious about how technology can
          make life smarter and easier. To me, coding isn’t just a career path —{" "}
          it’s a way to transform ideas into meaningful experiences.
        </motion.p>

        {/* Creative Tagline */}
        <motion.div
          className="mt-8 pb-10 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          💡 Code. Create. Innovate.
        </motion.div>
      </div>
    </section>
  );
}

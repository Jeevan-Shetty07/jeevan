import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center px-8">
      <div className="max-w-5xl space-y-10 text-center">

        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🚀 My Journey
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My academic path in technology took shape during my{" "}
          <span className="text-cyan-400 font-semibold">Bachelor of Computer Applications (BCA)</span> 
          at <span className="text-purple-400">St. Philomena College, Puttur</span>, which I 
          successfully completed in 2025. During these three years, I explored the fundamentals 
          of software development, worked on projects like a{" "}
          <span className="text-cyan-400 font-semibold">Carpooling System</span> and an{" "}
          <span className="text-purple-400 font-semibold">Event Management System</span>, and built 
          a strong foundation in programming, databases, and web technologies. These experiences 
          not only sharpened my technical skills but also taught me the value of teamwork, 
          problem-solving, and creativity in coding.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Currently, I am pursuing my{" "}
          <span className="text-cyan-400 font-semibold">Master of Computer Applications (MCA)</span> 
          at <span className="text-purple-400">NMAM Institute of Technology, Nitte</span>. 
          This phase of my journey is focused on diving deeper into{" "}
          <span className="text-cyan-400">Data Structures & Algorithms</span>, exploring{" "}
          <span className="text-purple-400">modern frameworks and full-stack development</span>, 
          and refining my problem-solving mindset to prepare for real-world challenges. I aim to 
          specialize in <span className="text-cyan-400">software development</span> and{" "}
          <span className="text-purple-400">system design</span>, with a vision to contribute to 
          impactful and scalable solutions in the tech industry.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-300 italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Beyond academics, I enjoy experimenting with new tools, improving my problem-solving 
          speed, and staying curious about how technology can make life smarter and easier. 
          To me, coding isn’t just a career path — it’s a way to transform ideas into 
          meaningful experiences.
        </motion.p>

        {/* Creative Tagline */}
        <motion.div
          className="mt-8 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
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

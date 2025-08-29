import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const education = [
    { year: "2020", place: "St. Theresa High School, Belthangady", detail: "Completed SSLC (79%)" },
    { year: "2022", place: "SDM College, Ujire", detail: "Completed PUC (83%)" },
    { year: "2025", place: "St. Philomena College, Puttur", detail: "Pursuing BCA (CGPA 7.67)" },
    { year: "present", place: "NMAMIT, Nitte", detail: "Plan to pursue MCA" },
  ];

  const coding = [
    { year: "2022", place: "BCA 1st Year", detail: "Started with HTML, CSS, JavaScript" },
    { year: "2023", place: "2nd Year Projects", detail: "Learned PHP, SQL, and built mini projects" },
    { year: "2024", place: "Final Year", detail: "Worked on Carpooling & Event Management System" },
    { year: "Future", place: "MCA Journey", detail: "Started DSA & advanced development" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-8">
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8 w-full max-w-6xl">
        
        {/* Education */}
        <div className="space-y-6 ">
          <h2 className="text-3xl pt-10 font-bold text-cyan-400">🎓 Education</h2>
          {education.map((item, i) => (
            <motion.div
              key={i}
              className="p-4 border border-cyan-500/40 rounded-xl hover:shadow-cyan-500/50 hover:shadow-lg transition"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold">{item.place}</h3>
              <p className="text-gray-400">{item.detail}</p>
              <span className="text-sm text-cyan-300">{item.year}</span>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative  hidden md:flex items-center justify-center">
          <div className="w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full blur-sm animate-pulse"></div>
        </div>

        {/* Coding Journey */}
        <div className="space-y-6 pb-10">
          <h2 className="text-3xl font-bold text-purple-400">💻 Coding Journey</h2>
          {coding.map((item, i) => (
            <motion.div
              key={i}
              className="p-4 border border-purple-500/40 rounded-xl hover:shadow-purple-500/50 hover:shadow-lg transition"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold">{item.place}</h3>
              <p className="text-gray-400">{item.detail}</p>
              <span className="text-sm text-purple-300">{item.year}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

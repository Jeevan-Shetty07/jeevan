import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import carpool1 from "../assets/carpool1.png";
import carpool2 from "../assets/carpool2.png";
import carpool3 from "../assets/carpool3.png";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import port1 from "../assets/port1.png";
import port2 from "../assets/port2.png";
import port3 from "../assets/port3.png";
import "./project.css";

export default function Projects() {
  const projects = [
    {
      title: "Carpooling System",
      desc: "Ride-sharing platform with route optimization and booking.",
      github: "https://github.com/Jeevan-Shetty07/carpoooling",
      images: [carpool1, carpool2, carpool3],
    },
    {
      title: "Event Management System",
      desc: "Full booking system for catering, decoration & venues.",
      github: "https://github.com/Jeevan-Shetty07/EventManagemnet",
      images: [event1, event2, event3],
    },
    {
      title: "Portfolio Website",
      desc: "Responsive portfolio built with React, Tailwind & AOS.",
      github: "https://github.com/Jeevan-Shetty07/portfolio",
      images: [port1, port2, port3],
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 bg-black text-white overflow-hidden"
    >
      {/* 🌌 Galaxy Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-blue-900/10 to-transparent blur-3xl animate-pulse"></div>

      {/* 🌌 Glow Orbs */}
      <div className="absolute -top-28 -left-28 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-28 -right-28 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* 🌠 Stars / Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/50 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* 🌈 Top Divider Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x"></div>

      {/* 🚀 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl pt-10 sm:text-5xl md:text-6xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 text-center z-10 relative"
      >
        🚀 My Projects
      </motion.h2>

      {/* 📦 Project Cards */}
      <div className="grid pb-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl w-full z-10 relative">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative p-5 sm:p-6 rounded-2xl shadow-lg bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-700 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 transition-transform duration-300 group"
          >
            {/* 🔄 Image Slider */}
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              className="rounded-lg overflow-hidden mb-4 relative"
            >
              {proj.images.map((img, i) => (
                <SwiperSlide key={i} className="relative">
                  <img
                    src={img}
                    alt={`${proj.title} ${i + 1}`}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center text-white text-sm sm:text-base font-semibold">
                    {proj.title}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* 📖 Info */}
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-purple-400">
              {proj.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              {proj.desc}
            </p>

            {/* 🔗 GitHub Link */}
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm sm:text-base font-medium rounded-lg shadow-md hover:shadow-blue-500/50 hover:scale-110 transition"
            >
              <FaGithub /> View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

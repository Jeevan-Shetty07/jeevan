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
      github: "https://github.com/Jeevan-Shetty07/EventManagementSystem",
      images: [port1, port2, port3],
    },
    {
      title: "Portfolio Website",
      desc: "Responsive portfolio built with React, Tailwind & AOS.",
      github: "https://github.com/Jeevan-Shetty07/portfolio",
      images: [event1, event2, event3],
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 bg-black text-white overflow-hidden"
    >
      {/* Background bubbles */}
      <div className="absolute -top-12 -left-12 w-48 sm:w-64 md:w-72 lg:w-80 h-48 sm:h-64 md:h-72 lg:h-80 bg-purple-700 opacity-30 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute -bottom-12 -right-12 w-48 sm:w-64 md:w-72 lg:w-80 h-48 sm:h-64 md:h-72 lg:h-80 bg-blue-700 opacity-30 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center z-10 relative"
      >
        🚀 Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl w-full z-10 relative">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative p-5 sm:p-6 rounded-2xl shadow-lg bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-700 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 transition-transform duration-300 group"
          >
            {/* Image Slider */}
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

            {/* Project Info */}
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-400">{proj.title}</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4">{proj.desc}</p>
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

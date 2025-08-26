import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import carpool1 from "../assets/carpool1.png";
import carpool2 from "../assets/carpool2.png";
import carpool3 from "../assets/carpool3.png";

export default function Projects() {
  const projects = [
    {
      title: "Carpooling System",
      desc: "Ride-sharing platform with route optimization and booking.",
      github: "https://github.com/Jeevan-Shetty07",
      images: [carpool1, carpool2, carpool3],
    },
    {
      title: "Event Management System",
      desc: "Full booking system for catering, decoration & venues.",
      github: "https://github.com/Jeevan-Shetty07/EventManagementSystem",
      images: [
        "/assets/event1.png",
        "/assets/event2.png",
        "/assets/event3.png",
        "/assets/event4.png",
      ],
    },
    {
      title: "Portfolio Website",
      desc: "Responsive portfolio built with React, Tailwind & AOS.",
      github: "https://github.com/Jeevan-Shetty07/portfolio",
      images: ["/assets/port1.png", "/assets/port2.png", "/assets/port3.png"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-12 sm:py-16 bg-black text-white"
    >
      {/* Heading */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 sm:mb-14 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center"
        data-aos="fade-down"
      >
        🚀 Projects
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl w-full">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="relative p-5 sm:p-6 rounded-2xl shadow-lg bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-700 hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in-up"
            data-aos-delay={index * 200}
          >
            {/* Image Slider */}
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              className="rounded-lg overflow-hidden mb-4"
            >
              {proj.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`${proj.title} ${i + 1}`}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Project Info */}
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-blue-400">
              {proj.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6">
              {proj.desc}
            </p>
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm sm:text-base font-medium rounded-lg shadow-md hover:shadow-blue-500/50 hover:scale-110 transition"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

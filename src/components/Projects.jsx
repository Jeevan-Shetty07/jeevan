import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import React, { useMemo } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow, Keyboard, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion";
import carpool1 from "../assets/carpool1.png";
import carpool2 from "../assets/carpool2.png";
import carpool3 from "../assets/carpool3.png";
import port1 from "../assets/port1.png";
import port2 from "../assets/port2.png";
import port3 from "../assets/port3.png";
import qr from "../assets/qr.png";
import "./project.css";
import qr1 from "../assets/qr1.png";
import chat  from "../assets/chat.png";
import image1 from "../assets/image1.png";
import  bingo1 from "../assets/bingo1.png";
// import image2 from "../assets/image2.png";
// import image3 from "../assets/image3.png";

export default function Projects() {
  const dummyImage = "https://placehold.co/600x400/png";

  const projects = [
    {
      title: "Realtime Chat App",
      desc: "Instant messaging app with real-time updates.",
      github: "https://github.com/Jeevan-Shetty07",
      demo: "https://realtime-chat-app-six-tawny.vercel.app/",
      images: [chat],
    },
    {
      title: "Bingo Game",
      desc: "Interactive multiplayer Bingo game.",
      github: "https://github.com/Jeevan-Shetty07",
      demo: "https://bingo.jeevanshetty.me/",
      images: [bingo1],
    },
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
      images: [port1, port2, port3],
    },
    {
      title: "Quote Generator",
      desc: "Generate and share inspiring quotes.",
      github: "https://github.com/Jeevan-Shetty07",
      demo: "https://quote-generator-g1.vercel.app/",
      images: [qr1],
    },
    {
      title: "Image Search Engine",
      desc: "Search for high-quality images instantly.",
      github: "https://github.com/Jeevan-Shetty07",
      demo: "https://jeevan-image-search.vercel.app/",
      images: [image1],
    },
    {
      title: "QR Code Generator",
      desc: "Create custom QR codes easily.",
      github: "https://github.com/Jeevan-Shetty07",
      demo: "https://qrcode-genrator-g1.vercel.app/",
      images: [qr],
    },
  ];

  const stars = useMemo(
    () =>
      [...Array(30)].map((_, i) => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 5,
        delay: Math.random() * 5,
      })),
    []
  );

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
        {stars.map((star, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/50 rounded-full animate-float"
            style={{
              top: star.top,
              left: star.left,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* 🌈 Top Divider Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl pt-10 sm:text-5xl md:text-6xl font-extrabold mb-12 text-center z-10 relative"
      >
        <span className="mr-2">🚀</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          My Projects
        </span>
      </motion.h2>

      {/* 📦 Project Carousel */}
      <div className="w-full max-w-6xl z-10 relative px-4">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          keyboard={{ enabled: true }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={600} // Balanced speed
          modules={[EffectCoverflow, Pagination, Keyboard, Mousewheel, Autoplay]}
          className="w-full py-10"
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {projects.map((proj, index) => (
            <SwiperSlide
              key={index}
              className="w-[300px] sm:w-[380px] bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-2xl p-5 border border-gray-700 shadow-2xl backdrop-blur-md flex flex-col h-auto"
            >
              {/* 🔄 Image Slider */}
              <div className="h-48 sm:h-56 w-full mb-4 rounded-lg overflow-hidden relative shrink-0">
                {proj.images.length > 1 ? (
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    loop={true}
                    nested={true}
                    className="w-full h-full"
                  >
                    {proj.images.map((img, i) => (
                      <SwiperSlide key={i} className="relative w-full h-full">
                        <img
                          src={img}
                          alt={`${proj.title} ${i + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={proj.images[0]}
                      alt={proj.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {/* Hover Overlay - Outside Inner Swiper to prevent event capturing issues when not needed */}
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-sm font-semibold pointer-events-none">
                  {proj.title}
                </div>
              </div>

              {/* 📖 Info */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-purple-400 text-center">
                  {proj.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-6 text-center line-clamp-2 min-h-[3rem]">
                  {proj.desc}
                </p>

                <div className="mt-auto flex flex-wrap gap-3 justify-center">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white text-sm font-medium rounded-lg shadow-md hover:bg-gray-600 hover:scale-105 transition"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-blue-500/50 hover:scale-105 transition"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

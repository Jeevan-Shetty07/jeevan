import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/myphoto.jpg";
import resume from "../assets/resume.pdf";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Typewriter = ({ items, typingSpeed = 70, pause = 1200 }) => {
  const [i, setI] = useState(0);
  const [sub, setSub] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const current = items[i];
    if (dir === 1 && sub === current.length) {
      const t = setTimeout(() => setDir(-1), pause);
      return () => clearTimeout(t);
    }
    if (dir === -1 && sub === 0) {
      setI((prev) => (prev + 1) % items.length);
      setDir(1);
      return;
    }
    const t = setTimeout(() => setSub((s) => s + dir), typingSpeed);
    return () => clearTimeout(t);
  }, [sub, dir, i, items, typingSpeed, pause]);

  return (
    <span className="relative text-purple-300">
      {items[i].slice(0, sub)}
      <span className="ml-1 inline-block w-[2px] h-5 sm:h-6 bg-purple-400 animate-pulse" />
    </span>
  );
};

export default function Hero() {
  const roles = [
    "💻 Full-Stack Web Developer",
    "☕ DSA ",
    "⚛ React.js Developer",
    "🐘 PHP Developer",
    "🗄 SQL Database Management",
    "🎨 UI with Bootstrap",
    "🌊 Tailwind CSS",
    "📝 HTML5 & CSS3",
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/Jeevan-Shetty07",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/jeevan-shetty-241613229/",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://instagram.com/g1shetty07",
      color: "hover:text-pink-500",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/9353819063?text=Hello%20Jeevan%20👋",
      color: "hover:text-green-500",
    },
    {
      name: "Gmail",
      icon: <FaEnvelope />,
      onClick: () => {
        if (/Mobi|Android/i.test(navigator.userAgent)) {
          window.location.href =
            "mailto:jeevanshetty9481@gmail.com?subject=Hello Jeevan&body=Hello Jeevan";
        } else {
          window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=jeevanshetty9481@gmail.com&su=Hello%20Jeevan&body=Hello%20Jeevan",
            "_blank"
          );
        }
      },
      color: "hover:text-red-500",
    },
  ];

  const containerRef = useRef(null);

  // Parallax effect for profile image
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const { innerWidth, innerHeight } = window;
        const moveX = (e.clientX - innerWidth / 2) / 40;
        const moveY = (e.clientY - innerHeight / 2) / 40;
        containerRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stars = useMemo(
    () =>
      [...Array(30)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 6,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <section className="relative w-full h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 galaxy-bg text-white overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {stars.map((star, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/70 rounded-full animate-float"
            style={{
              top: star.top,
              left: star.left,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Glow Nebula */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-700/30 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-700/30 blur-3xl animate-pulse-slow"></div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-y-10 lg:gap-x-16 relative z-10">
        <motion.div
          className="flex-1 text-center lg:text-left px-2 sm:px-0"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-snug"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 animate-gradient-x">
              Jeevan Shetty
            </span>{" "}
            👋
          </motion.h1>

          <motion.p
            className="text-sm sm:text-lg md:text-xl lg:text-2xl mt-3 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }}
          >
            A passionate <span className="font-semibold">developer</span> who
            builds modern apps with{" "}
            <span className="text-purple-300">
              JavaScript, React, PHP & SQL
            </span>
            .
          </motion.p>

          <motion.p className="mt-3 text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-purple-300">
            <Typewriter items={roles} />
          </motion.p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #a855f7" }}
              href={resume}
              download
              className="px-5 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition text-sm sm:text-base"
            >
              📄 Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #22d3ee" }}
              href="#projects"
              className="px-5 py-3 bg-gray-800 text-white rounded-xl shadow-lg hover:bg-gray-900 transition text-sm sm:text-base"
            >
              🔗 View Projects
            </motion.a>
          </div>

          {/* Socials */}
          <div className="flex gap-6 mt-6 justify-center lg:justify-start text-2xl flex-wrap">
            {socialLinks.map((s) => (
              <motion.a
                key={s.name}
                href={s.link ? s.link : "#"} // fallback for Gmail
                onClick={s.onClick ? s.onClick : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`${s.color} transition`}
                whileHover={{
                  scale: 1.3,
                  rotate: 8,
                  textShadow: "0px 0px 12px",
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="relative flex-1 flex justify-center items-center mt-6 lg:mt-0"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div
            className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-purple-500/20 blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={myPhoto}
            alt="Jeevan Shetty"
            className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full border-4 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.6)] object-cover"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.07, rotate: 2 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

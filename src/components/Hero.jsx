import React, { useState, useEffect } from "react";
import { ArrowUpRight, FileText, Sparkles, Code2, Database, Layers, ExternalLink, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaReact, FaPhp, FaJava, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiMysql, SiExpress, SiMongodb, SiPostman, SiSpringboot, SiLeetcode, SiN8N, SiC } from "react-icons/si";
import myPhoto from "../assets/myphoto.jpg";
import resume from "../assets/resume.pdf";

const ROLES = [
  "Full-Stack Web Architect",
  "React & Node.js Developer",
  "Spring Boot & Java API Engineer",
  "MongoDB & MySQL Data Architect",
  "DSA & Algorithmic Problem Solver",
];

const TECH_ITEMS = [
  { name: "React 19", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
  { name: "Express.js", icon: <SiExpress className="text-[#0F151D]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  { name: "Java (DSA)", icon: <FaJava className="text-[#EA2D2E]" /> },
  { name: "n8n AI Workflows", icon: <SiN8N className="text-[#EA2D2E]" /> },
  { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "GitHub", icon: <FaGithub className="text-[#181717]" /> },
  { name: "C Language", icon: <SiC className="text-[#00599C]" /> },
  { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
];

import { usePortfolio } from "../context/PortfolioContext";

export default function Hero() {
  const { profile } = usePortfolio();
  const roles = profile?.roles && profile.roles.length > 0 ? profile.roles : [
    "Full-Stack Web Architect",
    "React & Node.js Developer",
    "Spring Boot & Java API Engineer",
    "MongoDB & MySQL Data Architect",
    "DSA & Algorithmic Problem Solver",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const currentFullText = roles[roleIndex % roles.length] || "Full-Stack Developer";

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentFullText.slice(0, text.length + 1));
        if (text.length + 1 === currentFullText.length) {
          setTypingSpeed(1800); // pause at complete word
          setIsDeleting(true);
        } else {
          setTypingSpeed(70);
        }
      } else {
        setText(currentFullText.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(350);
        } else {
          setTypingSpeed(35);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, typingSpeed, roles]);

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      link: "https://github.com/Jeevan-Shetty07",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />,
      link: "https://www.linkedin.com/in/jeevan-shetty-241613229/",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode className="w-5 h-5 text-[#FFA116]" />,
      link: profile?.leetcode || "https://leetcode.com/u/JeevanShetty7/",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-5 h-5 text-[#25D366]" />,
      link: "https://wa.me/9353819063?text=Hello%20Jeevan%20👋",
    },
    {
      name: "Gmail",
      icon: <FaEnvelope className="w-5 h-5 text-[#EA4335]" />,
      onClick: () => {
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=Jeevanshetty9481@gmail.com&su=Hello%20Jeevan&body=Hello%20Jeevan",
          "_blank"
        );
      },
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-5 h-5 text-[#E4405F]" />,
      link: "https://instagram.com/g1shetty07",
    },
  ];

  return (
    <div className="relative pt-6 md:pt-14 pb-12 md:pb-20 overflow-hidden">
      {/* Subtle Background Grid Pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 nomu-grid-bg opacity-70 pointer-events-none -z-10"
      />

      {/* Top Ambient Light Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#FF7448]/10 via-[#FFBFA6]/5 to-transparent blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center text-center">
          {/* 🟢 Nomu Status Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-black/5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] mb-6 md:mb-8 transition-transform hover:scale-105 duration-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#0F151D]">
              {profile?.statusBadge || "Open for opportunities"}
            </span>
            <span className="text-[#0F151D]/30 text-xs">|</span>
            <span className="text-xs sm:text-sm font-semibold text-[#FF7448]">
              {profile?.location || "Bengaluru, IN"}
            </span>
          </div>

          {/* 🏷️ Signature Nomu Headline with Sparkle Beam Pill */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F151D] leading-[1.2] max-w-4xl">
            Engineering scalable web apps{" "}
            <span className="relative inline-flex items-center align-middle mx-1.5 my-1 px-4 sm:px-6 py-1 sm:py-2 rounded-2xl bg-[#0F151D] text-white shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              {/* Twinkling star particles inside pill */}
              <span
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none overflow-hidden"
              >
                <span className="absolute top-[20%] left-[15%] w-1 h-1 bg-white/80 rounded-full animate-nomu-twinkle" />
                <span
                  className="absolute top-[65%] left-[30%] w-1.5 h-1.5 bg-[#FF7448] rounded-full animate-nomu-twinkle"
                  style={{ animationDelay: "0.8s" }}
                />
                <span
                  className="absolute top-[25%] left-[80%] w-1 h-1 bg-white/80 rounded-full animate-nomu-twinkle"
                  style={{ animationDelay: "1.4s" }}
                />
                <span
                  className="absolute top-[75%] left-[70%] w-1.5 h-1.5 bg-[#FFBFA6] rounded-full animate-nomu-twinkle"
                  style={{ animationDelay: "0.4s" }}
                />
              </span>

              {/* Light beam running across */}
              <span
                aria-hidden="true"
                className="absolute top-0 -left-full w-2/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-nomu-beam pointer-events-none"
              />

              <span className="relative z-10 text-white font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
                with precision<span className="text-[#FF7448]">.</span>
              </span>
            </span>
          </h1>

          {/* 📝 Subtitle & Typewriter Role */}
          <div className="mt-5 md:mt-7 max-w-2xl text-center">
            <p className="text-base sm:text-xl text-[#0F151D]/75 font-normal leading-relaxed">
              Hi, I'm <strong className="text-[#0F151D] font-bold">Jeevan Shetty</strong> — a full-stack developer blending clean code, fast databases, and modern UI.
            </p>

            <div className="mt-2.5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF7448]/10 text-[#FF7448] font-mono text-xs sm:text-sm font-semibold border border-[#FF7448]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{text}</span>
              <span className="inline-block w-1.5 h-3.5 bg-[#FF7448] animate-pulse" />
            </div>
          </div>

          {/* 🔘 Action Pill Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="nomu-btn-primary group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 text-sm sm:text-base"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={resume}
              download
              className="nomu-btn-secondary inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 text-sm sm:text-base"
            >
              <FileText className="w-4 h-4 text-[#0F151D]/70" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* 🌐 Social Icons Pill Shelf */}
          <div className="mt-6 flex items-center justify-center gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link || "#"}
                onClick={social.onClick || undefined}
                target={social.link ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-black/5 text-[#0F151D]/70 hover:text-[#0F151D] hover:bg-[#FF7448]/10 hover:border-[#FF7448]/30 transition-all duration-200 shadow-sm hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* 🪟 Nomu Signature Interactive Profile Stage */}
          <div className="mt-12 md:mt-16 w-full max-w-4xl">
            <div className="relative rounded-3xl md:rounded-[40px] bg-white border border-black/5 shadow-[0_20px_50px_-12px_rgba(15,21,29,0.12)] p-4 sm:p-6 md:p-8 overflow-hidden">
              {/* Card Inset Texture */}
              <div className="relative rounded-2xl md:rounded-[32px] bg-[#FAF6F2] border border-black/[0.06] p-6 sm:p-8 md:p-10 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Background Grid inside Inset */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 nomu-grid-card pointer-events-none"
                />

                {/* Left profile info */}
                <div className="relative z-10 text-left flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/5 text-xs font-semibold text-[#0F151D]/80 shadow-sm mb-3">
                    <Code2 className="w-3.5 h-3.5 text-[#FF7448]" />
                    <span>MCA Candidate 2026 · NMAMIT</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F151D] tracking-tight">
                    {profile?.name || "Jeevan Kumar"}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base text-[#0F151D]/70 max-w-md leading-relaxed">
                    {profile?.bio || "Aspiring Software Developer with a strong foundation in Java, JavaScript, and full-stack development. Skilled in building scalable, responsive web applications using React, Node.js, and Spring Boot."}
                  </p>

                  {/* Highlights Pill Badges */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-black/5 text-xs font-bold text-[#FF7448] shadow-sm">
                      🏆 1st Place National Hackathon
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-black/5 text-xs font-medium text-[#0F151D]">
                      <Layers className="w-3 h-3 text-[#1450C6]" />
                      React 19 · Node · Spring Boot
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-black/5 text-xs font-medium text-[#0F151D]">
                      <Database className="w-3 h-3 text-[#22C55E]" />
                      MySQL · MongoDB · JPA
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-black/5 text-xs font-medium text-[#0F151D]">
                      <MapPin className="w-3 h-3 text-[#FF7448]" />
                      NMAMIT, Nitte
                    </span>
                  </div>
                </div>

                {/* Right Profile Photo with Nomu Ring Effect */}
                <div className="relative z-10 shrink-0">
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full p-2 bg-gradient-to-tr from-[#FF7448] via-[#FFBFA6] to-[#1450C6] shadow-xl">
                    <img
                      src={myPhoto}
                      alt="Jeevan Shetty"
                      className="w-full h-full object-cover rounded-full border-2 border-white shadow-inner"
                    />
                    <div className="absolute bottom-2 right-2 bg-white px-2.5 py-1 rounded-full border border-black/10 shadow-md flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
                      <span className="text-[10px] font-bold text-[#0F151D]">ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔄 Infinite Tech Stack Marquee (Nomu Social Proof Style) */}
      <div className="mt-14 md:mt-20 border-y border-black/[0.05] bg-white/50 py-5 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-5 mb-2 flex items-center justify-between">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F151D]/45">
            Core Technologies & Toolkit
          </p>
          <span className="text-xs font-mono text-[#FF7448]">10+ Mastered Tools</span>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee gap-8 items-center py-2">
            {[...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm text-sm font-semibold text-[#0F151D]/80 hover:text-[#0F151D] hover:border-[#FF7448]/40 transition-colors"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          {/* Gradient Masks */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-[#FFF9F6] to-transparent pointer-events-none z-10"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-[#FFF9F6] to-transparent pointer-events-none z-10"
          />
        </div>
      </div>
    </div>
  );
}

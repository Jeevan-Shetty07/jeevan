import React, { useState, useEffect } from "react";
import { ArrowUp, Heart, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import resume from "../assets/resume.pdf";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/Jeevan-Shetty07",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/jeevan-shetty-241613229/",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/9353819063?text=Hello%20Jeevan%20👋",
    },
    {
      name: "Gmail",
      icon: <FaEnvelope />,
      onClick: () => {
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=jeevanshetty9481@gmail.com&su=Hello%20Jeevan&body=Hello%20Jeevan",
          "_blank"
        );
      },
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://instagram.com/g1shetty07",
    },
  ];

  return (
    <footer className="relative bg-[#0F151D] text-white pt-16 pb-12 overflow-hidden border-t border-black/10">
      {/* Background Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 nomu-grid-dark opacity-20 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Tier: Brand, Nav & Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-extrabold tracking-tight text-white">
                Jeevan<span className="text-[#FF7448]">.</span>
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-white/60 max-w-sm">
              Full-Stack Developer crafting fast, human-centric software experiences.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-white/75 font-medium">
            <a href="#projects" className="hover:text-[#FF7448] transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-[#FF7448] transition-colors">
              Skills & Tech
            </a>
            <a href="#about" className="hover:text-[#FF7448] transition-colors">
              Journey
            </a>
            <a href="#contact" className="hover:text-[#FF7448] transition-colors">
              Contact
            </a>
            <a
              href={resume}
              download
              className="text-[#FF7448] hover:underline"
            >
              Resume PDF ↗
            </a>
          </div>

          {/* Back to Top Pill Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs font-semibold hover:bg-white hover:text-[#0F151D] transition-all shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Middle Tier: Live Time & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8">
          {/* Live India Clock Indicator */}
          <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
            <span className="text-white/80">Bengaluru, IN</span>
            <span className="text-white/30">|</span>
            <span className="text-[#FFBFA6] font-bold">{time || "IST"}</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 text-lg">
            {socials.map((s, idx) => (
              <a
                key={idx}
                href={s.link || "#"}
                onClick={s.onClick || undefined}
                target={s.link ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#FF7448] hover:border-[#FF7448] transition-all shadow-sm hover:scale-110"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Big Stylized Signature Logo */}
        <div className="text-center py-6 select-none opacity-25">
          <span className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent">
            JEEVAN SHETTY
          </span>
        </div>

        {/* Bottom Tier: Copyright */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-white/40">
          <p>© {new Date().getFullYear()} Jeevan Shetty. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed & Engineered by <span className="text-[#FF7448] font-semibold">Jeevan Shetty</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

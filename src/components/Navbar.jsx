import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, FileText, Send } from "lucide-react";
import resume from "../assets/resume.pdf";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills & Tech" },
    { id: "about", label: "Journey" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);

          const scrollPos = window.scrollY + 250;
          links.forEach(({ id }) => {
            const section = document.getElementById(id);
            if (section) {
              const top = section.offsetTop;
              const bottom = top + section.offsetHeight;
              if (scrollPos >= top && scrollPos < bottom) {
                setActive(id);
              }
            }
          });

          if (window.scrollY < 200) {
            setActive("home");
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    setMobileMenuOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 🚀 Desktop Floating Capsule Navbar */}
      <header className="sticky top-4 z-50 w-full px-4 sm:px-8 max-w-6xl mx-auto transition-all duration-300">
        <nav
          className={`flex items-center justify-between gap-4 rounded-full bg-[#FFF9F6]/90 backdrop-blur-xl border border-black/5 px-6 py-3 transition-all duration-300 ${
            scrolled
              ? "shadow-[0_12px_32px_-10px_rgba(15,21,29,0.15)] bg-white/95"
              : "shadow-[0_6px_20px_-6px_rgba(15,21,29,0.07)]"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleScrollTo("home")}
              className="group flex items-center gap-1.5 text-xl font-extrabold tracking-tight text-[#0F151D] hover:opacity-85 transition-opacity"
            >
              <span>Jeevan</span>
              <span className="h-2 w-2 rounded-full bg-[#FF7448] inline-block group-hover:scale-125 transition-transform" />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5">
            {links.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => handleScrollTo(id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#0F151D] text-white shadow-sm"
                      : "text-[#0F151D]/70 hover:text-[#0F151D] hover:bg-black/[0.04]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={resume}
              download
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white border border-black/10 text-[#0F151D] hover:bg-[#F8F5F2] hover:border-black/20 transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#0F151D]/70" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => handleScrollTo("contact")}
              className="group inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold bg-[#FF7448] text-white hover:bg-[#E85E32] transition-all shadow-[0_4px_12px_rgba(255,116,72,0.3)] hover:shadow-[0_6px_16px_rgba(255,116,72,0.4)]"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              aria-label="Toggle Navigation Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#0F151D] hover:bg-black/5 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu Sheet */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-3xl bg-[#FFF9F6]/98 backdrop-blur-2xl border border-black/10 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col gap-2">
              {links.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleScrollTo(id)}
                  className={`text-left px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                    active === id
                      ? "bg-[#0F151D] text-white"
                      : "text-[#0F151D]/80 hover:bg-black/5"
                  }`}
                >
                  {label}
                </button>
              ))}

              <div className="pt-2 mt-2 border-t border-black/5 flex flex-col gap-2">
                <a
                  href={resume}
                  download
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-sm font-semibold bg-white border border-black/10 text-[#0F151D]"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-sm font-semibold bg-[#FF7448] text-white shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Get in Touch</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

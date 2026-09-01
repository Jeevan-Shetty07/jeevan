import React, { useState } from "react";
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { usePortfolio } from "../context/PortfolioContext";

export default function Projects() {
  const { projects } = usePortfolio();
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.type === filter);

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/5 text-xs font-semibold text-[#0F151D]/70 shadow-sm mb-3">
            <Layers className="w-3.5 h-3.5 text-[#FF7448]" />
            <span>Featured Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F151D] tracking-tight">
            See what you can build <br className="hidden sm:inline" />
            <span className="text-[#FF7448]">with full-stack code.</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-white border border-black/5 shadow-sm self-start md:self-auto">
          {["all", "fullstack", "frontend"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition-all ${
                filter === tab
                  ? "bg-[#0F151D] text-white shadow-sm"
                  : "text-[#0F151D]/70 hover:text-[#0F151D] hover:bg-black/5"
              }`}
            >
              {tab === "all" ? "All Projects" : tab === "fullstack" ? "Full Stack" : "Frontend & Tools"}
            </button>
          ))}
        </div>
      </div>

      {/* 🚀 Nomu Signature 12-Column Bouncy Grid */}
      <div className="grid grid-cols-12 gap-5 sm:gap-6">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className={`group relative ${proj.colSpan} rounded-3xl md:rounded-[36px] bg-white border border-black/5 shadow-[0_10px_30px_-10px_rgba(15,21,29,0.07)] hover:shadow-[0_24px_50px_-12px_rgba(15,21,29,0.16)] transition-all duration-300 flex flex-col overflow-hidden min-h-[440px] md:min-h-[480px]`}
          >
            {/* Inner Inset Stage */}
            <div className={`relative m-3 sm:m-4 rounded-2xl md:rounded-[28px] ${proj.accentBg} border border-black/[0.06] p-6 sm:p-8 flex-1 flex flex-col justify-between overflow-hidden`}>
              {/* Subtle Grid Pattern Overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 nomu-grid-card pointer-events-none"
              />

              {/* Card Top: Status Pill + Tech Tag */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-black/5 text-xs font-semibold text-[#0F151D] shadow-sm">
                  {proj.statusType === "live" ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
                      <span className="text-[#0F151D]">{proj.status}</span>
                    </>
                  ) : (
                    <>
                      <span className="w-2 h-2 rounded-full bg-[#FF7448]" />
                      <span className="text-[#0F151D]">{proj.status}</span>
                    </>
                  )}
                </div>

                <span className="text-xs font-mono text-[#0F151D]/60 font-medium">
                  {proj.tag}
                </span>
              </div>

              {/* Card Body: Title & Description */}
              <div className="relative z-10 mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F151D] tracking-tight group-hover:text-[#FF7448] transition-colors">
                  {proj.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#0F151D]/70 leading-relaxed max-w-xl">
                  {proj.desc}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 flex items-center gap-2 mb-4">
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0F151D] text-white text-xs font-semibold hover:bg-[#212C3A] transition-all shadow-sm"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-black/10 text-[#0F151D] text-xs font-semibold hover:bg-[#FAF6F2] hover:border-black/20 transition-all shadow-sm"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
              </div>

              {/* Elevated Project Visual Mockup Sheet */}
              <div className="relative mt-auto pt-2">
                <div className="rounded-t-2xl overflow-hidden border-t-2 border-x-2 border-white/80 shadow-[0_16px_36px_-8px_rgba(15,21,29,0.22)] bg-white transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="h-40 sm:h-48 w-full overflow-hidden bg-white/40 flex items-center justify-center">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Sparkles, Terminal, Cpu, Database, Layout, GitBranch, Server, Code } from "lucide-react";
import { FaReact, FaJs, FaPhp, FaJava, FaPython, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaDatabase, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiMysql, SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { usePortfolio } from "../context/PortfolioContext";

const getSkillIcon = (skill) => {
  const name = (skill.title || "").toLowerCase();
  if (name.includes("react")) return <FaReact className="text-[#61DAFB] text-3xl" />;
  if (name.includes("node")) return <FaNodeJs className="text-[#339933] text-3xl" />;
  if (name.includes("express")) return <SiExpress className="text-[#0F151D] text-3xl" />;
  if (name.includes("mongo")) return <SiMongodb className="text-[#47A248] text-3xl" />;
  if (name.includes("postman")) return <SiPostman className="text-[#FF6C37] text-3xl" />;
  if (name.includes("tailwind")) return <SiTailwindcss className="text-[#06B6D4] text-3xl" />;
  if (name.includes("mysql") || name.includes("sql") || name.includes("database")) return <SiMysql className="text-[#4479A1] text-3xl" />;
  if (name.includes("php")) return <FaPhp className="text-[#777BB4] text-3xl" />;
  if (name.includes("java") && !name.includes("script")) return <FaJava className="text-[#EA2D2E] text-3xl" />;
  if (name.includes("python")) return <FaPython className="text-[#3776AB] text-3xl" />;
  if (name.includes("git")) return <FaGitAlt className="text-[#F05032] text-3xl" />;
  if (name.includes("html") || name.includes("css")) return <FaHtml5 className="text-[#E34F26] text-3xl" />;
  if (name.includes("bootstrap")) return <SiBootstrap className="text-[#7952B3] text-3xl" />;
  if (name.includes("js") || name.includes("javascript")) return <FaJs className="text-[#F7DF1E] text-3xl" />;
  return <Cpu className="text-[#FF7448] text-3xl" />;
};

export default function Skills() {
  const { skills } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/5 text-xs font-semibold text-[#0F151D]/70 shadow-sm mb-3">
          <Cpu className="w-3.5 h-3.5 text-[#FF7448]" />
          <span>Technical Toolkit</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F151D] tracking-tight">
          Oh yeah, and all this <span className="text-[#FF7448]">expertise too.</span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-[#0F151D]/65 max-w-xl">
          From frontend performance to database integrity, here is the full engineering toolbox I leverage every day.
        </p>

        {/* Category Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: "all", label: "All Skills" },
            { id: "frontend", label: "Frontend" },
            { id: "backend", label: "Backend" },
            { id: "database", label: "Database" },
            { id: "core", label: "Languages & DSA" },
            { id: "devops", label: "DevOps & Tools" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#0F151D] text-white shadow-md"
                  : "bg-white border border-black/5 text-[#0F151D]/70 hover:text-[#0F151D] hover:bg-black/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 🧩 Nomu Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="group relative rounded-3xl bg-white border border-black/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_-8px_rgba(15,21,29,0.12)] transition-all duration-300 p-2 overflow-hidden flex flex-col"
          >
            {/* Inset Stage */}
            <div className="relative rounded-[22px] bg-[#FAF6F2] border border-black/[0.05] p-5 sm:p-6 flex-1 flex flex-col justify-between overflow-hidden">
              {/* Subtle Grid Watermark */}
              <div
                aria-hidden="true"
                className="absolute inset-0 nomu-grid-card pointer-events-none"
              />

              <div className="relative z-10">
                {/* Header: Icon + Status Dot */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {getSkillIcon(skill)}
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/5 text-[11px] font-semibold text-[#0F151D]">
                    <span
                      className="w-2 h-2 rounded-full animate-ping"
                      style={{ backgroundColor: skill.statusColor || "#22C55E" }}
                    />
                    <span className="text-[#0F151D]/80">{skill.status}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-[#0F151D] tracking-tight group-hover:text-[#FF7448] transition-colors">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-[#0F151D]/70 leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="relative z-10 mt-5 pt-3 border-t border-black/[0.04] flex items-center justify-between text-[11px] font-mono text-[#0F151D]/50">
                <span className="capitalize">{skill.category}</span>
                <span className="text-[#FF7448] font-bold">Verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

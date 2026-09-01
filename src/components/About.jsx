import React from "react";
import { GraduationCap, BookOpen, Compass, Award, Lightbulb, CheckCircle2, ArrowRight, Trophy, Users, Code, Check, ShieldCheck, Flame } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

export default function About() {
  const { education, certifications, achievements } = usePortfolio();

  const softSkills = [
    { title: "Problem Solving", desc: "Deconstructing complex architectural challenges into optimal, modular algorithmic solutions." },
    { title: "Critical Thinking", desc: "Evaluating system bottlenecks, database query efficiency, and edge case resilience." },
    { title: "Team Collaboration", desc: "Pair programming, code reviews, agile sprints, and mentoring junior developers." },
    { title: "Adaptability", desc: "Rapidly mastering emerging frameworks (React 19, Spring Boot, n8n AI workflows)." }
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      {/* 🏷️ Section Header with Hand-Drawn Vector Loop Accent */}
      <div className="flex flex-col items-center text-center mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/5 text-xs font-semibold text-[#0F151D]/70 shadow-sm mb-4">
          <Compass className="w-3.5 h-3.5 text-[#FF7448]" />
          <span>Academic & Professional Journey</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#0F151D] tracking-tight max-w-3xl leading-[1.2]">
          <div className="relative inline-block align-baseline">
            {/* Playful Orange SVG Vector Lasso Oval */}
            <div
              className="absolute pointer-events-none -left-6 -right-6 md:-left-8 md:-right-8 -inset-y-2 md:-inset-y-4"
              aria-hidden="true"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 150"
                preserveAspectRatio="none"
                className="w-full h-full overflow-visible"
              >
                <path
                  d="M 320 25
                     C 420 70, 350 125, 200 135
                     C 80 135, 40 125, 40 75
                     C 40 30, 110 20, 200 20
                     C 280 20, 310 45, 310 45"
                  fill="none"
                  strokeWidth="6"
                  stroke="#FF7448"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-90"
                />
              </svg>
            </div>
            <span className="relative z-10 text-[#0F151D]">Grow your vision</span>
          </div>
          ,<br className="hidden sm:inline" /> not your complexity.
        </h2>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-[#0F151D]/70 max-w-2xl leading-relaxed">
          Aspiring Software Developer grounded in Java, JavaScript, Spring Boot, and modern React architectures, with a relentless drive for building scalable full-stack products.
        </p>
      </div>

      {/* 🏆 Section 1: Hackathons & Key Achievements */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Trophy className="w-5 h-5 text-[#FF7448]" />
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F151D] tracking-tight">
            Key Achievements & Recognition
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {(achievements || []).map((ach) => (
            <div
              key={ach.id}
              className="rounded-3xl bg-white border border-black/5 p-2 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="rounded-2xl bg-[#FAF6F2] p-5 border border-black/[0.04] flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white text-[10px] font-bold text-[#0F151D] border border-black/5 shadow-sm mb-3">
                    {ach.badge}
                  </span>
                  <h4 className="text-sm sm:text-base font-extrabold text-[#0F151D] tracking-tight">
                    {ach.title}
                  </h4>
                  <p className="mt-2 text-xs text-[#0F151D]/70 leading-relaxed">
                    {ach.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/[0.04] text-[11px] font-mono font-bold text-[#FF7448]">
                  {ach.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🏅 Section 2: Industry Certifications */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-5 h-5 text-[#1450C6]" />
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F151D] tracking-tight">
            Certifications & Cloud Credentials
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {(certifications || []).map((cert) => (
            <div
              key={cert.id}
              className="group relative rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-lg transition-all duration-300 p-2 flex flex-col"
            >
              <div className="rounded-2xl bg-[#FAF6F2] border border-black/[0.04] p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm"
                      style={{ backgroundColor: cert.badgeColor || "#0F151D" }}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{cert.badge}</span>
                    </span>
                    <span className="text-xs font-mono font-bold text-[#0F151D]/40">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-[#0F151D] tracking-tight group-hover:text-[#FF7448] transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#FF7448] mt-1">
                    Issued by {cert.issuer}
                  </p>
                  <p className="mt-3 text-xs text-[#0F151D]/70 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black/[0.04] flex items-center justify-between text-[11px] font-mono text-[#0F151D]/50">
                  <span>Verified Credential</span>
                  <span className="text-[#22C55E] font-bold">● Active</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🏛️ Section 3: Academic Timeline & Milestones */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="w-5 h-5 text-[#22C55E]" />
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F151D] tracking-tight">
            Academic Milestones & Education
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(education || []).map((m, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl md:rounded-[36px] bg-white border border-black/5 shadow-[0_10px_30px_-10px_rgba(15,21,29,0.08)] hover:shadow-[0_20px_45px_-12px_rgba(15,21,29,0.14)] transition-all duration-300 p-3 sm:p-4 flex flex-col"
            >
              <div className="relative rounded-2xl md:rounded-[28px] bg-[#FAF6F2] border border-black/[0.06] p-6 sm:p-8 flex-1 flex flex-col justify-between overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 nomu-grid-card pointer-events-none"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold text-[#0F151D]/60 uppercase tracking-wider">
                      {m.period}
                    </span>

                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/5 text-xs font-semibold text-[#0F151D] shadow-sm"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: m.badgeColor || "#FF7448" }}
                      />
                      <span>{m.badge}</span>
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#0F151D] tracking-tight">
                    {m.role}
                  </h4>
                  <p className="text-sm font-semibold text-[#FF7448] mt-1">
                    {m.institution}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-[#0F151D]/75 leading-relaxed">
                    {m.desc}
                  </p>

                  {m.highlights && m.highlights.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-black/[0.06] space-y-2">
                      {m.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#0F151D]/80">
                          <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🧠 Section 4: Soft Skills & Core Strengths */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Flame className="w-5 h-5 text-[#FF7448]" />
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F151D] tracking-tight">
            Soft Skills & Engineering Mindset
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {softSkills.map((s, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-black/5 shadow-sm">
              <h4 className="text-sm font-bold text-[#0F151D] flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF7448]" />
                <span>{s.title}</span>
              </h4>
              <p className="text-xs text-[#0F151D]/70 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 💡 Guiding Philosophy Banner Card */}
      <div className="rounded-3xl md:rounded-[36px] bg-[#0F151D] text-white p-6 sm:p-10 relative overflow-hidden shadow-2xl">
        <div
          aria-hidden="true"
          className="absolute inset-0 nomu-grid-dark pointer-events-none opacity-40"
        />

        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#FF7448]/20 blur-3xl pointer-events-none"
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-[#FFBFA6] mb-3">
              <Lightbulb className="w-3.5 h-3.5 text-[#FF7448]" />
              <span>Philosophy</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Code. Create. Innovate.
            </h3>

            <p className="mt-2 text-sm sm:text-base text-white/70 max-w-xl leading-relaxed">
              "To me, coding isn't just a career path — it’s a craft to transform complex human workflows into fast, reliable, intuitive digital experiences."
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FF7448] text-white font-semibold text-sm hover:bg-[#E85E32] transition-all shadow-[0_4px_20px_rgba(255,116,72,0.4)]"
            >
              <span>Let's collaborate</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { GraduationCap, BookOpen, Compass, Award, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";

export default function About() {
  const milestones = [
    {
      period: "2025 – Present",
      role: "Master of Computer Applications (MCA)",
      institution: "NMAM Institute of Technology, Nitte",
      badge: "Current Degree",
      badgeColor: "#22C55E",
      desc: "Deepening specialization in Data Structures & Algorithms, modern JavaScript/React frameworks, full-stack architectures, and high-concurrency software design.",
      highlights: [
        "Advanced Data Structures & Algorithms",
        "Modern Component-Driven Full-Stack Systems",
        "Relational & Distributed Database Design",
        "System Scalability & Performance Tuning"
      ]
    },
    {
      period: "2022 – 2025",
      role: "Bachelor of Computer Applications (BCA)",
      institution: "St. Philomena College, Puttur",
      badge: "Graduated with Honors",
      badgeColor: "#1450C6",
      desc: "Built a solid academic foundation in core computer science, software engineering principles, database administration, and developed real-world capstone projects.",
      highlights: [
        "Architected full-featured Carpooling System",
        "Engineered comprehensive Event Management Platform",
        "Proficiency in Java, PHP, C, and Web Technologies",
        "Elected Student Tech Event Coordinator"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      {/* 🏷️ Section Header with Nomu Hand-Drawn Vector Loop Accent */}
      <div className="flex flex-col items-center text-center mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/5 text-xs font-semibold text-[#0F151D]/70 shadow-sm mb-4">
          <Compass className="w-3.5 h-3.5 text-[#FF7448]" />
          <span>Academic & Personal Journey</span>
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
          I believe clean engineering and disciplined problem-solving turn complex ideas into seamless user experiences.
        </p>
      </div>

      {/* 🏛️ Timeline / Milestone Double Inset Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {milestones.map((m, idx) => (
          <div
            key={idx}
            className="group relative rounded-3xl md:rounded-[36px] bg-white border border-black/5 shadow-[0_10px_30px_-10px_rgba(15,21,29,0.08)] hover:shadow-[0_20px_45px_-12px_rgba(15,21,29,0.14)] transition-all duration-300 p-3 sm:p-4 flex flex-col"
          >
            {/* Inset Area */}
            <div className="relative rounded-2xl md:rounded-[28px] bg-[#FAF6F2] border border-black/[0.06] p-6 sm:p-8 flex-1 flex flex-col justify-between overflow-hidden">
              {/* Grid Background */}
              <div
                aria-hidden="true"
                className="absolute inset-0 nomu-grid-card pointer-events-none"
              />

              <div className="relative z-10">
                {/* Header Period + Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold text-[#0F151D]/60 uppercase tracking-wider">
                    {m.period}
                  </span>

                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/5 text-xs font-semibold text-[#0F151D] shadow-sm"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: m.badgeColor }}
                    />
                    <span>{m.badge}</span>
                  </span>
                </div>

                {/* Role & Institution */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F151D] tracking-tight">
                  {m.role}
                </h3>
                <p className="text-sm font-semibold text-[#FF7448] mt-1">
                  {m.institution}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[#0F151D]/75 leading-relaxed">
                  {m.desc}
                </p>

                {/* Bullet Highlights */}
                <div className="mt-6 pt-4 border-t border-black/[0.06] space-y-2">
                  {m.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#0F151D]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 💡 Guiding Philosophy Banner Card */}
      <div className="rounded-3xl md:rounded-[36px] bg-[#0F151D] text-white p-6 sm:p-10 relative overflow-hidden shadow-2xl">
        {/* Ambient Dark Grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 nomu-grid-dark pointer-events-none opacity-40"
        />

        {/* Ambient Glow */}
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

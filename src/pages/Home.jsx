import React, { Suspense, lazy } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import BrowserWarning from "../components/BrowserWarning";
import Footer from "../components/Footer";

// Lazy load section components
const About = lazy(() => import("../components/About"));
const Skills = lazy(() => import("../components/skills"));
const Projects = lazy(() => import("../components/Projects"));
const Contact = lazy(() => import("../components/Contact"));

export default function Home() {
  return (
    <div className="bg-[#FFF9F6] text-[#0F151D] min-h-screen relative overflow-x-hidden">
      <BrowserWarning />
      <Navbar />

      <main className="pt-0">
        {/* Hero Section */}
        <section id="home" className="relative">
          <Hero />
        </section>

        <Suspense
          fallback={
            <div className="min-h-[40vh] flex items-center justify-center text-[#0F151D]/60 font-mono text-sm">
              Loading content...
            </div>
          }
        >
          {/* Projects Section - Signature Nomu Grid Showcase */}
          <section id="projects" className="py-16 md:py-24 relative">
            <Projects />
          </section>

          {/* Skills Section - "Oh yeah, and all this too" Feature Shelf */}
          <section id="skills" className="py-16 md:py-24 relative bg-[#F7F1EC]/60 border-y border-black/[0.04]">
            <Skills />
          </section>

          {/* About Section - Editorial Journey */}
          <section id="about" className="py-16 md:py-24 relative">
            <About />
          </section>

          {/* Contact Section - Clean Pill Communication */}
          <section id="contact" className="py-16 md:py-24 relative bg-[#F7F1EC]/70 border-t border-black/[0.04]">
            <Contact />
          </section>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

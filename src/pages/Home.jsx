import React, { Suspense, lazy } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import BrowserWarning from "../components/BrowserWarning";
import Footer from "../components/Footer";

// Lazy load heavy components
const About = lazy(() => import("../components/About"));
const Skills = lazy(() => import("../components/skills"));
const Projects = lazy(() => import("../components/Projects"));
const Contact = lazy(() => import("../components/Contact"));

export default function Home() {
  return (
    <div className="bg-black text-white">
      <BrowserWarning />
      <Navbar />

      <main className="pt-0">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <Hero />
        </section>

        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <section id="about" className="py-20">
            <About />
          </section>

          <section id="skills" className="py-20 bg-gray-900">
            <Skills />
          </section>

          <section id="projects" className="py-20">
            <Projects />
          </section>

          <section id="contact" className="py-20 bg-gray-900">
            <Contact />
          </section>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

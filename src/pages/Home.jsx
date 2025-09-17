import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BrowserWarning from "../components/BrowserWarning"; // 👈

export default function Home() {
  return (
    <div className="bg-black text-white">
      <BrowserWarning /> {/* 👈 Popup shows only if in Instagram */}
      <Navbar />

      <main className="pt-0">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <Hero />
        </section>

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
      </main>

      <Footer />
    </div>
  );
}

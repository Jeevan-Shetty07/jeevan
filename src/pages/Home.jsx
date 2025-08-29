import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Navbar fixed at top */}
      <Navbar />

      {/* Sections */}
      <main className="pt-20"> {/* padding so navbar doesn't overlap */}
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-900">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

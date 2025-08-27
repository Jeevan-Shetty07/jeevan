import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
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
        {/* <section id="home" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section> */}

        <section id="about" className="py-20">
          <About />
        </section>

        <section id="projects" className="py-20 bg-gray-900">
          <Projects />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

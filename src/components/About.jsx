import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 bg-black"
    >
      {/* Heading with gradient animation */}
      <h2
        className="text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x"
        data-aos="fade-down"
      >
        🌟 About Me
      </h2>

      {/* Typing effect intro */}
      <TypeAnimation
        sequence={[
          "Hi, I'm Jeevan Shetty 👋",
          1500,
          "A Passionate Web Developer 💻",
          1500,
          "I Build Creative & Responsive websites 🚀",
          2000,
        ]}
        wrapper="h3"
        cursor={true}
        repeat={Infinity}
        className="text-xl md:text-2xl font-semibold text-blue-400 mb-8"
      />

      {/* Main content */}
      <p
        className="max-w-3xl text-gray-300 text-lg md:text-xl leading-relaxed space-y-3"
      >
        <span
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I love crafting{" "}
          <span className="font-semibold text-white hover:text-blue-400 transition">
            clean UIs
          </span>{" "}
          ✨ with{" "}
          <span className="font-semibold text-white hover:text-purple-400 transition">
            efficient backend logic
          </span>{" "}
          ⚙️.
        </span>
        <br />
        <span
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Skilled in{" "}
          <span className="text-blue-400 hover:scale-110 inline-block transition">
            React
          </span>
          ,{" "}
          <span className="text-blue-400 hover:scale-110 inline-block transition">
            PHP
          </span>
          ,{" "}
          <span className="text-blue-400 hover:scale-110 inline-block transition">
            SQL
          </span>
          , and{" "}
          <span className="text-blue-400 hover:scale-110 inline-block transition">
            Javascript
          </span>
          .
        </span>
        <br />
        <span
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Currently diving into{" "}
          <span className="text-blue-400 hover:text-green-400 transition font-semibold">
            DSA in C & Java
          </span>{" "}
          📚 to sharpen my problem-solving skills.
        </span>
      </p>
    </section>
  );
}

import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const socials = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/g1shetty07/",
      color: "hover:text-pink-500 hover:shadow-pink-500/50",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/jeevan-shetty-241613229/",
      color: "hover:text-blue-500 hover:shadow-blue-500/50",
    },
    {
      name: "Gmail",
      icon: <FaEnvelope />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=jeevanshetty9481@gmail.com&su=Hello%20Jeevan&body=Hello%20Jeevan",
      color: "hover:text-red-500 hover:shadow-red-500/50",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/9353819063?text=Hello%20Jeevan%20%F0%9F%91%8B%F0%9F%8F%BB",
      color: "hover:text-green-500 hover:shadow-green-500/50",
    },
  ];

  return (
 <section
  id="contact"
  className="relative md:pt-40 min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-black overflow-hidden "
>

      {/* Background Bubbles */}
      <div className="absolute -top-20 -left-20 w-56 sm:w-72 md:w-80 lg:w-96 h-56 sm:h-72 md:h-80 lg:h-96 bg-purple-700 opacity-30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-56 sm:w-72 md:w-80 lg:w-96 h-56 sm:h-72 md:h-80 lg:h-96 bg-blue-700 opacity-30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Heading */}
      <h2
        className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 z-10 relative"
        data-aos="fade-up"
      >
        Let’s Connect 🚀
      </h2>

      {/* Subtext */}
      <p
        className="text-lg text-gray-300 mb-12 text-center max-w-2xl z-10 relative"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Want to collaborate, hire me, or just say hi?  
        Find me on these platforms 👇
      </p>

      {/* Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 z-10 relative"
        data-aos="zoom-in"
      >
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col items-center justify-center p-8 rounded-2xl bg-gray-800 text-gray-300 text-center transition transform hover:scale-105 hover:shadow-2xl ${social.color}`}
            data-aos="flip-up"
            data-aos-delay={i * 200}
          >
            <div className="text-5xl mb-4 transition group-hover:scale-125">
              {social.icon}
            </div>
            <h3 className="text-xl font-bold group-hover:text-white">
              {social.name}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}

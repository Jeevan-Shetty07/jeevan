import React from "react";
import { motion } from "framer-motion";
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
      className="relative md:pt-40 min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-black overflow-hidden"
    >
      {/* Background Bubbles */}
      <motion.div
        className="absolute -top-20 -left-20 w-56 sm:w-72 md:w-80 lg:w-96 h-56 sm:h-72 md:h-80 lg:h-96 bg-purple-700 opacity-30 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-56 sm:w-72 md:w-80 lg:w-96 h-56 sm:h-72 md:h-80 lg:h-96 bg-blue-700 opacity-30 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl pt-14 md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient-x z-10 relative"
      >
        Let’s Connect 🚀
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.9 }}
        viewport={{ once: true }}
        className="text-lg text-gray-300 mb-12 text-center max-w-2xl z-10 relative"
      >
        Want to collaborate, hire me, or just say hi?  
        Find me on these platforms 👇
      </motion.p>

      {/* Cards */}
      <motion.div
        className="grid pb-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 z-10 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {socials.map((social, i) => (
          <motion.a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col items-center justify-center p-8 rounded-2xl bg-gray-800 text-gray-300 text-center transition transform ${social.color}`}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.1,
              rotate: 3,
              boxShadow: "0px 0px 20px rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-5xl mb-4 transition group-hover:scale-125">
              {social.icon}
            </div>
            <h3 className="text-xl font-bold group-hover:text-white">
              {social.name}
            </h3>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

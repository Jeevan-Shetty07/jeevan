import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const socials = [
    {
      name: "Instagram",
      icon: (
        <FaInstagram className="text-pink-500 sm:text-gray-300 sm:group-hover:text-pink-500" />
      ),
      link: "https://www.instagram.com/g1shetty07/",
      color: "sm:group-hover:shadow-pink-500/70",
    },
    {
      name: "LinkedIn",
      icon: (
        <FaLinkedin className="text-blue-500 sm:text-gray-300 sm:group-hover:text-blue-500" />
      ),
      link: "https://www.linkedin.com/in/jeevan-shetty-241613229/",
      color: "sm:group-hover:shadow-blue-500/70",
    },
    {
      name: "Gmail",
      icon: (
        <FaEnvelope className="text-red-500 sm:text-gray-300 sm:group-hover:text-red-500" />
      ),
      link: "mailto:jeevanshetty9481@gmail.com",
      color: "sm:group-hover:shadow-red-500/70",
    },
    {
      name: "WhatsApp",
      icon: (
        <FaWhatsapp className="text-green-500 sm:text-gray-300 sm:group-hover:text-green-500" />
      ),
      link: "https://wa.me/9353819063?text=Hello%20Jeevan%20👋🏻",
      color: "sm:group-hover:shadow-green-500/70",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-black overflow-hidden"
    >
      {/* Floating particles / orbs */}
      <motion.div
        className="absolute pt-100 inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(56,189,248,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(168,85,247,0.15) 0%, transparent 60%)",
        }}
      />

      {/* Animated orbiting rings */}
      <motion.div
        className="absolute border border-purple-600/40 rounded-full w-[500px] h-[500px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute border border-blue-500/30 rounded-full w-[700px] h-[700px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x relative z-10"
      >
        Let’s Connect 🚀
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.9 }}
        viewport={{ once: true }}
        className="text-lg text-gray-300 mb-12 text-center max-w-2xl relative z-10"
      >
        Whether it’s a collab, a project, or just a friendly hello —  
        I’d love to hear from you!
      </motion.p>

      {/* Contact Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 z-10"
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
            className={`group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-gray-200 text-center transition transform ${social.color}`}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.12,
              rotate: 2,
              boxShadow: "0px 0px 25px rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 0.96 }}
          >
            {/* Neon glow behind icon */}
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></span>
            
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

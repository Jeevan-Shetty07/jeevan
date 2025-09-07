import React, { useState, useEffect } from "react";
import "./index.css";
import Home from "./pages/Home";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // ⏳ loader duration (3s)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {showLoader ? (
        // 🌟 Loader with Name Split Animation
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
          {/* Glow Orbs & Stars can stay if you like */}
          <div className="relative z-10 flex items-center space-x-4">
            <span className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-slide-left">
              Jeevan
            </span>
            <span className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 animate-slide-right">
              Shetty
            </span>
          </div>

          <style>
            {`
              @keyframes slideLeft {
                0% { transform: translateX(0); opacity: 1; }
                100% { transform: translateX(-120%); opacity: 0; }
              }
              @keyframes slideRight {
                0% { transform: translateX(0); opacity: 1; }
                100% { transform: translateX(120%); opacity: 0; }
              }

              .animate-slide-left {
                animation: slideLeft 1.5s ease-in-out forwards;
                animation-delay: 1s; /* wait a moment before sliding */
              }
              .animate-slide-right {
                animation: slideRight 1.5s ease-in-out forwards;
                animation-delay: 1s;
              }
            `}
          </style>
        </div>
      ) : (
        // Website Reveal Effect
        <div className="animate-screen-fade">
          <Home />
          <style>
            {`
              @keyframes screenFade {
                0% { opacity: 0; }
                100% { opacity: 1; }
              }
              .animate-screen-fade {
                animation: screenFade 1s ease-in forwards;
              }
            `}
          </style>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./index.css";
import Home from "./pages/Home";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // Loader duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {/* Home content */}
      <div
        className={`${
          showLoader ? "opacity-0" : "opacity-100"
        } transition-opacity duration-700`}
      >
        <Home />
      </div>

      {showLoader && (
  <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden galaxy-bg">
    <span className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-slide-left">
      Jeevan
    </span>
    <span className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 animate-slide-right">
      Shetty
    </span>

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
          animation-delay: 1s;
          margin-right: 10px;
        }
        .animate-slide-right {
          animation: slideRight 1.5s ease-in-out forwards;
          animation-delay: 1s;
          margin-left: 10px;
        }

        /* 🌌 Galaxy Background */
        .galaxy-bg {
          background: radial-gradient(ellipse at center, #0d0d2b 0%, #000000 100%);
          background-size: cover;
          overflow: hidden;
        }

        /* ✨ Moving Stars */
        .galaxy-bg::before {
          content: '';
          position: absolute;
          top: -200%;
          left: -200%;
          width: 400%;
          height: 400%;
          background: transparent;
          background-image: radial-gradient(2px 2px at 20px 30px, white, transparent),
                            radial-gradient(1.5px 1.5px at 100px 150px, white, transparent),
                            radial-gradient(1.8px 1.8px at 200px 80px, white, transparent),
                            radial-gradient(2px 2px at 300px 200px, white, transparent),
                            radial-gradient(1.2px 1.2px at 400px 120px, white, transparent),
                            radial-gradient(1.5px 1.5px at 500px 250px, white, transparent);
          animation: moveStars 40s linear infinite;
        }

        @keyframes moveStars {
          from { transform: translateY(0); }
          to { transform: translateY(1000px); }
        }
      `}
    </style>
  </div>
)}

    </div>
  );
}

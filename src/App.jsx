import React, { Suspense } from "react";
import "./index.css";

// Lazy-load pages for faster initial render
const Home = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <Suspense
        fallback={
          <div className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
            {/* 🌌 Galaxy Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-blue-900/10 to-transparent blur-3xl animate-pulse"></div>

            {/* 🌌 Glow Orbs */}
            <div className="absolute -top-28 -left-28 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute -bottom-28 -right-28 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

            {/* 🌠 Floating Stars */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(40)].map((_, i) => (
                <span
                  key={i}
                  className="absolute w-[2px] h-[2px] bg-white/60 rounded-full animate-float"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${3 + Math.random() * 5}s`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                />
              ))}
            </div>

            {/* 🌟 Bouncing Ball Loader */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-6 h-6 bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 rounded-full animate-bounce-ball mb-6 shadow-lg shadow-purple-500/50"></div>
              <p className="text-white text-lg font-medium">
                Loading....
              </p>
            </div>

            <style>
              {`
          @keyframes bounce-ball {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-60px); }
          }
          .animate-bounce-ball {
            animation: bounce-ball 1s infinite ease-in-out;
          }
        `}
            </style>
          </div>
        }
      >
        <Home />
      </Suspense>
    </div>
  );
}

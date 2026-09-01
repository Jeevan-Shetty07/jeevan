import React, { useState, useEffect } from "react";
import "./index.css";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { PortfolioProvider } from "./context/PortfolioContext";

const LOADING_PHRASES = [
  "Compiling modern architectures...",
  "Optimizing React component tree...",
  "Benchmarking DSA solutions...",
  "Indexing database schemas...",
  "Polishing pixel-perfect UI...",
  "Fine-tuning animations...",
  "Brewing coffee & code...",
  "Ready to ship!"
];

const ICONS = ["✢", "✳", "✶", "✻", "✽", "✺", "✷", "✣"];

function checkIsAdminRoute() {
  const hash = window.location.hash || "";
  const path = window.location.pathname || "";
  return (
    hash === "#admin" ||
    hash === "#/admin" ||
    hash.startsWith("#admin") ||
    hash.startsWith("#/admin") ||
    path.endsWith("/admin") ||
    path.endsWith("/admin/") ||
    path.includes("/admin")
  );
}

function AppContent() {
  const [showLoader, setShowLoader] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [iconIndex, setIconIndex] = useState(0);
  const [isAdmin, setIsAdmin] = useState(checkIsAdminRoute);

  useEffect(() => {
    const handleRouteCheck = () => {
      setIsAdmin(checkIsAdminRoute());
    };

    window.addEventListener("hashchange", handleRouteCheck);
    window.addEventListener("popstate", handleRouteCheck);

    // Keyboard shortcut Ctrl+Shift+A for direct Admin access
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") {
        e.preventDefault();
        window.location.hash = window.location.hash.includes("admin") ? "#home" : "#admin";
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Cycle phrases
    const phraseInterval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % LOADING_PHRASES.length);
    }, 280);

    // Cycle rotating glyphs
    const iconInterval = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % ICONS.length);
    }, 120);

    // End loader
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1800);

    return () => {
      window.removeEventListener("hashchange", handleRouteCheck);
      window.removeEventListener("popstate", handleRouteCheck);
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(phraseInterval);
      clearInterval(iconInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-[#FFF9F6] text-[#0F151D] min-h-screen font-sans selection:bg-[#FF7448] selection:text-white">
      {/* Route Content */}
      <div
        className={`${
          showLoader ? "opacity-0" : "opacity-100"
        } transition-opacity duration-700`}
      >
        {isAdmin ? <Admin /> : <Home />}
      </div>

      {/* Nomu Minimalist Ambient Intro Loader */}
      {showLoader && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFF9F6] overflow-hidden">
          {/* Ambient Warm & Cool Blobs */}
          <div
            aria-hidden="true"
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FF7448]/15 blur-3xl animate-float-slow pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#1450C6]/15 blur-3xl animate-float-slow pointer-events-none"
            style={{ animationDelay: "2s" }}
          />

          {/* Grid lines */}
          <div
            aria-hidden="true"
            className="absolute inset-0 nomu-grid-bg opacity-40 pointer-events-none"
          />

          {/* Center Stage */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            {/* Logo */}
            <div className="flex items-center gap-1 mb-8">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F151D]">
                Jeevan<span className="text-[#FF7448]">.</span>
              </span>
            </div>

            {/* Reel Status Box */}
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 border border-black/5 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.08)] backdrop-blur-md">
              {/* Spinner Symbol */}
              <span className="text-base font-mono text-[#FF7448] w-4 text-center font-bold">
                {ICONS[iconIndex]}
              </span>

              {/* Status phrase */}
              <span className="text-xs sm:text-sm font-medium text-[#0F151D]/75 font-mono min-w-[210px] text-left">
                {LOADING_PHRASES[phraseIndex]}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <AppContent />
    </PortfolioProvider>
  );
}

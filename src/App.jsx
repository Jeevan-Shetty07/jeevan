import React, { Suspense } from "react";
import "./index.css";

// Lazy-load pages for faster initial render
const Home = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {/* Suspense ensures fallback while Home loads */}
      <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
        <Home />
      </Suspense>
    </div>
  );
}

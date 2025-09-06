import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Lazy-load AOS for better performance
let AOS;
if (typeof window !== "undefined") {
  import("aos").then(module => {
    AOS = module.default;
  });
}
import "aos/dist/aos.css";

function Root() {
  useEffect(() => {
    if (!AOS) return;

    AOS.init({
      duration: 700, // slightly faster for smoother feel
      easing: "ease-out",
      once: true,
      offset: 40,
      disable: window.innerWidth < 768 // disable on mobile
    });

    const handleResize = () => AOS.refresh();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Root />);

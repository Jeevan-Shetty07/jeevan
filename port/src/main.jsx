import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// AOS (Animate On Scroll)
import AOS from "aos";
import "aos/dist/aos.css";

// AOS wrapper to initialize inside React
function Root() {
  useEffect(() => {
    AOS.init({
      duration: 800,       // animation duration
      easing: "ease-out",  // smooth easing
      once: true,          // animate only once
      offset: 40,          // trigger offset
    });
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Root />);

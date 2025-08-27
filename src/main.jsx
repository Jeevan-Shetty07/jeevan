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
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 40,
      // Responsive settings
      disable: function() {
        // Disable animations on mobile for better performance
        const maxWidth = 768;
        return window.innerWidth < maxWidth;
      }
    });

    // Refresh AOS when window is resized
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
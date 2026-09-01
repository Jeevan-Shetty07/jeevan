import React, { createContext, useContext, useState, useEffect } from "react";
import carpool1 from "../assets/carpool1.png";
import port1 from "../assets/port1.png";
import qr from "../assets/qr.png";
import qr1 from "../assets/qr1.png";
import chat from "../assets/chat.png";
import image1 from "../assets/image1.png";
import bingo1 from "../assets/bingo1.png";

const PortfolioContext = createContext(null);

const DEFAULT_PROJECTS = [
  {
    id: "chat-app",
    title: "Realtime Chat Application",
    badge: "Featured Full-Stack",
    tag: "React · WebSockets · Node",
    status: "Live Production",
    statusType: "live",
    desc: "Instant real-time messaging application with live typing indicators, room management, and responsive socket connection.",
    github: "https://github.com/Jeevan-Shetty07",
    demo: "https://realtime-chat-app-six-tawny.vercel.app/",
    image: chat,
    colSpan: "col-span-12 lg:col-span-8",
    accentBg: "bg-gradient-to-br from-[#1450C6]/10 to-[#1450C6]/5",
    type: "fullstack",
    featured: true
  },
  {
    id: "bingo-game",
    title: "Interactive Bingo Game",
    badge: "Multiplayer Web App",
    tag: "React · Interactive UI · Game Logic",
    status: "Live Game",
    statusType: "live",
    desc: "Engaging multiplayer Bingo game with instant synchronization, sound effects, and automated victory verification.",
    github: "https://github.com/Jeevan-Shetty07",
    demo: "https://bingo.jeevanshetty.me/",
    image: bingo1,
    colSpan: "col-span-12 lg:col-span-4",
    accentBg: "bg-gradient-to-br from-[#FF7448]/10 to-[#FF7448]/5",
    type: "frontend",
    featured: true
  },
  {
    id: "carpooling",
    title: "Carpooling & Ride Sharing",
    badge: "System Architecture",
    tag: "PHP · MySQL · Bootstrap · Maps",
    status: "Architecture",
    statusType: "system",
    desc: "Comprehensive ride-sharing portal featuring route matching, seat reservation, fare estimation, and driver verification.",
    github: "https://github.com/Jeevan-Shetty07/carpoooling",
    demo: "",
    image: carpool1,
    colSpan: "col-span-12 lg:col-span-4",
    accentBg: "bg-gradient-to-br from-[#0F151D]/5 to-[#0F151D]/10",
    type: "fullstack",
    featured: false
  },
  {
    id: "event-management",
    title: "Event Management Platform",
    badge: "Full Booking Engine",
    tag: "PHP · Relational SQL · UI/UX",
    status: "Full Solution",
    statusType: "system",
    desc: "End-to-end event planning ecosystem managing vendor contracts, venue schedules, catering packages, and customer invoicing.",
    github: "https://github.com/Jeevan-Shetty07/EventManagemnet",
    demo: "",
    image: port1,
    colSpan: "col-span-12 lg:col-span-8",
    accentBg: "bg-gradient-to-br from-[#22C55E]/10 to-[#22C55E]/5",
    type: "fullstack",
    featured: true
  },
  {
    id: "image-search",
    title: "Image Search Engine",
    badge: "API Integration",
    tag: "React · REST API · Infinite Scroll",
    status: "Live Utility",
    statusType: "live",
    desc: "Fast, responsive media search engine with instant query debounce, high-resolution downloads, and tag curation.",
    github: "https://github.com/Jeevan-Shetty07",
    demo: "https://jeevan-image-search.vercel.app/",
    image: image1,
    colSpan: "col-span-12 md:col-span-4",
    accentBg: "bg-gradient-to-br from-[#1450C6]/5 to-[#FFBFA6]/10",
    type: "frontend",
    featured: false
  },
  {
    id: "quote-generator",
    title: "Dynamic Quote Generator",
    badge: "Web Tool",
    tag: "JavaScript · Web APIs · CSS3",
    status: "Live Utility",
    statusType: "live",
    desc: "Inspirational quote curator with 1-click clipboard copy, instant Twitter/X sharing, and randomized themes.",
    github: "https://github.com/Jeevan-Shetty07",
    demo: "https://quote-generator-g1.vercel.app/",
    image: qr1,
    colSpan: "col-span-12 md:col-span-4",
    accentBg: "bg-gradient-to-br from-[#FF7448]/5 to-[#FF7448]/10",
    type: "frontend",
    featured: false
  },
  {
    id: "qr-generator",
    title: "Custom QR Code Studio",
    badge: "Developer Tool",
    tag: "React · Canvas API · SVG Export",
    status: "Live Tool",
    statusType: "live",
    desc: "Custom QR code generator supporting text, URLs, and vCards with instant image download in multiple resolutions.",
    github: "https://github.com/Jeevan-Shetty07",
    demo: "https://qrcode-genrator-g1.vercel.app/",
    image: qr,
    colSpan: "col-span-12 md:col-span-4",
    accentBg: "bg-gradient-to-br from-[#22C55E]/5 to-[#1450C6]/10",
    type: "frontend",
    featured: false
  },
];

const DEFAULT_SKILLS = [
  {
    id: "nodejs",
    category: "backend",
    title: "Node.js Runtime",
    desc: "Event-driven, asynchronous execution, server-side REST APIs, and npm package ecosystem.",
    status: "High Performance",
    statusColor: "#22C55E",
    iconName: "FaNodeJs"
  },
  {
    id: "express",
    category: "backend",
    title: "Express.js Framework",
    desc: "Robust routing, custom middleware pipelines, authentication, error handling, and API security.",
    status: "Core Strength",
    statusColor: "#0F151D",
    iconName: "SiExpress"
  },
  {
    id: "mongodb",
    category: "database",
    title: "MongoDB & NoSQL",
    desc: "Document modeling, aggregation pipelines, Mongoose ODM, indexing, and high-volume data storage.",
    status: "Production Ready",
    statusColor: "#47A248",
    iconName: "SiMongodb"
  },
  {
    id: "postman",
    category: "devops",
    title: "Postman API Studio",
    desc: "Endpoint verification, automated test collections, environment variables, and API documentation.",
    status: "Testing Essential",
    statusColor: "#FF6C37",
    iconName: "SiPostman"
  },
  {
    id: "react",
    category: "frontend",
    title: "React.js & Modern UI",
    desc: "Component lifecycle, state management, custom hooks, and high-performance DOM rendering.",
    status: "Production Ready",
    statusColor: "#22C55E",
    iconName: "FaReact"
  },
  {
    id: "javascript",
    category: "frontend",
    title: "JavaScript (ES6+)",
    desc: "Asynchronous programming, closures, event loop, Promises, and modern web APIs.",
    status: "Core Strength",
    statusColor: "#FF7448",
    iconName: "FaJs"
  },
  {
    id: "tailwind",
    category: "frontend",
    title: "Tailwind CSS & Styling",
    desc: "Design tokens, utility-first layouts, dark mode systems, and responsive micro-animations.",
    status: "Daily Driver",
    statusColor: "#06B6D4",
    iconName: "SiTailwindcss"
  },
  {
    id: "php",
    category: "backend",
    title: "PHP Backend Architecture",
    desc: "Object-oriented server scripting, MVC structures, session security, and API endpoints.",
    status: "Enterprise Tested",
    statusColor: "#777BB4",
    iconName: "FaPhp"
  },
  {
    id: "mysql",
    category: "database",
    title: "MySQL & Relational Data",
    desc: "Schema design, normalization, ACID transactions, complex joins, and indexing strategies.",
    status: "High Performance",
    statusColor: "#4479A1",
    iconName: "SiMysql"
  },
  {
    id: "java",
    category: "core",
    title: "Java & Data Structures",
    desc: "Object-oriented design patterns, algorithmic problem solving, trees, graphs, and dynamic programming.",
    status: "Academic & DSA",
    statusColor: "#EA2D2E",
    iconName: "FaJava"
  },
  {
    id: "python",
    category: "core",
    title: "Python Programming",
    desc: "Automation scripting, data manipulation, algorithm implementations, and CLI utilities.",
    status: "Versatile",
    statusColor: "#3776AB",
    iconName: "FaPython"
  },
  {
    id: "git",
    category: "devops",
    title: "Git & Version Control",
    desc: "Branching strategies, collaborative workflows, merge conflict resolution, and GitHub CI.",
    status: "Workflow Essential",
    statusColor: "#F05032",
    iconName: "FaGitAlt"
  },
  {
    id: "html-css",
    category: "frontend",
    title: "HTML5 & Semantic Web",
    desc: "Accessible markup, SEO best practices, Open Graph meta tags, and WCAG compliance.",
    status: "Foundation",
    statusColor: "#E34F26",
    iconName: "FaHtml5"
  },
];

const DEFAULT_PROFILE = {
  name: "Jeevan Shetty",
  title: "Engineering scalable web apps with precision.",
  bio: "Hi, I'm Jeevan Shetty — a full-stack developer blending clean code, fast databases, and modern UI.",
  location: "Bengaluru, Karnataka, India",
  email: "jeevanshetty9481@gmail.com",
  phone: "+91 93538 19063",
  statusBadge: "Open for opportunities",
  availability: "Available for Full-time & High-impact Contracts",
  roles: [
    "Full-Stack Web Architect",
    "Node.js & Express API Developer",
    "React & Modern Frontend Specialist",
    "MongoDB & MySQL Data Architect",
    "DSA & Algorithmic Problem Solver",
  ]
};

const DEFAULT_MESSAGES = [
  {
    id: "msg-1",
    name: "Alex Morgan",
    email: "alex.morgan@techventures.io",
    subject: "Full Stack Engineer Opportunity",
    message: "Hi Jeevan, we loved your portfolio and project work on realtime chat and carpooling systems. Would you be open to discussing a developer role on our product team?",
    date: "2026-08-28T14:30:00.000Z",
    read: false
  }
];

export function PortfolioProvider({ children }) {
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem("nomu_portfolio_projects");
      return saved ? JSON.parse(saved) : DEFAULT_PROJECTS;
    } catch {
      return DEFAULT_PROJECTS;
    }
  });

  const [skills, setSkills] = useState(() => {
    try {
      const saved = localStorage.getItem("nomu_portfolio_skills");
      return saved ? JSON.parse(saved) : DEFAULT_SKILLS;
    } catch {
      return DEFAULT_SKILLS;
    }
  });

  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem("nomu_portfolio_profile");
      return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
    } catch {
      return DEFAULT_PROFILE;
    }
  });

  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem("nomu_portfolio_messages");
      return saved ? JSON.parse(saved) : DEFAULT_MESSAGES;
    } catch {
      return DEFAULT_MESSAGES;
    }
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem("nomu_admin_auth") === "true";
    } catch {
      return false;
    }
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("nomu_portfolio_projects", JSON.stringify(projects));
    } catch (e) {
      console.error("Storage error:", e);
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem("nomu_portfolio_skills", JSON.stringify(skills));
    } catch (e) {
      console.error("Storage error:", e);
    }
  }, [skills]);

  useEffect(() => {
    try {
      localStorage.setItem("nomu_portfolio_profile", JSON.stringify(profile));
    } catch (e) {
      console.error("Storage error:", e);
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem("nomu_portfolio_messages", JSON.stringify(messages));
    } catch (e) {
      console.error("Storage error:", e);
    }
  }, [messages]);

  const [adminPasscode, setAdminPasscode] = useState(() => {
    try {
      return localStorage.getItem("nomu_admin_passcode") || "jeevan@2026";
    } catch {
      return "jeevan@2026";
    }
  });

  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockoutUntil, setLockoutUntil] = useState(null);

  // Auth methods
  const login = (inputPasscode) => {
    // Check if locked out
    if (lockoutUntil && Date.now() < lockoutUntil) {
      const remainingSecs = Math.ceil((lockoutUntil - Date.now()) / 1000);
      return {
        success: false,
        error: `Too many failed attempts. Try again in ${remainingSecs} seconds.`
      };
    }

    if (inputPasscode && inputPasscode === adminPasscode) {
      setIsAuthenticated(true);
      setFailedAttempts(0);
      setLockoutUntil(null);
      try {
        sessionStorage.setItem("nomu_admin_auth", "true");
      } catch {}
      return { success: true };
    } else {
      const nextAttempts = failedAttempts + 1;
      setFailedAttempts(nextAttempts);
      if (nextAttempts >= 5) {
        const lockoutTime = Date.now() + 3 * 60 * 1000; // 3 min lockout
        setLockoutUntil(lockoutTime);
        return {
          success: false,
          error: "Too many failed attempts. Locked out for 3 minutes."
        };
      }
      return {
        success: false,
        error: `Incorrect passcode. (${5 - nextAttempts} attempts remaining before temporary lockout)`
      };
    }
  };

  const changePasscode = (currentPasscode, newPasscode) => {
    if (currentPasscode !== adminPasscode) {
      return { success: false, error: "Current passcode is incorrect." };
    }
    if (!newPasscode || newPasscode.length < 6) {
      return { success: false, error: "New passcode must be at least 6 characters." };
    }
    try {
      localStorage.setItem("nomu_admin_passcode", newPasscode);
      setAdminPasscode(newPasscode);
      return { success: true };
    } catch (e) {
      return { success: false, error: "Failed to save new passcode to storage." };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    try {
      sessionStorage.removeItem("nomu_admin_auth");
    } catch {}
  };

  // Projects CRUD
  const addProject = (newProject) => {
    const project = {
      ...newProject,
      id: newProject.id || `proj-${Date.now()}`,
      colSpan: newProject.colSpan || "col-span-12 md:col-span-4",
      accentBg: newProject.accentBg || "bg-gradient-to-br from-[#1450C6]/10 to-[#1450C6]/5"
    };
    setProjects((prev) => [project, ...prev]);
  };

  const updateProject = (id, updatedFields) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p))
    );
  };

  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const resetProjects = () => {
    setProjects(DEFAULT_PROJECTS);
  };

  // Skills CRUD
  const addSkill = (newSkill) => {
    const skill = {
      ...newSkill,
      id: newSkill.id || `skill-${Date.now()}`,
      statusColor: newSkill.statusColor || "#22C55E"
    };
    setSkills((prev) => [...prev, skill]);
  };

  const updateSkill = (id, updatedFields) => {
    setSkills((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updatedFields } : s))
    );
  };

  const deleteSkill = (id) => {
    setSkills((prev) => prev.filter((s) => s.id !== id));
  };

  const resetSkills = () => {
    setSkills(DEFAULT_SKILLS);
  };

  // Profile Update
  const updateProfile = (updatedFields) => {
    setProfile((prev) => ({ ...prev, ...updatedFields }));
  };

  // Messages / Inquiries
  const addMessage = (message) => {
    const newMsg = {
      ...message,
      id: `msg-${Date.now()}`,
      date: new Date().toISOString(),
      read: false
    };
    setMessages((prev) => [newMsg, ...prev]);
  };

  const markMessageRead = (id) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, read: true } : m))
    );
  };

  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        skills,
        profile,
        messages,
        isAuthenticated,
        login,
        logout,
        addProject,
        updateProject,
        deleteProject,
        resetProjects,
        addSkill,
        updateSkill,
        deleteSkill,
        resetSkills,
        updateProfile,
        addMessage,
        markMessageRead,
        deleteMessage,
        changePasscode
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}

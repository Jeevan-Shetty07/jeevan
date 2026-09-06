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
    id: "blinkchat",
    title: "BlinkChat - Real-Time Chat Application",
    badge: "Featured Full-Stack",
    tag: "React 19 · Node.js · Express · MongoDB · Socket.IO · Clerk",
    status: "Live Production",
    statusType: "live",
    desc: "Architected a full-stack real-time messaging platform supporting instantaneous message delivery and group chat using Socket.IO. Implemented secure user authentication and hierarchical admin roles with Clerk, dynamic Glassmorphism light/dark UI, and multimedia sharing with Multer.",
    github: "https://github.com/Jeevan-Shetty07",
    demo: "https://realtime-chat-app-six-tawny.vercel.app/",
    image: chat,
    colSpan: "col-span-12 lg:col-span-8",
    accentBg: "bg-gradient-to-br from-[#1450C6]/10 to-[#1450C6]/5",
    type: "fullstack",
    featured: true
  },
  {
    id: "blood-donor",
    title: "Blood Donor Management System",
    badge: "Enterprise Backend",
    tag: "Spring Boot · React · MySQL · JPA · REST APIs",
    status: "Production Ready",
    statusType: "system",
    desc: "Developed a scalable full-stack system to manage donor records and hospital requests. Built RESTful APIs using Spring Boot and integrated MySQL with JPA for efficient data persistence and high-performance querying.",
    github: "https://github.com/Jeevan-Shetty07",
    demo: "",
    image: port1,
    colSpan: "col-span-12 lg:col-span-4",
    accentBg: "bg-gradient-to-br from-[#EA2D2E]/10 to-[#EA2D2E]/5",
    type: "fullstack",
    featured: true
  },
  {
    id: "placement-pro",
    title: "Placement Pro - Recruitment Portal",
    badge: "Workflow & AI Integration",
    tag: "React · Node.js · Express · MongoDB · n8n AI Chatbot",
    status: "Full Solution",
    statusType: "system",
    desc: "Developed a full-stack placement management system to streamline student recruitment. Enabled application tracking, real-time status updates, admin job posting tools, and integrated an AI chatbot via n8n to automate candidate workflows.",
    github: "https://github.com/Jeevan-Shetty07",
    demo: "",
    image: carpool1,
    colSpan: "col-span-12 lg:col-span-8",
    accentBg: "bg-gradient-to-br from-[#22C55E]/10 to-[#22C55E]/5",
    type: "fullstack",
    featured: true
  },
  {
    id: "image-search",
    title: "Unsplash Image Search Engine",
    badge: "API Optimization",
    tag: "HTML5 · CSS3 · JavaScript · Unsplash REST API",
    status: "Live Utility",
    statusType: "live",
    desc: "Designed a high-speed web application integrating the Unsplash API to fetch real-time imagery. Implemented pagination, search debouncing, and UI enhancements, reducing asset load times by 30%.",
    github: "https://github.com/Jeevan-Shetty07",
    demo: "https://jeevan-image-search.vercel.app/",
    image: image1,
    colSpan: "col-span-12 lg:col-span-4",
    accentBg: "bg-gradient-to-br from-[#1450C6]/5 to-[#FFBFA6]/10",
    type: "frontend",
    featured: false
  },
  {
    id: "bingo-game",
    title: "Interactive Multiplayer Bingo",
    badge: "Interactive Web App",
    tag: "React · Game Logic · Web Audio",
    status: "Live Game",
    statusType: "live",
    desc: "Engaging multiplayer Bingo game with instant synchronization, sound effects, dynamic board generation, and automated victory verification.",
    github: "https://github.com/Jeevan-Shetty07",
    demo: "https://bingo.jeevanshetty.me/",
    image: bingo1,
    colSpan: "col-span-12 md:col-span-4",
    accentBg: "bg-gradient-to-br from-[#FF7448]/10 to-[#FF7448]/5",
    type: "frontend",
    featured: false
  },
  {
    id: "carpooling",
    title: "Carpooling & Ride Sharing Platform",
    badge: "System Architecture",
    tag: "PHP · MySQL · Bootstrap · Google Maps API",
    status: "Full Solution",
    statusType: "system",
    desc: "Comprehensive ride-sharing portal featuring route matching, seat reservation, fare estimation, driver license verification, and booking history.",
    github: "https://github.com/Jeevan-Shetty07/carpoooling",
    demo: "",
    image: carpool1,
    colSpan: "col-span-12 md:col-span-4",
    accentBg: "bg-gradient-to-br from-[#0F151D]/5 to-[#0F151D]/10",
    type: "fullstack",
    featured: false
  },
  {
    id: "qr-generator",
    title: "Custom QR Code Studio",
    badge: "Developer Tool",
    tag: "React · Canvas API · SVG Export",
    status: "Live Tool",
    statusType: "live",
    desc: "Custom QR code generator supporting text, URLs, and vCards with instant client-side canvas rendering and SVG/PNG download.",
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
    id: "react",
    category: "frontend",
    title: "React 19 & Modern UI",
    desc: "Component lifecycle, custom hooks, state management, and high-performance DOM rendering.",
    status: "Production Ready",
    statusColor: "#61DAFB",
    iconName: "FaReact"
  },
  {
    id: "nodejs",
    category: "backend",
    title: "Node.js & Express.js",
    desc: "Asynchronous RESTful APIs, custom middleware, Multer file handling, and server security.",
    status: "High Performance",
    statusColor: "#339933",
    iconName: "FaNodeJs"
  },
  {
    id: "spring-boot",
    category: "backend",
    title: "Spring Boot & Java",
    desc: "Enterprise backend services, JPA / Hibernate ORM, dependency injection, and REST endpoints.",
    status: "Enterprise Tested",
    statusColor: "#6DB33F",
    iconName: "SiSpringboot"
  },
  {
    id: "mongodb",
    category: "database",
    title: "MongoDB & Mongoose",
    desc: "Document data modeling, aggregation pipelines, schema validation with Mongoose, and indexing.",
    status: "Production Ready",
    statusColor: "#47A248",
    iconName: "SiMongodb"
  },
  {
    id: "mysql",
    category: "database",
    title: "MySQL & Relational JPA",
    desc: "Schema normalization, ACID transactions, complex joins, and JPA entity relationships.",
    status: "High Performance",
    statusColor: "#4479A1",
    iconName: "SiMysql"
  },
  {
    id: "n8n",
    category: "devops",
    title: "n8n Workflow & AI Bots",
    desc: "Automated workflow pipelines, AI chatbot integrations, webhook orchestration, and data sync.",
    status: "Workflow & AI",
    statusColor: "#EA2D2E",
    iconName: "SiN8N"
  },
  {
    id: "postman",
    category: "devops",
    title: "Postman API Testing",
    desc: "Endpoint verification, automated test collections, mock servers, and API documentation.",
    status: "Testing Essential",
    statusColor: "#FF6C37",
    iconName: "SiPostman"
  },
  {
    id: "java",
    category: "core",
    title: "Java & Data Structures",
    desc: "Object-oriented design patterns, algorithmic problem solving, trees, graphs, and dynamic programming.",
    status: "DSA & LeetCode",
    statusColor: "#EA2D2E",
    iconName: "FaJava"
  },
  {
    id: "javascript",
    category: "frontend",
    title: "JavaScript (ES6+)",
    desc: "Asynchronous programming, closures, event loop, Promises, and modern web APIs.",
    status: "Core Strength",
    statusColor: "#F7DF1E",
    iconName: "FaJs"
  },
  {
    id: "tailwind",
    category: "frontend",
    title: "Tailwind CSS & Styling",
    desc: "Design tokens, responsive layouts, glassmorphism, and smooth micro-animations.",
    status: "Daily Driver",
    statusColor: "#06B6D4",
    iconName: "SiTailwindcss"
  },
  {
    id: "c-lang",
    category: "core",
    title: "C Programming",
    desc: "Memory management, pointers, foundational data structures, and algorithmic principles.",
    status: "Foundational",
    statusColor: "#00599C",
    iconName: "SiC"
  },
  {
    id: "php",
    category: "backend",
    title: "PHP Backend Scripting",
    desc: "Object-oriented server scripting, MVC structures, session management, and CRUD APIs.",
    status: "Tested",
    statusColor: "#777BB4",
    iconName: "FaPhp"
  },
  {
    id: "git",
    category: "devops",
    title: "Git & Version Control",
    desc: "Branching strategies, collaborative workflows, merge conflict resolution, and GitHub Actions.",
    status: "Workflow Essential",
    statusColor: "#F05032",
    iconName: "FaGitAlt"
  },
];

const DEFAULT_CERTIFICATIONS = [
  {
    id: "cert-1",
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    badge: "Cloud Certified",
    badgeColor: "#EA2D2E",
    desc: "Core OCI architecture, compute, storage, virtual cloud networks (VCN), security, and compliance foundations."
  },
  {
    id: "cert-2",
    title: "MongoDB Developer Guide 2025",
    issuer: "Udemy",
    year: "2025",
    badge: "NoSQL Certified",
    badgeColor: "#47A248",
    desc: "Comprehensive document modeling, aggregation framework, CRUD operations, indexing, and Mongoose ODM integration."
  },
  {
    id: "cert-3",
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    year: "2025",
    badge: "Cloud Architecture",
    badgeColor: "#0078D4",
    desc: "Cloud computing principles, Azure core services, security, privacy, compliance, and cloud cost management."
  }
];

const DEFAULT_ACHIEVEMENTS = [
  {
    id: "ach-1",
    title: "1st Place Winner - National 24-Hour Hackathon",
    desc: "Secured 1st place in a 24-hour national hackathon by architecting and developing an innovative, highly scalable full-stack solution under intense time constraints.",
    badge: "🏆 National Champion",
    metric: "1st Place"
  },
  {
    id: "ach-2",
    title: "Technical Mentorship (80+ Students)",
    desc: "Mentored 80+ students in web development and full-stack project implementation, improving their code architecture and problem-solving skills.",
    badge: "👥 Leader & Mentor",
    metric: "80+ Mentored"
  },
  {
    id: "ach-3",
    title: "Active LeetCode Practice & DSA Specialization",
    desc: "Consistent practice and problem solving in Data Structures and Algorithms (Trees, Graphs, DP, Arrays, HashMaps).",
    badge: "⚡ Algorithmic Problem Solver",
    metric: "Daily DSA"
  },
  {
    id: "ach-4",
    title: "Built & Deployed Production Full-Stack Apps",
    desc: "Engineered, optimized, and deployed multiple live web applications focusing on real-time WebSockets, scalable REST APIs, and responsive UI.",
    badge: "🚀 Full-Stack Shipper",
    metric: "Multiple Live Apps"
  }
];

const DEFAULT_EDUCATION = [
  {
    period: "2025 - Present",
    role: "Master of Computer Applications (MCA)",
    institution: "NMAM Institute of Technology, Nitte",
    badge: "Current Degree",
    badgeColor: "#22C55E",
    desc: "Specializing in Data Structures & Algorithms, modern JavaScript/React architectures, Spring Boot backend systems, and distributed database design.",
    highlights: [
      "Advanced Data Structures & Algorithms (DSA)",
      "Full-Stack Web Architectures (React, Node, Spring Boot)",
      "Distributed Database Engineering (MySQL, MongoDB)",
      "System Scalability & Performance Optimization"
    ]
  },
  {
    period: "2022 - 2025",
    role: "Bachelor of Computer Applications (BCA)",
    institution: "St. Philomena College, Puttur",
    badge: "Graduated with Honors",
    badgeColor: "#1450C6",
    desc: "Graduated with a strong foundation in core computer science, software engineering principles, Java, database administration, and web applications.",
    highlights: [
      "Architected full-featured Carpooling System & Event Platform",
      "Proficiency in Java, PHP, C, and Relational Databases",
      "Elected Student Tech Event Coordinator & Mentor",
      "Active participant in national coding hackathons"
    ]
  },
  {
    period: "2020 - 2022",
    role: "Pre-University Course (PUC) - Commerce",
    institution: "SDM College, Ujire",
    badge: "Higher Secondary",
    badgeColor: "#FF7448",
    desc: "Completed Pre-University Education focusing on analytical reasoning, economics, and business statistics with strong academic standing.",
    highlights: [
      "Analytical & Quantitative Problem Solving",
      "Business Logic & Information Systems"
    ]
  },
  {
    period: "2020",
    role: "Secondary School Leaving Certificate (SSLC)",
    institution: "St. Theresa High School, Belthangady",
    badge: "Secondary Education",
    badgeColor: "#0F151D",
    desc: "Completed secondary education with distinction in mathematics and science fundamentals.",
    highlights: [
      "Mathematics & Science Academic Excellence"
    ]
  }
];

const DEFAULT_PROFILE = {
  name: "Jeevan Kumar",
  title: "Engineering scalable web apps with precision.",
  bio: "Aspiring Software Developer with a strong foundation in Java, JavaScript, and full-stack development. Skilled in building scalable, responsive web apps using React, Node.js, and Spring Boot with a passion for Data Structures & Algorithms.",
  location: "Bengaluru, Karnataka, India",
  email: "Jeevanshetty9481@gmail.com",
  phone: "+91 93538 19063",
  leetcode: "https://leetcode.com/u/JeevanShetty7/",
  github: "https://github.com/Jeevan-Shetty07",
  linkedin: "https://www.linkedin.com/in/jeevan-shetty-241613229/",
  statusBadge: "Open for opportunities",
  availability: "Available for Full-time & Software Engineering Roles",
  roles: [
    "Full-Stack Web Architect",
    "React & Node.js Developer",
    "Spring Boot & Java API Engineer",
    "MongoDB & MySQL Data Architect",
    "DSA & Algorithmic Problem Solver",
  ]
};

const DEFAULT_MESSAGES = [
  {
    id: "msg-1",
    name: "Alex Morgan",
    email: "alex.morgan@techventures.io",
    subject: "Full Stack Software Engineer Opportunity",
    message: "Hi Jeevan, we reviewed your projects (BlinkChat, Blood Donor Management, Placement Pro) and your hackathon achievement. We would love to discuss a developer role with our team!",
    date: "2026-08-28T14:30:00.000Z",
    read: false
  }
];

const sanitizeSavedJson = (raw, fallback) => {
  if (!raw) return fallback;
  try {
    const cleaned = raw.replace(/[\u2014\u2013]/g, " - ");
    return JSON.parse(cleaned);
  } catch {
    return fallback;
  }
};

export function PortfolioProvider({ children }) {
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem("jk_portfolio_projects_v2");
      return sanitizeSavedJson(saved, DEFAULT_PROJECTS);
    } catch {
      return DEFAULT_PROJECTS;
    }
  });

  const [skills, setSkills] = useState(() => {
    try {
      const saved = localStorage.getItem("jk_portfolio_skills_v2");
      return sanitizeSavedJson(saved, DEFAULT_SKILLS);
    } catch {
      return DEFAULT_SKILLS;
    }
  });

  const [certifications, setCertifications] = useState(() => {
    try {
      const saved = localStorage.getItem("jk_portfolio_certs_v2");
      return sanitizeSavedJson(saved, DEFAULT_CERTIFICATIONS);
    } catch {
      return DEFAULT_CERTIFICATIONS;
    }
  });

  const [achievements, setAchievements] = useState(() => {
    try {
      const saved = localStorage.getItem("jk_portfolio_achieve_v2");
      return sanitizeSavedJson(saved, DEFAULT_ACHIEVEMENTS);
    } catch {
      return DEFAULT_ACHIEVEMENTS;
    }
  });

  const [education, setEducation] = useState(() => {
    try {
      const saved = localStorage.getItem("jk_portfolio_edu_v2");
      return sanitizeSavedJson(saved, DEFAULT_EDUCATION);
    } catch {
      return DEFAULT_EDUCATION;
    }
  });

  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem("jk_portfolio_profile_v2");
      return sanitizeSavedJson(saved, DEFAULT_PROFILE);
    } catch {
      return DEFAULT_PROFILE;
    }
  });

  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem("jk_portfolio_messages_v2");
      return sanitizeSavedJson(saved, DEFAULT_MESSAGES);
    } catch {
      return DEFAULT_MESSAGES;
    }
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem("jk_admin_auth") === "true";
    } catch {
      return false;
    }
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("jk_portfolio_projects_v2", JSON.stringify(projects));
    } catch (e) {
      console.error("Storage error:", e);
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem("jk_portfolio_skills_v2", JSON.stringify(skills));
    } catch (e) {
      console.error("Storage error:", e);
    }
  }, [skills]);

  useEffect(() => {
    try {
      localStorage.setItem("jk_portfolio_certs_v2", JSON.stringify(certifications));
    } catch (e) {
      console.error("Storage error:", e);
    }
  }, [certifications]);

  useEffect(() => {
    try {
      localStorage.setItem("jk_portfolio_achieve_v2", JSON.stringify(achievements));
    } catch (e) {
      console.error("Storage error:", e);
    }
  }, [achievements]);

  useEffect(() => {
    try {
      localStorage.setItem("jk_portfolio_edu_v2", JSON.stringify(education));
    } catch (e) {
      console.error("Storage error:", e);
    }
  }, [education]);

  useEffect(() => {
    try {
      localStorage.setItem("jk_portfolio_profile_v2", JSON.stringify(profile));
    } catch (e) {
      console.error("Storage error:", e);
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem("jk_portfolio_messages_v2", JSON.stringify(messages));
    } catch (e) {
      console.error("Storage error:", e);
    }
  }, [messages]);

  const [adminPasscode, setAdminPasscode] = useState(() => {
    try {
      return localStorage.getItem("jk_admin_passcode") || "jeevan@2026";
    } catch {
      return "jeevan@2026";
    }
  });

  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockoutUntil, setLockoutUntil] = useState(null);

  // Auth methods
  const login = (inputPasscode) => {
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
        sessionStorage.setItem("jk_admin_auth", "true");
      } catch {}
      return { success: true };
    } else {
      const nextAttempts = failedAttempts + 1;
      setFailedAttempts(nextAttempts);
      if (nextAttempts >= 5) {
        const lockoutTime = Date.now() + 3 * 60 * 1000;
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
      localStorage.setItem("jk_admin_passcode", newPasscode);
      setAdminPasscode(newPasscode);
      return { success: true };
    } catch (e) {
      return { success: false, error: "Failed to save new passcode to storage." };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    try {
      sessionStorage.removeItem("jk_admin_auth");
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
        certifications,
        achievements,
        education,
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

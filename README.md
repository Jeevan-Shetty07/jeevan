# 🌟 Jeevan Shetty — Full-Stack Developer Portfolio

<div align="center">

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-FF7448?style=for-the-badge)](LICENSE)

**A high-performance, fully responsive modern developer portfolio engineered with the editorial [Nomu Store](https://nomu.store/) aesthetic, featuring a real-time synchronized Admin Dashboard, interactive project grid, and dynamic contact inquiry management.**

[🌐 Live Demo](https://realtime-chat-app-six-tawny.vercel.app/) • [📬 Get in Touch](mailto:jeevanshetty9481@gmail.com) • [📄 Resume PDF](src/assets/resume.pdf)

</div>

---

## ✨ Design System & Aesthetic (Inspired by Nomu Store)

- 🎨 **Warm Paper Canvas (`#FFF9F6`)**: Natural paper background with subtle ambient light gradients and 28px/40px grid watermarks.
- 🖋️ **Deep Ink Typography (`#0F151D`)**: High-contrast typography with tiered opacity scales (`/80`, `/65`, `/40`) using Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*).
- ⚡ **Signature Vermilion Highlights (`#FF7448`)**: Energetic accents, live status pulse dots (`#22C55E`), and smooth micro-animations.
- ✨ **Inline Sparkle Beam Pill**: Signature hero headline with twinkling star particles and animated sliding light beam.
- 📐 **12-Column Bouncy Grid**: Asymmetric 8-col + 4-col project showcases with slide-up preview sheets on hover.
- 💫 **Ambient Intro Screen**: Minimalist loader with rotating symbol spinner (`✢ ✳ ✶ ✻ ✽ ✺ ✷ ✣`) and rapid developer status ticker.

---

## 🚀 Key Features

### 1. 🎛️ Secured Admin Dashboard (`/admin`)
- **Direct Route Gateway**: Access anytime by navigating to `/admin` or `#admin`, or pressing `Ctrl + Shift + A`.
- **Passcode Authentication**: Protected with master passcode authentication and brute-force temporary lockout.
- **Live Projects CRUD**: Add, edit, or delete projects with live image preview, tags, category types, and repository/demo links.
- **Skills & Tech Stack Manager**: Real-time management of technical tools with automatic brand icon resolution.
- **Inquiries Inbox**: Captures all contact form inquiries with sender information, timestamp, subject, and 1-click email reply.
- **Profile & Hero Editor**: Modify bio, location, availability badge, and hero typewriter roles on the fly.
- **Local Persistence**: Backed by `localStorage` synchronization with instant updates across the live site.

### 2. 📱 100% Fully Responsive Layout
- Optimized for all viewport sizes (Mobile `320px+`, Tablet `768px+`, Laptop `1024px+`, Large Desktop `1440px+`).
- Accessible touch targets, smooth mobile navigation drawer, and fluid typography.

### 3. 💼 Featured Projects Showcase
- **Realtime Chat Application**: Socket connection, room management, and live typing indicators.
- **Interactive Bingo Game**: Multiplayer game logic and victory detection.
- **Carpooling System**: Route matching, seat booking, and driver verification.
- **Event Management Platform**: Vendor management, scheduling, and billing.
- **Image Search Engine**: Unsplash REST API with query debouncing and infinite scroll.
- **Custom QR Code Studio**: Instant QR generation and SVG/PNG export.
- **Dynamic Quote Generator**: Randomized theme generator with 1-click sharing.

### 4. 🛠️ Tech Stack & Engineering Toolkit
- **Frontend**: React 19, JavaScript (ES6+), Tailwind CSS v4, Lucide Icons, React Icons, Canvas API
- **Backend & APIs**: Node.js, Express.js, PHP, RESTful APIs, WebSockets
- **Databases**: MongoDB & Mongoose ODM, MySQL (ACID Transactions & Normalization)
- **DevOps & Tools**: Git, GitHub Actions, Postman, Vite, Vercel

---

## 📂 Project Architecture

```
jeevan/
├── public/                     # Static public assets
├── src/
│   ├── assets/                 # Images, mockups, and resume PDF
│   ├── components/
│   │   ├── About.jsx           # Editorial journey & education timeline
│   │   ├── Contact.jsx         # Contact channels & dynamic inquiry form
│   │   ├── Footer.jsx          # Luxury footer with live IST time clock
│   │   ├── Hero.jsx            # Sparkle beam headline & tech marquee
│   │   ├── Navbar.jsx          # Floating capsule pill header & mobile drawer
│   │   ├── Projects.jsx        # 12-column bouncy project grid
│   │   └── skills.jsx          # "Oh yeah, and all this too" feature shelf
│   ├── context/
│   │   └── PortfolioContext.jsx # Centralized state & localStorage CRUD store
│   ├── pages/
│   │   ├── Home.jsx            # Main portfolio layout
│   │   └── Admin.jsx           # Secured Nomu Admin Dashboard
│   ├── App.jsx                 # Routing (#admin / #home) & ambient intro loader
│   ├── index.css               # Nomu design tokens, grid textures & keyframes
│   └── main.jsx                # Application bootstrap
├── index.html                  # SEO metadata, Open Graph & Google Fonts
├── package.json                # Dependencies & scripts
└── vite.config.js              # Vite compiler configuration
```

---

## 🛠️ Local Development & Setup

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/Jeevan-Shetty07/jeevan.git

# 2. Navigate to project directory
cd jeevan

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

### Production Build
```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🔐 Admin Dashboard Access

1. Open your browser and navigate to:
   - `http://localhost:5174/react-vite-deploy/admin` or `#admin`
2. Enter your master passcode (Default: `jeevan@2026`).
3. You can update your passcode at any time directly in the **Settings** tab.

---

## 📬 Contact & Connect

- **Name**: Jeevan Shetty
- **Location**: Bengaluru, Karnataka, India
- **Email**: [jeevanshetty9481@gmail.com](mailto:jeevanshetty9481@gmail.com)
- **LinkedIn**: [linkedin.com/in/jeevan-shetty-241613229](https://www.linkedin.com/in/jeevan-shetty-241613229/)
- **GitHub**: [github.com/Jeevan-Shetty07](https://github.com/Jeevan-Shetty07)
- **WhatsApp**: [+91 93538 19063](https://wa.me/9353819063)

---

<div align="center">
  <sub>Designed & Crafted with ❤️ by Jeevan Shetty • Inspired by Nomu Store</sub>
</div>

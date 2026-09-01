import React, { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import {
  LayoutDashboard,
  FolderGit2,
  Cpu,
  Mail,
  User,
  Plus,
  Trash2,
  Edit3,
  ExternalLink,
  Github,
  CheckCircle2,
  Lock,
  LogOut,
  ArrowLeft,
  Sparkles,
  Save,
  RotateCcw,
  Search,
  Check,
  AlertCircle,
  Eye,
  EyeOff,
  KeyRound,
  ShieldCheck
} from "lucide-react";
import { FaReact, FaNodeJs, FaJs, FaPhp, FaJava, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiMysql, SiExpress, SiMongodb, SiPostman } from "react-icons/si";

export default function Admin() {
  const {
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
    deleteMessage,
    markMessageRead,
    changePasscode
  } = usePortfolio();

  // Navigation State
  const [activeTab, setActiveTab] = useState("overview"); // overview | projects | skills | messages | profile

  // Auth State
  const [passcode, setPasscode] = useState("");
  const [showPasscode, setShowPasscode] = useState(false);
  const [authErrorMessage, setAuthErrorMessage] = useState("");

  // Project Modal State
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: "",
    desc: "",
    badge: "Full Stack",
    tag: "React · Node.js",
    status: "Live Production",
    statusType: "live",
    github: "",
    demo: "",
    image: "",
    type: "fullstack",
    colSpan: "col-span-12 md:col-span-4"
  });

  // Skill Modal State
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);
  const [skillForm, setSkillForm] = useState({
    title: "",
    category: "backend",
    desc: "",
    status: "Production Ready",
    statusColor: "#22C55E",
    iconName: "FaNodeJs"
  });

  // Profile Form State
  const [profileForm, setProfileForm] = useState({
    name: profile.name,
    title: profile.title,
    bio: profile.bio,
    location: profile.location,
    email: profile.email,
    phone: profile.phone,
    statusBadge: profile.statusBadge,
    availability: profile.availability,
    roles: [...profile.roles]
  });
  const [profileSaved, setProfileSaved] = useState(false);
  const [newRoleInput, setNewRoleInput] = useState("");

  // Change Password Form State
  const [pwdForm, setPwdForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [pwdStatus, setPwdStatus] = useState({ success: false, message: "" });

  // Search/Filter State
  const [skillCategoryFilter, setSkillCategoryFilter] = useState("all");

  const handleLogin = (e) => {
    e?.preventDefault();
    setAuthErrorMessage("");
    const result = login(passcode);
    if (result.success) {
      setPasscode("");
      setAuthErrorMessage("");
    } else {
      setAuthErrorMessage(result.error || "Authentication failed.");
    }
  };

  // Open Project Modal (Add or Edit)
  const openProjectModal = (proj = null) => {
    if (proj) {
      setEditingProject(proj.id);
      setProjectForm({ ...proj });
    } else {
      setEditingProject(null);
      setProjectForm({
        title: "",
        desc: "",
        badge: "Featured Project",
        tag: "React · Node.js · Express",
        status: "Live Production",
        statusType: "live",
        github: "https://github.com/Jeevan-Shetty07",
        demo: "",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        type: "fullstack",
        colSpan: "col-span-12 md:col-span-4"
      });
    }
    setIsProjectModalOpen(true);
  };

  const handleSaveProject = (e) => {
    e.preventDefault();
    if (editingProject) {
      updateProject(editingProject, projectForm);
    } else {
      addProject(projectForm);
    }
    setIsProjectModalOpen(false);
  };

  // Open Skill Modal
  const openSkillModal = (skill = null) => {
    if (skill) {
      setEditingSkill(skill.id);
      setSkillForm({ ...skill });
    } else {
      setEditingSkill(null);
      setSkillForm({
        title: "",
        category: "backend",
        desc: "",
        status: "Core Strength",
        statusColor: "#FF7448",
        iconName: "FaNodeJs"
      });
    }
    setIsSkillModalOpen(true);
  };

  const handleSaveSkill = (e) => {
    e.preventDefault();
    if (editingSkill) {
      updateSkill(editingSkill, skillForm);
    } else {
      addSkill(skillForm);
    }
    setIsSkillModalOpen(false);
  };

  // Save Profile Changes
  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateProfile(profileForm);
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 3000);
  };

  const handleAddRole = () => {
    if (newRoleInput.trim()) {
      setProfileForm((prev) => ({
        ...prev,
        roles: [...prev.roles, newRoleInput.trim()]
      }));
      setNewRoleInput("");
    }
  };

  const handleRemoveRole = (idx) => {
    setProfileForm((prev) => ({
      ...prev,
      roles: prev.roles.filter((_, i) => i !== idx)
    }));
  };

  // Handle Change Passcode
  const handleChangePassword = (e) => {
    e.preventDefault();
    setPwdStatus({ success: false, message: "" });

    if (pwdForm.newPassword !== pwdForm.confirmPassword) {
      setPwdStatus({
        success: false,
        message: "New password and confirmation do not match."
      });
      return;
    }

    if (pwdForm.newPassword.length < 6) {
      setPwdStatus({
        success: false,
        message: "New password must be at least 6 characters."
      });
      return;
    }

    const res = changePasscode(pwdForm.currentPassword, pwdForm.newPassword);
    if (res.success) {
      setPwdStatus({
        success: true,
        message: "Admin passcode updated successfully!"
      });
      setPwdForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setTimeout(() => setPwdStatus({ success: false, message: "" }), 4000);
    } else {
      setPwdStatus({
        success: false,
        message: res.error || "Failed to update passcode."
      });
    }
  };

  // Unread messages count
  const unreadCount = messages.filter((m) => !m.read).length;

  const handleExitAdmin = (e) => {
    e?.preventDefault();
    if (window.location.pathname.includes("/admin")) {
      const cleanPath = window.location.pathname.replace(/\/admin\/?$/, "") || "/";
      window.history.pushState({}, "", cleanPath);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
    window.location.hash = "#home";
  };

  // -------------------------------------------------------------
  // 🔒 Secure Login View (No Demo Bypass)
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FFF9F6] flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Background Ambient Blobs */}
        <div
          aria-hidden="true"
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#FF7448]/15 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#1450C6]/15 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 nomu-grid-bg opacity-40 pointer-events-none"
        />

        <div className="relative z-10 w-full max-w-md">
          <div className="rounded-3xl md:rounded-[36px] bg-white border border-black/5 shadow-[0_20px_50px_-12px_rgba(15,21,29,0.12)] p-4">
            <div className="rounded-2xl md:rounded-[28px] bg-[#FAF6F2] border border-black/[0.06] p-8 text-center relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 nomu-grid-card pointer-events-none"
              />

              <div className="relative z-10">
                {/* Logo & Lock Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-black/5 shadow-sm text-[#FF7448] mb-4">
                  <Lock className="w-6 h-6" />
                </div>

                <h1 className="text-2xl font-extrabold text-[#0F151D] tracking-tight">
                  Admin Gateway
                </h1>
                <p className="mt-1 text-xs sm:text-sm text-[#0F151D]/60">
                  Enter your secure admin passcode to access portfolio controls.
                </p>

                <form onSubmit={handleLogin} className="mt-6 space-y-4">
                  <div className="relative">
                    <input
                      type={showPasscode ? "text" : "password"}
                      required
                      placeholder="Enter Admin Passcode..."
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      className="w-full pl-4 pr-12 py-3 rounded-2xl bg-white border border-black/10 text-sm text-[#0F151D] font-mono placeholder:text-[#0F151D]/30 focus:outline-none focus:ring-2 focus:ring-[#FF7448] shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPasscode(!showPasscode)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#0F151D]/40 hover:text-[#0F151D] transition-colors"
                      title={showPasscode ? "Hide Passcode" : "Show Passcode"}
                    >
                      {showPasscode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  {authErrorMessage && (
                    <div className="flex items-center justify-center gap-1.5 p-3 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{authErrorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full nomu-btn-primary py-3 rounded-full text-sm font-semibold cursor-pointer flex items-center justify-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Authenticate</span>
                  </button>
                </form>

                {/* Return link */}
                <div className="mt-6 pt-5 border-t border-black/[0.06]">
                  <button
                    onClick={handleExitAdmin}
                    className="inline-flex items-center justify-center gap-1 text-xs text-[#0F151D]/50 hover:text-[#0F151D] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    <span>Return to Public Portfolio</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 🎛️ Authenticated Dashboard
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#FFF9F6] text-[#0F151D] flex flex-col selection:bg-[#FF7448] selection:text-white">
      {/* 🚀 Admin Top Floating Capsule Header */}
      <header className="sticky top-4 z-40 w-full px-4 sm:px-8 max-w-6xl mx-auto">
        <nav className="flex items-center justify-between gap-3 rounded-full bg-white/95 backdrop-blur-xl border border-black/5 px-5 py-3 shadow-[0_8px_24px_-8px_rgba(15,21,29,0.12)]">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold tracking-tight">
              Jeevan<span className="text-[#FF7448]">.</span>Admin
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#22C55E]/10 text-[#22C55E] text-[10px] font-mono font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-ping" />
              AUTHENTICATED
            </span>
          </div>

          {/* Navigation Tabs */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { id: "overview", label: "Overview", icon: <LayoutDashboard className="w-3.5 h-3.5" /> },
              { id: "projects", label: `Projects (${projects.length})`, icon: <FolderGit2 className="w-3.5 h-3.5" /> },
              { id: "skills", label: `Skills (${skills.length})`, icon: <Cpu className="w-3.5 h-3.5" /> },
              {
                id: "messages",
                label: `Inquiries ${unreadCount > 0 ? `(${unreadCount})` : ""}`,
                icon: <Mail className="w-3.5 h-3.5" />
              },
              { id: "profile", label: "Settings", icon: <User className="w-3.5 h-3.5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#0F151D] text-white shadow-sm"
                    : "text-[#0F151D]/70 hover:bg-black/5"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleExitAdmin}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-black/10 text-[#0F151D] hover:bg-[#F8F5F2] shadow-sm transition-all cursor-pointer"
            >
              <span>View Site</span>
              <ExternalLink className="w-3 h-3" />
            </button>

            <button
              onClick={logout}
              className="p-2 rounded-full text-[#0F151D]/60 hover:text-red-500 hover:bg-red-50 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </nav>

        {/* Mobile Tab Bar */}
        <div className="md:hidden flex items-center justify-between gap-1 mt-2 p-1.5 rounded-2xl bg-white border border-black/5 shadow-sm overflow-x-auto">
          {[
            { id: "overview", label: "Overview" },
            { id: "projects", label: `Projects (${projects.length})` },
            { id: "skills", label: `Skills (${skills.length})` },
            { id: "messages", label: `Inbox (${unreadCount})` },
            { id: "profile", label: "Settings" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-[#0F151D] text-white"
                  : "text-[#0F151D]/70 hover:bg-black/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Admin Content Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-8 py-8">
        {/* ========================================================= */}
        {/* TAB 1: OVERVIEW */}
        {/* ========================================================= */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Greeting Header */}
            <div>
              <h1 className="text-3xl font-extrabold text-[#0F151D] tracking-tight">
                Welcome back, Jeevan
              </h1>
              <p className="mt-1 text-sm text-[#0F151D]/60">
                Here is a live summary of your portfolio metrics and inbound opportunities.
              </p>
            </div>

            {/* Metric Capsules Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-3xl bg-white border border-black/5 p-2 shadow-sm">
                <div className="rounded-2xl bg-[#FAF6F2] p-5 border border-black/[0.04]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#0F151D]/50 uppercase">
                      Total Projects
                    </span>
                    <FolderGit2 className="w-4 h-4 text-[#FF7448]" />
                  </div>
                  <p className="text-3xl font-extrabold text-[#0F151D] mt-2">
                    {projects.length}
                  </p>
                  <p className="text-xs text-[#0F151D]/60 mt-1">
                    {projects.filter((p) => p.demo).length} with live demo links
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-white border border-black/5 p-2 shadow-sm">
                <div className="rounded-2xl bg-[#FAF6F2] p-5 border border-black/[0.04]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#0F151D]/50 uppercase">
                      Skills & Tech
                    </span>
                    <Cpu className="w-4 h-4 text-[#1450C6]" />
                  </div>
                  <p className="text-3xl font-extrabold text-[#0F151D] mt-2">
                    {skills.length}
                  </p>
                  <p className="text-xs text-[#0F151D]/60 mt-1">
                    Node, React, Mongo, Postman, PHP, MySQL...
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-white border border-black/5 p-2 shadow-sm">
                <div className="rounded-2xl bg-[#FAF6F2] p-5 border border-black/[0.04]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#0F151D]/50 uppercase">
                      Inquiries
                    </span>
                    <Mail className="w-4 h-4 text-[#22C55E]" />
                  </div>
                  <p className="text-3xl font-extrabold text-[#0F151D] mt-2">
                    {messages.length}
                  </p>
                  <p className="text-xs text-[#22C55E] font-medium mt-1">
                    {unreadCount} unread message{unreadCount !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-white border border-black/5 p-2 shadow-sm">
                <div className="rounded-2xl bg-[#0F151D] text-white p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#FFBFA6] uppercase">
                      Availability
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
                  </div>
                  <p className="text-lg font-bold mt-2 truncate">
                    {profile.statusBadge}
                  </p>
                  <p className="text-xs text-white/60 mt-1 truncate">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions & Recent Messages */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Quick Actions */}
              <div className="lg:col-span-4 rounded-3xl bg-white border border-black/5 p-2 shadow-sm">
                <div className="rounded-2xl bg-[#FAF6F2] p-6 border border-black/[0.04] h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-[#0F151D] mb-1">
                      Quick Shortcuts
                    </h3>
                    <p className="text-xs text-[#0F151D]/60 mb-5">
                      Fast access to frequently performed actions.
                    </p>

                    <div className="space-y-2.5">
                      <button
                        onClick={() => {
                          setActiveTab("projects");
                          openProjectModal();
                        }}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white border border-black/5 hover:border-[#FF7448]/30 text-xs font-semibold text-[#0F151D] shadow-sm transition-all"
                      >
                        <span className="flex items-center gap-2">
                          <Plus className="w-4 h-4 text-[#FF7448]" />
                          <span>Add New Project</span>
                        </span>
                        <ArrowLeft className="w-3.5 h-3.5 rotate-180 text-[#0F151D]/40" />
                      </button>

                      <button
                        onClick={() => {
                          setActiveTab("skills");
                          openSkillModal();
                        }}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white border border-black/5 hover:border-[#1450C6]/30 text-xs font-semibold text-[#0F151D] shadow-sm transition-all"
                      >
                        <span className="flex items-center gap-2">
                          <Plus className="w-4 h-4 text-[#1450C6]" />
                          <span>Add New Skill / Tech</span>
                        </span>
                        <ArrowLeft className="w-3.5 h-3.5 rotate-180 text-[#0F151D]/40" />
                      </button>

                      <button
                        onClick={() => setActiveTab("profile")}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white border border-black/5 hover:border-black/20 text-xs font-semibold text-[#0F151D] shadow-sm transition-all"
                      >
                        <span className="flex items-center gap-2">
                          <Edit3 className="w-4 h-4 text-[#0F151D]" />
                          <span>Edit Roles & Settings</span>
                        </span>
                        <ArrowLeft className="w-3.5 h-3.5 rotate-180 text-[#0F151D]/40" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/[0.04]">
                    <a
                      href="#home"
                      className="w-full nomu-btn-primary py-2.5 flex items-center justify-center gap-2 text-xs font-semibold"
                    >
                      <span>Preview Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Inquiries Preview */}
              <div className="lg:col-span-8 rounded-3xl bg-white border border-black/5 p-2 shadow-sm">
                <div className="rounded-2xl bg-[#FAF6F2] p-6 border border-black/[0.04] h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-base font-extrabold text-[#0F151D]">
                          Recent Inquiries
                        </h3>
                        <p className="text-xs text-[#0F151D]/60">
                          Messages submitted through your portfolio contact form.
                        </p>
                      </div>

                      <button
                        onClick={() => setActiveTab("messages")}
                        className="text-xs font-semibold text-[#FF7448] hover:underline"
                      >
                        View All ({messages.length}) →
                      </button>
                    </div>

                    {messages.length === 0 ? (
                      <div className="text-center py-10 text-xs text-[#0F151D]/50">
                        No inquiries received yet.
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {messages.slice(0, 3).map((msg) => (
                          <div
                            key={msg.id}
                            className="p-4 rounded-2xl bg-white border border-black/5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                          >
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-[#0F151D]">
                                  {msg.name}
                                </span>
                                <span className="text-[11px] text-[#0F151D]/50 truncate">
                                  &lt;{msg.email}&gt;
                                </span>
                              </div>
                              <p className="text-xs font-medium text-[#FF7448] mt-0.5 truncate">
                                {msg.subject}
                              </p>
                              <p className="text-xs text-[#0F151D]/70 mt-1 line-clamp-1">
                                {msg.message}
                              </p>
                            </div>

                            <a
                              href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`}
                              className="self-start sm:self-auto shrink-0 px-3 py-1.5 rounded-full bg-[#0F151D] text-white text-xs font-semibold hover:bg-[#212C3A] transition-colors"
                            >
                              Reply ↗
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: PROJECTS MANAGEMENT */}
        {/* ========================================================= */}
        {activeTab === "projects" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F151D] tracking-tight">
                  Projects Management
                </h1>
                <p className="text-xs sm:text-sm text-[#0F151D]/60">
                  Add, modify, or reorder projects displayed on the 12-column grid.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={resetProjects}
                  className="px-3.5 py-2 rounded-full bg-white border border-black/10 text-xs font-semibold text-[#0F151D]/70 hover:text-black hover:bg-[#FAF6F2] shadow-sm transition-all"
                  title="Reset to initial projects"
                >
                  <RotateCcw className="w-3.5 h-3.5 inline mr-1" />
                  <span>Reset Defaults</span>
                </button>

                <button
                  onClick={() => openProjectModal()}
                  className="nomu-btn-primary px-4 py-2 text-xs font-semibold flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Project</span>
                </button>
              </div>
            </div>

            {/* Projects Table / Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-3xl bg-white border border-black/5 shadow-sm p-2 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="rounded-2xl bg-[#FAF6F2] border border-black/[0.04] p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white text-[10px] font-bold text-[#0F151D] border border-black/5 shadow-sm">
                          {proj.badge}
                        </span>
                        <span className="text-[10px] font-mono text-[#0F151D]/50 uppercase">
                          {proj.type}
                        </span>
                      </div>

                      {/* Title & Desc */}
                      <h3 className="text-base font-extrabold text-[#0F151D] line-clamp-1">
                        {proj.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#0F151D]/65 line-clamp-2">
                        {proj.desc}
                      </p>

                      <div className="mt-3 text-[11px] font-mono text-[#FF7448] font-semibold truncate">
                        {proj.tag}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-5 pt-3 border-t border-black/[0.05] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {proj.demo && (
                          <a
                            href={proj.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-white border border-black/5 text-[#0F151D] hover:text-[#FF7448]"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {proj.github && (
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-white border border-black/5 text-[#0F151D] hover:text-[#FF7448]"
                            title="GitHub"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => openProjectModal(proj)}
                          className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-xs font-semibold text-[#0F151D] hover:bg-[#F8F5F2] transition-colors shadow-sm"
                        >
                          <Edit3 className="w-3 h-3 inline mr-1" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => deleteProject(proj.id)}
                          className="p-1.5 rounded-full text-red-500 hover:bg-red-50 transition-colors"
                          title="Delete Project"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: SKILLS MANAGEMENT */}
        {/* ========================================================= */}
        {activeTab === "skills" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F151D] tracking-tight">
                  Skills & Technology Arsenal
                </h1>
                <p className="text-xs sm:text-sm text-[#0F151D]/60">
                  Manage technical skills and tools categorized on the feature shelf.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={resetSkills}
                  className="px-3.5 py-2 rounded-full bg-white border border-black/10 text-xs font-semibold text-[#0F151D]/70 hover:text-black hover:bg-[#FAF6F2] shadow-sm transition-all"
                  title="Reset to default skills"
                >
                  <RotateCcw className="w-3.5 h-3.5 inline mr-1" />
                  <span>Reset Defaults</span>
                </button>

                <button
                  onClick={() => openSkillModal()}
                  className="nomu-btn-primary px-4 py-2 text-xs font-semibold flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Skill</span>
                </button>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {["all", "backend", "frontend", "database", "devops", "core"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSkillCategoryFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold capitalize transition-all ${
                    skillCategoryFilter === cat
                      ? "bg-[#0F151D] text-white"
                      : "bg-white border border-black/5 text-[#0F151D]/70 hover:bg-black/5"
                  }`}
                >
                  {cat === "all" ? "All Categories" : cat}
                </button>
              ))}
            </div>

            {/* Skills Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills
                .filter(
                  (s) =>
                    skillCategoryFilter === "all" ||
                    s.category === skillCategoryFilter
                )
                .map((skill) => (
                  <div
                    key={skill.id}
                    className="rounded-2xl bg-white border border-black/5 p-4 shadow-sm flex items-start justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <h4 className="text-sm font-extrabold text-[#0F151D]">
                          {skill.title}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FAF6F2] text-[#0F151D]/60 uppercase">
                          {skill.category}
                        </span>
                      </div>
                      <p className="text-xs text-[#0F151D]/70 line-clamp-2">
                        {skill.desc}
                      </p>
                      <div className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-[#0F151D]/80">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: skill.statusColor || "#22C55E" }}
                        />
                        <span>{skill.status}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 shrink-0">
                      <button
                        onClick={() => openSkillModal(skill)}
                        className="p-1.5 rounded-lg text-[#0F151D]/60 hover:text-black hover:bg-black/5"
                        title="Edit Skill"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => deleteSkill(skill.id)}
                        className="p-1.5 rounded-lg text-red-400 hover:text-red-600 hover:bg-red-50"
                        title="Delete Skill"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: INQUIRIES INBOX */}
        {/* ========================================================= */}
        {activeTab === "messages" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F151D] tracking-tight">
                Inquiries & Contact Inbox
              </h1>
              <p className="text-xs sm:text-sm text-[#0F151D]/60">
                Messages submitted via the contact form on your portfolio website.
              </p>
            </div>

            {messages.length === 0 ? (
              <div className="rounded-3xl bg-white border border-black/5 p-12 text-center text-[#0F151D]/50 text-sm">
                No inquiries in your inbox yet. Messages sent through the contact form will appear here.
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`rounded-3xl bg-white border ${
                      msg.read ? "border-black/5" : "border-[#FF7448]/30 shadow-md"
                    } p-5 sm:p-6 transition-all`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-black/[0.05]">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-extrabold text-[#0F151D]">
                            {msg.name}
                          </h3>
                          {!msg.read && (
                            <span className="px-2 py-0.5 rounded-full bg-[#FF7448] text-white text-[10px] font-bold">
                              NEW
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#0F151D]/60 font-mono">
                          {msg.email}
                        </p>
                      </div>

                      <span className="text-xs font-mono text-[#0F151D]/45">
                        {new Date(msg.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit"
                        })}
                      </span>
                    </div>

                    <div className="py-4">
                      <h4 className="text-sm font-bold text-[#FF7448] mb-1">
                        Subject: {msg.subject}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#0F151D]/80 whitespace-pre-wrap leading-relaxed">
                        {msg.message}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between">
                      <a
                        href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0F151D] text-white text-xs font-semibold hover:bg-[#212C3A] transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Reply via Email ↗</span>
                      </a>

                      <div className="flex items-center gap-2">
                        {!msg.read && (
                          <button
                            onClick={() => markMessageRead(msg.id)}
                            className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-xs font-semibold text-[#0F151D] hover:bg-[#FAF6F2]"
                          >
                            Mark Read
                          </button>
                        )}
                        <button
                          onClick={() => deleteMessage(msg.id)}
                          className="p-2 rounded-full text-red-500 hover:bg-red-50"
                          title="Delete Message"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: PROFILE & SETTINGS (WITH SECURITY PASSCODE MANAGER) */}
        {/* ========================================================= */}
        {activeTab === "profile" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F151D] tracking-tight">
                  Profile & Security Settings
                </h1>
                <p className="text-xs sm:text-sm text-[#0F151D]/60">
                  Customize hero typography, status badges, and update your admin passcode.
                </p>
              </div>

              {profileSaved && (
                <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-bold animate-in fade-in">
                  <Check className="w-4 h-4" />
                  <span>Saved to Live Site!</span>
                </div>
              )}
            </div>

            {/* Profile General Info Form */}
            <form onSubmit={handleSaveProfile} className="space-y-6">
              <div className="rounded-3xl bg-white border border-black/5 p-6 shadow-sm space-y-4">
                <h3 className="text-sm font-extrabold text-[#0F151D] flex items-center gap-2">
                  <User className="w-4 h-4 text-[#FF7448]" />
                  <span>General Information</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profileForm.name}
                      onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FF7448]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1.5">
                      Hero Status Badge
                    </label>
                    <input
                      type="text"
                      value={profileForm.statusBadge}
                      onChange={(e) => setProfileForm({ ...profileForm, statusBadge: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FF7448]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1.5">
                    Hero Subtitle / Bio Pitch
                  </label>
                  <textarea
                    rows={2}
                    value={profileForm.bio}
                    onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FF7448] resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1.5">
                      Location
                    </label>
                    <input
                      type="text"
                      value={profileForm.location}
                      onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FF7448]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1.5">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      value={profileForm.email}
                      onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FF7448]"
                    />
                  </div>
                </div>
              </div>

              {/* Typewriter Roles Editor */}
              <div className="rounded-3xl bg-white border border-black/5 p-6 shadow-sm space-y-4">
                <div>
                  <h3 className="text-sm font-extrabold text-[#0F151D]">
                    Hero Typewriter Roles
                  </h3>
                  <p className="text-xs text-[#0F151D]/60">
                    Roles that cycle continuously in the hero badge.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {profileForm.roles.map((role, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6F2] border border-black/5 text-xs font-semibold text-[#0F151D]"
                    >
                      <span>{role}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveRole(idx)}
                        className="text-red-500 hover:font-bold ml-1"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add new role (e.g. Next.js Architect)..."
                    value={newRoleInput}
                    onChange={(e) => setNewRoleInput(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-2xl bg-[#FAF6F2] border border-black/10 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#FF7448]"
                  />
                  <button
                    type="button"
                    onClick={handleAddRole}
                    className="px-4 py-2 rounded-full bg-[#0F151D] text-white text-xs font-semibold"
                  >
                    + Add Role
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="nomu-btn-primary px-8 py-3.5 text-sm font-semibold flex items-center gap-2 cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile Changes</span>
              </button>
            </form>

            {/* 🔐 Change Admin Passcode Card */}
            <div className="rounded-3xl bg-white border border-black/5 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-extrabold text-[#0F151D] flex items-center gap-2">
                    <KeyRound className="w-4 h-4 text-[#FF7448]" />
                    <span>Change Admin Passcode</span>
                  </h3>
                  <p className="text-xs text-[#0F151D]/60 mt-0.5">
                    Update the secret passcode used to unlock this Admin Portal.
                  </p>
                </div>
              </div>

              {pwdStatus.message && (
                <div
                  className={`p-3 rounded-2xl text-xs font-semibold flex items-center gap-2 ${
                    pwdStatus.success
                      ? "bg-green-50 border border-green-200 text-green-700"
                      : "bg-red-50 border border-red-200 text-red-600"
                  }`}
                >
                  {pwdStatus.success ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0" />
                  )}
                  <span>{pwdStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleChangePassword} className="space-y-4 max-w-lg">
                <div>
                  <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1">
                    Current Passcode
                  </label>
                  <input
                    type="password"
                    required
                    value={pwdForm.currentPassword}
                    onChange={(e) =>
                      setPwdForm({ ...pwdForm, currentPassword: e.target.value })
                    }
                    placeholder="Enter current passcode..."
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#FF7448]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1">
                      New Passcode
                    </label>
                    <input
                      type="password"
                      required
                      value={pwdForm.newPassword}
                      onChange={(e) =>
                        setPwdForm({ ...pwdForm, newPassword: e.target.value })
                      }
                      placeholder="Min 6 characters..."
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#FF7448]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1">
                      Confirm New Passcode
                    </label>
                    <input
                      type="password"
                      required
                      value={pwdForm.confirmPassword}
                      onChange={(e) =>
                        setPwdForm({ ...pwdForm, confirmPassword: e.target.value })
                      }
                      placeholder="Repeat new passcode..."
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#FF7448]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#0F151D] text-white text-xs font-semibold hover:bg-[#212C3A] transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Update Admin Passcode</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* ========================================================= */}
      {/* 📦 ADD / EDIT PROJECT MODAL */}
      {/* ========================================================= */}
      {isProjectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="rounded-3xl bg-white border border-black/10 shadow-2xl max-w-xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-extrabold text-[#0F151D] mb-4">
              {editingProject ? "Edit Project" : "Add New Project"}
            </h3>

            <form onSubmit={handleSaveProject} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  required
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  placeholder="e.g. AI Workflow Platform"
                  className="w-full px-4 py-2 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1">
                    Badge Label
                  </label>
                  <input
                    type="text"
                    value={projectForm.badge}
                    onChange={(e) => setProjectForm({ ...projectForm, badge: e.target.value })}
                    placeholder="e.g. Featured Full-Stack"
                    className="w-full px-4 py-2 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1">
                    Category Type
                  </label>
                  <select
                    value={projectForm.type}
                    onChange={(e) => setProjectForm({ ...projectForm, type: e.target.value })}
                    className="w-full px-4 py-2 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-medium"
                  >
                    <option value="fullstack">Full Stack</option>
                    <option value="frontend">Frontend & Tools</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1">
                  Tech Stack Tag
                </label>
                <input
                  type="text"
                  value={projectForm.tag}
                  onChange={(e) => setProjectForm({ ...projectForm, tag: e.target.value })}
                  placeholder="e.g. Node.js · Express · React · MongoDB"
                  className="w-full px-4 py-2 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  required
                  value={projectForm.desc}
                  onChange={(e) => setProjectForm({ ...projectForm, desc: e.target.value })}
                  placeholder="Explain what the project does, key technical highlights..."
                  className="w-full px-4 py-2 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-medium resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1">
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    value={projectForm.github}
                    onChange={(e) => setProjectForm({ ...projectForm, github: e.target.value })}
                    placeholder="https://github.com/..."
                    className="w-full px-4 py-2 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1">
                    Live Demo URL (optional)
                  </label>
                  <input
                    type="url"
                    value={projectForm.demo}
                    onChange={(e) => setProjectForm({ ...projectForm, demo: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-4 py-2 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1">
                  Preview Image URL (or path)
                </label>
                <input
                  type="text"
                  value={typeof projectForm.image === "string" ? projectForm.image : ""}
                  onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                  placeholder="https://images.unsplash.com/... or image path"
                  className="w-full px-4 py-2 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-medium"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-4 border-t border-black/10">
                <button
                  type="button"
                  onClick={() => setIsProjectModalOpen(false)}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-[#0F151D]/60 hover:bg-black/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="nomu-btn-primary px-6 py-2 text-xs font-semibold"
                >
                  {editingProject ? "Update Project" : "Add to Portfolio"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 🧩 ADD / EDIT SKILL MODAL */}
      {/* ========================================================= */}
      {isSkillModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="rounded-3xl bg-white border border-black/10 shadow-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-extrabold text-[#0F151D] mb-4">
              {editingSkill ? "Edit Skill" : "Add New Skill"}
            </h3>

            <form onSubmit={handleSaveSkill} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1">
                  Skill / Tool Name
                </label>
                <input
                  type="text"
                  required
                  value={skillForm.title}
                  onChange={(e) => setSkillForm({ ...skillForm, title: e.target.value })}
                  placeholder="e.g. Next.js or Docker"
                  className="w-full px-4 py-2 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1">
                    Category
                  </label>
                  <select
                    value={skillForm.category}
                    onChange={(e) => setSkillForm({ ...skillForm, category: e.target.value })}
                    className="w-full px-4 py-2 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-medium"
                  >
                    <option value="backend">Backend</option>
                    <option value="frontend">Frontend</option>
                    <option value="database">Database</option>
                    <option value="devops">DevOps & Tools</option>
                    <option value="core">Core & Languages</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1">
                    Status Label
                  </label>
                  <input
                    type="text"
                    value={skillForm.status}
                    onChange={(e) => setSkillForm({ ...skillForm, status: e.target.value })}
                    placeholder="e.g. Production Ready"
                    className="w-full px-4 py-2 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1">
                  Description / Application
                </label>
                <textarea
                  rows={2}
                  required
                  value={skillForm.desc}
                  onChange={(e) => setSkillForm({ ...skillForm, desc: e.target.value })}
                  placeholder="How you use this tool in projects..."
                  className="w-full px-4 py-2 rounded-2xl bg-[#FAF6F2] border border-black/10 text-sm font-medium resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-4 border-t border-black/10">
                <button
                  type="button"
                  onClick={() => setIsSkillModalOpen(false)}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-[#0F151D]/60 hover:bg-black/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="nomu-btn-primary px-6 py-2 text-xs font-semibold"
                >
                  {editingSkill ? "Update Skill" : "Add to Skills"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import { Mail, MessageSquare, Send, Check, Copy, ArrowUpRight, Sparkles, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { usePortfolio } from "../context/PortfolioContext";

export default function Contact() {
  const { addMessage } = usePortfolio();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formSent, setFormSent] = useState(false);

  const emailAddress = "Jeevanshetty9481@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (e) {
      // fallback
      window.open(`mailto:${emailAddress}`);
    }
  };

  const handleOpenEmail = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      window.location.href = `mailto:${emailAddress}?subject=Hello Jeevan&body=Hello Jeevan`;
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=Hello%20Jeevan&body=Hello%20Jeevan`,
        "_blank"
      );
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Save into Admin Inquiries
    addMessage({
      name: formData.name,
      email: formData.email,
      subject: formData.subject || "Portfolio Contact Inquiry",
      message: formData.message
    });

    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      formData.subject || "Project Inquiry / Hello from " + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, "_blank");
    setFormSent(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setFormSent(false), 4000);
  };

  const contactChannels = [
    {
      title: "Email Me",
      value: emailAddress,
      actionLabel: copied ? "Copied to Clipboard!" : "Copy Email",
      icon: <FaEnvelope className="text-xl text-[#FF7448]" />,
      action: handleCopyEmail,
      isPrimary: true
    },
    {
      title: "WhatsApp Chat",
      value: "+91 93538 19063",
      actionLabel: "Direct Message",
      icon: <FaWhatsapp className="text-xl text-[#22C55E]" />,
      link: "https://wa.me/9353819063?text=Hello%20Jeevan%20👋"
    },
    {
      title: "LinkedIn",
      value: "jeevan-shetty-241613229",
      actionLabel: "Connect on LinkedIn",
      icon: <FaLinkedin className="text-xl text-[#1450C6]" />,
      link: "https://www.linkedin.com/in/jeevan-shetty-241613229/"
    },
    {
      title: "LeetCode",
      value: "JeevanShetty7",
      actionLabel: "View Problem Solving",
      icon: <SiLeetcode className="text-xl text-[#FFA116]" />,
      link: "https://leetcode.com/u/JeevanShetty7/"
    },
    {
      title: "GitHub",
      value: "Jeevan-Shetty07",
      actionLabel: "View Repositories",
      icon: <FaGithub className="text-xl text-[#0F151D]" />,
      link: "https://github.com/Jeevan-Shetty07"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/5 text-xs font-semibold text-[#0F151D]/70 shadow-sm mb-4">
          <MessageSquare className="w-3.5 h-3.5 text-[#FF7448]" />
          <span>Get in Touch</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F151D] tracking-tight">
          Let’s build something <br className="hidden sm:inline" />
          <span className="text-[#FF7448]">extraordinary together.</span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-[#0F151D]/70 max-w-xl">
          Have an opportunity, a project brief, or simply want to talk tech? My inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Channel Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {contactChannels.map((c, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-black/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-2 transition-all hover:shadow-[0_12px_28px_-6px_rgba(15,21,29,0.1)]"
            >
              <div className="rounded-2xl bg-[#FAF6F2] border border-black/[0.04] p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm">
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F151D]/50">
                      {c.title}
                    </h4>
                    <p className="text-sm font-bold text-[#0F151D] truncate max-w-[180px] sm:max-w-none">
                      {c.value}
                    </p>
                  </div>
                </div>

                {c.link ? (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 p-2.5 rounded-full bg-white border border-black/10 text-[#0F151D] hover:bg-[#FF7448] hover:text-white hover:border-[#FF7448] transition-all shadow-sm group"
                    aria-label={c.title}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <button
                    onClick={c.action}
                    className="shrink-0 p-2.5 rounded-full bg-white border border-black/10 text-[#0F151D] hover:bg-[#FF7448] hover:text-white hover:border-[#FF7448] transition-all shadow-sm"
                    aria-label={c.title}
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-[#22C55E]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Quick Location & Availability Card */}
          <div className="rounded-3xl bg-[#0F151D] text-white p-6 shadow-xl relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-0 nomu-grid-dark opacity-30 pointer-events-none"
            />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#FFBFA6] font-semibold">Location</span>
                <p className="text-base font-bold flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#FF7448]" />
                  <span>Bengaluru, Karnataka, India</span>
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs font-mono text-[#FFBFA6] font-semibold">Timezone</span>
                <p className="text-sm font-bold mt-0.5">IST (UTC+5:30)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl md:rounded-[36px] bg-white border border-black/5 shadow-[0_10px_30px_-10px_rgba(15,21,29,0.08)] p-3 sm:p-4">
            <div className="rounded-2xl md:rounded-[28px] bg-[#FAF6F2] border border-black/[0.06] p-6 sm:p-8 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 nomu-grid-card pointer-events-none"
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold text-[#0F151D] tracking-tight mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-[#0F151D]/65 mb-6">
                  Fill out the details below to launch a pre-composed email directly.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ada Lovelace"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-black/10 text-sm text-[#0F151D] placeholder:text-[#0F151D]/30 focus:outline-none focus:ring-2 focus:ring-[#FF7448] focus:border-transparent transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ada@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-black/10 text-sm text-[#0F151D] placeholder:text-[#0F151D]/30 focus:outline-none focus:ring-2 focus:ring-[#FF7448] focus:border-transparent transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1.5">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      placeholder="Project Inquiry / Job Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-black/10 text-sm text-[#0F151D] placeholder:text-[#0F151D]/30 focus:outline-none focus:ring-2 focus:ring-[#FF7448] focus:border-transparent transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#0F151D]/70 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your project, timeline, or idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-black/10 text-sm text-[#0F151D] placeholder:text-[#0F151D]/30 focus:outline-none focus:ring-2 focus:ring-[#FF7448] focus:border-transparent transition-all shadow-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full nomu-btn-primary py-3.5 px-6 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message ↗</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Github, Linkedin, Mail, ExternalLink, Activity } from "lucide-react";

const footLinks = [
  { name: "Home", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];

const socialLinks = [
  { 
    name: "GitHub", 
    href: "https://github.com/Diyajain3", 
    icon: Github,
    color: "from-gray-600 to-gray-700"
  },
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/diya30jain/", 
    icon: Linkedin,
    color: "from-blue-600 to-blue-700"
  },
  { 
    name: "Email", 
    href: "mailto:diyajain3003@gmail.com", 
    icon: Mail,
    color: "from-emerald-600 to-emerald-700"
  }
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Left - Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h2 className="text-3xl font-black bg-gradient-to-r from-emerald-300 to-emerald-100 bg-clip-text text-transparent mb-2">
                Diya Jain
              </h2>
              <p className="text-emerald-200 font-semibold">Full Stack Developer</p>
            </div>
            <p className="text-emerald-100/80 text-sm leading-relaxed mb-6">
              Building modern, scalable web applications with cutting-edge technologies. Passionate about clean code and great user experiences.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ name, href, icon: Icon, color }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-lg bg-gradient-to-br from-emerald-600/20 to-emerald-700/20 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/50"
                  aria-label={name}
                >
                  <Icon size={20} className="text-emerald-300 group-hover:text-emerald-100 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Middle - Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-emerald-200 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-emerald-100 hover:text-emerald-300 transition-all duration-300 font-medium"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:w-6 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - CTA */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-emerald-200 mb-6">Get In Touch</h3>
            <p className="text-emerald-100/80 text-sm mb-6 leading-relaxed">
              Have a project or opportunity? I'd love to hear from you.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105"
            >
              Contact Me
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-600/50 to-transparent mb-8"></div>

        {/* Status & Copyright Section */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <a 
              href="https://status.diya-portfolio.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:bg-emerald-500/20"
            >
              <div className="relative flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-semibold text-emerald-200 group-hover:text-emerald-100 transition-colors">
                  System Status
                </span>
              </div>
              <ExternalLink size={14} className="text-emerald-300 group-hover:text-emerald-100 transition-colors" />
            </a>
          </div>
          
          <div className="space-y-2">
            <p className="text-emerald-200/80 text-sm">
              Crafted with passion and clean code
            </p>
            <p className="text-emerald-300/60 text-xs font-medium">
              © 2024 Diya Jain. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient line at bottom */}
      <div className="h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
    </footer>
  );
}

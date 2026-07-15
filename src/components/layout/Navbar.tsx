"use client";

import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
   { name: "Projects", href: "#projects" },
  { name: "Profiles", href: "#profile" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b-2 border-emerald-100 shadow-lg">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with glow */}
          <h1 className="text-2xl font-extrabold text-emerald-900 relative group cursor-pointer">
            <a href="#hero" className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Diya&apos;s Portfolio</span>
              <span className="absolute -inset-2 blur-xl opacity-30 bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full -z-10 group-hover:opacity-50 transition-opacity duration-300"></span>
            </a>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 lg:gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-emerald-900 font-semibold hover:text-emerald-600 transition-all duration-300 relative group text-xs lg:text-sm uppercase tracking-wide"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-2 w-0 h-1 bg-gradient-to-r from-emerald-600 to-emerald-500 group-hover:w-full transition-all duration-500 rounded-full"></span>
                </a>
              </li>
            ))}
          </ul>



          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden group text-emerald-800 text-3xl font-bold hover:text-emerald-600 transition-colors duration-300 p-2"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/90 backdrop-blur-lg border-t border-emerald-100 animate-in fade-in slide-in-from-top-2">
            <ul className="flex flex-col gap-0 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-6 py-3 text-emerald-900 font-semibold hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-300 text-sm uppercase tracking-wide border-l-4 border-l-transparent hover:border-l-emerald-600"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [{ name: "About", href: "#profile" }, { name: "Skills", href: "#skills" }, { name: "Work", href: "#projects" }, { name: "Experience", href: "#experience" }, { name: "Contact", href: "#contact" }];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="sticky top-0 z-50 border-b border-[#2b2d28]/80 bg-[#0d0e0c]/90 backdrop-blur-xl"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20"><a href="#hero" className="mono text-sm font-medium tracking-tight text-[#f4f3ee]"><span className="text-[#c8f169]">/</span> diya.jain</a><div className="hidden items-center gap-8 md:flex">{navLinks.map((link) => <a key={link.href} href={link.href} className="mono text-xs text-[#9b9b94] transition hover:text-[#c8f169]">{link.name}</a>)}<a href="#contact" className="border border-[#c8f169] px-4 py-2 text-xs font-medium text-[#c8f169] transition hover:bg-[#c8f169] hover:text-[#0d0e0c]">Let&apos;s talk</a></div><button className="text-[#f4f3ee] md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation">{isMenuOpen ? <X /> : <Menu />}</button></div>{isMenuOpen && <div className="border-t border-[#2b2d28] px-6 py-5 md:hidden">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="mono block py-3 text-sm text-[#9b9b94]">{link.name}</a>)}</div>}</nav>;
}

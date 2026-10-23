"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [{ name: "About", href: "#profile" }, { name: "Skills", href: "#skills" }, { name: "Work", href: "#projects" }, { name: "Experience", href: "#experience" }, { name: "Contact", href: "#contact" }];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="sticky top-0 z-50 border-b border-[#2b2d28] bg-[#0d0e0c]/95 backdrop-blur-xl"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20"><a href="#hero" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-[#f4f3ee]"><span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#c8f169] font-serif text-xl italic text-[#0d0e0c]">D</span> Diya Jain</a><div className="hidden items-center gap-8 md:flex">{navLinks.map((link) => <a key={link.href} href={link.href} className="text-sm font-medium text-[#9b9b94] transition hover:text-[#c8f169]">{link.name}</a>)}<a href="#contact" className="rounded-full bg-[#c8f169] px-5 py-2.5 text-sm font-semibold text-[#0d0e0c] transition hover:bg-[#f4f3ee]">Let&apos;s talk <span aria-hidden="true">→</span></a></div><button className="text-[#c8f169] md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation">{isMenuOpen ? <X /> : <Menu />}</button></div>{isMenuOpen && <div className="border-t border-[#2b2d28] bg-[#0d0e0c] px-6 py-5 md:hidden">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block py-3 text-sm font-medium text-[#9b9b94]">{link.name}</a>)}</div>}</nav>;
}

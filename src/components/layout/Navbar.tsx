"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [{ name: "About", href: "#profile" }, { name: "Skills", href: "#skills" }, { name: "Work", href: "#projects" }, { name: "Experience", href: "#experience" }, { name: "Contact", href: "#contact" }];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="sticky top-0 z-50 border-b border-[#dfd6ca] bg-[#f7f2e9]/95 backdrop-blur-xl"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20"><a href="#hero" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-[#272321]"><span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#5a4336] font-serif text-xl italic text-[#fffdf9]">D</span> Diya Jain</a><div className="hidden items-center gap-8 md:flex">{navLinks.map((link) => <a key={link.href} href={link.href} className="text-sm font-medium text-[#716962] transition hover:text-[#bf7629]">{link.name}</a>)}<a href="#contact" className="rounded-full bg-[#272321] px-5 py-2.5 text-sm font-semibold text-[#fffdf9] transition hover:bg-[#bf7629]">Let&apos;s talk <span aria-hidden="true">→</span></a></div><button className="text-[#5a4336] md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation">{isMenuOpen ? <X /> : <Menu />}</button></div>{isMenuOpen && <div className="border-t border-[#dfd6ca] bg-[#f7f2e9] px-6 py-5 md:hidden">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block py-3 text-sm font-medium text-[#716962]">{link.name}</a>)}</div>}</nav>;
}

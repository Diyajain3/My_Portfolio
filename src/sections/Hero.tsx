"use client";

import Image from "next/image";
import diya from "@/images/diyaaa.jpg";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="grid-bg relative overflow-hidden px-6 pb-24 pt-28 md:px-12 lg:px-20 lg:pb-32 lg:pt-36">
      <div className="pointer-events-none absolute -right-32 top-16 h-96 w-96 rounded-full bg-[#c8f169]/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <div className="animate-rise mono mb-7 flex items-center gap-3 text-sm text-[#c8f169]"><span className="h-px w-10 bg-[#c8f169]" /> AVAILABLE FOR OPPORTUNITIES</div>
          <h1 className="animate-rise delay-1 max-w-4xl text-6xl font-semibold leading-[.95] tracking-[-.07em] text-[#f4f3ee] sm:text-7xl lg:text-[7.6rem]">Building useful<br /><span className="text-[#c8f169]">things for web.</span></h1>
          <p className="animate-rise delay-2 mt-8 max-w-xl text-lg leading-relaxed text-[#9b9b94]">I&apos;m <strong className="font-medium text-[#f4f3ee]">Diya Jain</strong>, a full-stack developer who turns thoughtful ideas into fast, responsive products with React, Node.js and data that works.</p>
          <div className="animate-rise delay-3 mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 bg-[#c8f169] px-5 py-3 font-semibold text-[#0d0e0c] transition hover:bg-white">View my work <ArrowUpRight size={18} /></a>
            <a href="https://blobs.vusercontent.net/blob/DiyaJainResume-QX49c8LpEVc0iPoi5y9g4dxYXEdc81.pdf" target="_blank" rel="noreferrer" className="mono text-sm text-[#9b9b94] underline decoration-[#c8f169] underline-offset-4 transition hover:text-[#c8f169]">Download résumé</a>
          </div>
          <div className="mono mt-16 flex flex-wrap gap-6 text-xs text-[#70716b]"><span className="flex items-center gap-2"><MapPin size={14} className="text-[#c8f169]" /> Greater Noida, India</span><span>CGPA 8.7 / 2027</span><span>600+ DSA problems</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
          <div className="absolute -inset-3 rounded-full border border-dashed border-[#c8f169]/30" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] grayscale transition duration-500 hover:grayscale-0"><Image src={diya} alt="Diya Jain" fill className="object-cover" priority /></div>
          <div className="absolute -bottom-6 -left-7 border border-[#2b2d28] bg-[#151614] p-4"><span className="mono block text-[10px] text-[#70716b]">CURRENTLY</span><span className="mt-1 block text-sm text-[#f4f3ee]">Shipping full-stack ideas ↗</span></div>
          <div className="absolute -right-5 top-8 flex flex-col gap-3"><a aria-label="GitHub" href="https://github.com/Diyajain3" target="_blank" rel="noreferrer" className="rounded-full border border-[#2b2d28] bg-[#151614] p-3 text-[#f4f3ee] transition hover:border-[#c8f169] hover:text-[#c8f169]"><Github size={18} /></a><a aria-label="LinkedIn" href="https://linkedin.com/in/diya30jain" target="_blank" rel="noreferrer" className="rounded-full border border-[#2b2d28] bg-[#151614] p-3 text-[#f4f3ee] transition hover:border-[#c8f169] hover:text-[#c8f169]"><Linkedin size={18} /></a><a aria-label="Email Diya" href="mailto:diyajain3003@gmail.com" className="rounded-full border border-[#2b2d28] bg-[#151614] p-3 text-[#f4f3ee] transition hover:border-[#c8f169] hover:text-[#c8f169]"><Mail size={18} /></a></div>
        </div>
      </div>
    </section>
  );
}

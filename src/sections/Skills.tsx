"use client";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiTypescript,
  SiBootstrap,
  SiPostgresql
} from "react-icons/si";

import { Code2 } from "lucide-react";
import type { IconType } from "react-icons";

type Skill = { name: string; icon: IconType; color: string };

const skills: Skill[] = [
  { name: "HTML5", icon: SiHtml5, color: "#E44D26" },
  { name: "CSS3", icon: SiCss, color: "#2965F1" },
  { name: "JavaScript", icon: SiJavascript, color: "#E6C200" },
  { name: "React.js", icon: SiReact, color: "#149ECA" },
  { name: "Next.js", icon: SiNextdotjs, color: "#111827" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#0EA5E9" },
  { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
  { name: "Express.js", icon: SiExpress, color: "#111827" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#111827" },
  { name: "VS Code", icon: Code2, color: "#3178C6" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  {
    name: "TypeScript", icon:SiTypescript, color: "#0EA5E9"
  },
  {
    name: "PostgresSQL", icon:SiPostgresql, color: "#272462"
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#151614] px-6 py-24 text-[#f4f3ee]"
    >
      {/* Soft background glow */}
      <div className="absolute top-10 -left-24 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 bg-emerald-200/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-4">
            <Code2 size={18} className="text-[#d7f77a]" />
            <span className="text-sm font-bold text-emerald-700 tracking-wide">
              MY TECH STACK
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#f4f3ee] mb-3">
            Skills &amp; Technologies
          </h2>
          <p className="text-base text-[#b8bdb2] max-w-2xl mx-auto leading-relaxed">
            Tools and technologies I use to build modern, responsive and scalable
            web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-[#20221e] border border-[#2b2d28] p-3 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-300"
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${color}1A` }}
              >
                <Icon size={30} style={{ color }} />
              </div>
              <span className="text-sm font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

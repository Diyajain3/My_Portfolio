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
      className="relative bg-gradient-to-b from-white to-emerald-50 py-16 px-6 overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute top-10 -left-24 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 bg-emerald-200/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-slideInDown">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-4 animate-bounce-in">
            <Code2 size={18} className="text-emerald-600" />
            <span className="text-sm font-bold text-emerald-700 tracking-wide">
              MY TECH STACK
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-3 animate-glow-pulse">
            Skills &amp; Technologies
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed animate-slideInUp">
            Tools and technologies I use to build modern, responsive and scalable
            web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map(({ name, icon: Icon, color }, index) => (
            <div
              key={name}
              style={{ animationDelay: `${index * 0.08}s` }}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-white border border-emerald-100 p-5 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:border-emerald-400 hover:scale-105 animate-bounce-in relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/20 group-hover:to-emerald-400/10 transition-all duration-300 rounded-2xl"></div>
              
              <div
                className="flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 relative z-10"
                style={{ backgroundColor: `${color}1A` }}
              >
                <Icon size={30} style={{ color }} />
              </div>
              <span className="text-sm font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors relative z-10">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

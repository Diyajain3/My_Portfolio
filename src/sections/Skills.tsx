"use client";

import { useEffect, useRef, useState } from "react";
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
} from "react-icons/si";

import { Folder, Code2 } from "lucide-react";
import type { IconType } from "react-icons";

export default function Skills() {
  const skillGroups: {
    category: string;
    skills: { name: string; icon: IconType; color: string }[];
  }[] = [
    {
  category: "frontend/",
  skills: [
    { name: "HTML5", icon: SiHtml5, color: "#E44D26" },
    { name: "CSS3", icon: SiCss, color: "#2965F1" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#F1FBF6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  ],
},
    {
      category: "backend/",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
        { name: "Express.js", icon: SiExpress, color: "#F1FBF6" },
      ],
    },
    {
      category: "database/",
      skills: [{ name: "MongoDB", icon: SiMongodb, color: "#47A248" }],
    },
    {
  category: "tools/",
  skills: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#F1FBF6" },
    { name: "VS Code", icon: Code2, color: "#3178C6" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  ],
},
  ];

  const [visible, setVisible] = useState<boolean[]>(() =>
    skillGroups.map(() => false)
  );
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            obs.disconnect();
          }
        },
        { threshold: 0.25 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-emerald-50 via-white to-emerald-50 py-24 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-4 animate-slideInDown">
            Skills
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Technical expertise and tools I&apos;ve mastered for building modern web applications
          </p>
        </div>

        {/* Skills Groups */}
        <div className="space-y-8">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="animate-slideInUp"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={visible[i] ? "animate-slideInUp" : "opacity-0"} style={{ animationDelay: `${i * 0.12}s` }}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <Folder size={20} className="text-emerald-600" />
                  <h3 className="text-xl font-bold text-emerald-900 uppercase tracking-wide">
                    {group.category.replace('/', '')}
                  </h3>
                  <div className="flex-grow h-1 bg-gradient-to-r from-emerald-300 to-transparent rounded-full"></div>
                </div>

                {/* Skill grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {group.skills.map(({ name, icon: Icon, color }) => (
                    <div
                      key={name}
                      className="group relative flex flex-col items-center justify-center gap-3 px-4 py-5 rounded-xl border-2 border-emerald-200 bg-white/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-200/50"
                    >
                      {/* shine sweep on hover */}
                      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-emerald-100/50 to-transparent transition-transform duration-700" />

                      <Icon
                        size={28}
                        style={{ color }}
                        className="shrink-0 transition-transform duration-300 group-hover:scale-125 relative z-10"
                      />
                      <span className="text-sm font-semibold text-emerald-900 transition-colors duration-300 group-hover:text-emerald-700 text-center relative z-10">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

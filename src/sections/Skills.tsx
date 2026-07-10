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
    <section id="skills" className="relative bg-gradient-to-b from-white via-emerald-50 to-white py-32 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-40 -left-40 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-6 animate-slideInDown">
            <Code2 size={18} className="text-emerald-600" />
            <span className="text-sm font-bold text-emerald-700">TECHNICAL STACK</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 bg-clip-text text-transparent mb-6 leading-tight">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Complete arsenal of modern technologies and tools I use to build scalable, performant web applications
          </p>
        </div>

        {/* Skills Grid - Single Row Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className={visible[i] ? "animate-slideInUp" : "opacity-0"}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Category Card - Modern Design */}
              <div className="group relative h-full rounded-2xl border border-emerald-200 bg-gradient-to-br from-white via-emerald-50/30 to-white p-7 hover:border-emerald-400 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-200/40 hover:-translate-y-3">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-600/0 to-emerald-500/0 group-hover:from-emerald-600/5 group-hover:to-emerald-500/5 transition-all duration-500 pointer-events-none"></div>

                {/* Category Icon with Gradient */}
                <div className="mb-6 relative z-10">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-500 text-white shadow-lg group-hover:scale-110 group-hover:shadow-emerald-400/50 transition-all duration-300">
                    <Folder size={28} />
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="text-2xl font-bold text-emerald-900 mb-2 relative z-10">
                  {group.category.replace('/', '')}
                </h3>
                <p className="text-sm text-emerald-600 font-semibold mb-6 relative z-10">
                  {group.skills.length} skills
                </p>

                {/* Skills List */}
                <div className="space-y-2 relative z-10">
                  {group.skills.map(({ name, icon: Icon, color }) => (
                    <div
                      key={name}
                      className="group/skill flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white border border-emerald-100 hover:border-emerald-300 transition-all duration-300 cursor-default"
                    >
                      <div
                        className="flex-shrink-0 p-2 rounded-lg bg-white group-hover/skill:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${color}15` }}
                      >
                        <Icon
                          size={18}
                          style={{ color }}
                          className="transition-all duration-300"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-800 group-hover/skill:text-emerald-700 transition-colors duration-300 truncate">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative corner badge */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-600/10 to-transparent rounded-bl-2xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent mb-16"></div>

        {/* Summary Stats - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 hover:border-emerald-400 hover:shadow-xl transition-all duration-500 text-center hover:-translate-y-2">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="text-5xl font-black text-emerald-600 mb-2 relative z-10">
              {skillGroups.reduce((sum, g) => sum + g.skills.length, 0)}+
            </div>
            <p className="text-lg font-bold text-emerald-900 relative z-10">
              Technologies
            </p>
            <p className="text-sm text-gray-600 mt-2 relative z-10">
              Expert level proficiency
            </p>
          </div>

          <div className="group relative rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 hover:border-emerald-400 hover:shadow-xl transition-all duration-500 text-center hover:-translate-y-2">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="text-5xl font-black text-emerald-600 mb-2 relative z-10">
              {skillGroups.length}
            </div>
            <p className="text-lg font-bold text-emerald-900 relative z-10">
              Categories
            </p>
            <p className="text-sm text-gray-600 mt-2 relative z-10">
              Full stack development
            </p>
          </div>

          <div className="group relative rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 hover:border-emerald-400 hover:shadow-xl transition-all duration-500 text-center hover:-translate-y-2">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="text-5xl font-black text-emerald-600 mb-2 relative z-10">
              2+
            </div>
            <p className="text-lg font-bold text-emerald-900 relative z-10">
              Years
            </p>
            <p className="text-sm text-gray-600 mt-2 relative z-10">
              Professional experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

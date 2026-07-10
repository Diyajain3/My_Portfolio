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
    <section id="skills" className="relative bg-gradient-to-b from-white via-emerald-50 to-emerald-100 py-28 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-32 -left-40 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200">
              <Code2 size={18} className="text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Technical Skills</span>
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-6 leading-tight">
            My Expertise
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            I&apos;ve built expertise across the full stack, specializing in modern JavaScript frameworks and cloud technologies. Each skill represents real-world experience and continuous learning.
          </p>
        </div>

        {/* Skills Categories - Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className={visible[i] ? "animate-slideInUp" : "opacity-0"}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Category Card */}
              <div className="group relative rounded-2xl border-2 border-emerald-200 bg-white/60 backdrop-blur-lg p-8 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-200/50 transition-all duration-500 hover:-translate-y-2">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>

                {/* Top border accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-emerald-500 to-transparent rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-500 text-white group-hover:scale-110 transition-transform duration-300">
                    <Folder size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-900">
                      {group.category.replace('/', '')}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {group.skills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills Grid for this category */}
                <div className="grid grid-cols-2 gap-3 relative z-10">
                  {group.skills.map(({ name, icon: Icon, color }) => (
                    <div
                      key={name}
                      className="group/skill relative flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white border border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 hover:shadow-md"
                    >
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                      <Icon
                        size={20}
                        style={{ color }}
                        className="flex-shrink-0 transition-all duration-300 group-hover/skill:scale-110 relative z-10"
                      />
                      <span className="text-sm font-medium text-gray-800 group-hover/skill:text-emerald-700 transition-colors duration-300 relative z-10 truncate">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skill count badge */}
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 text-white font-bold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-20">
                  {group.skills.length}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 pt-8 border-t border-emerald-200">
          <div className="text-center animate-slideInUp" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl font-bold text-emerald-600 mb-2">
              {skillGroups.reduce((sum, g) => sum + g.skills.length, 0)}+
            </div>
            <p className="text-sm text-gray-700 font-medium">
              Skills Mastered
            </p>
          </div>
          <div className="text-center animate-slideInUp" style={{ animationDelay: '0.7s' }}>
            <div className="text-4xl font-bold text-emerald-600 mb-2">
              {skillGroups.length}
            </div>
            <p className="text-sm text-gray-700 font-medium">
              Categories
            </p>
          </div>
          <div className="text-center animate-slideInUp" style={{ animationDelay: '0.8s' }}>
            <div className="text-4xl font-bold text-emerald-600 mb-2">
              2+
            </div>
            <p className="text-sm text-gray-700 font-medium">
              Years Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="skills" className="relative bg-gradient-to-b from-white to-emerald-50/50 py-32 px-6 overflow-hidden">
      {/* Animated background with gradient orbs */}
      <div className="absolute top-0 -left-32 w-96 h-96 bg-emerald-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-emerald-300/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-200/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Header */}
        <div className="mb-20 text-center animate-slideInDown">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 border-2 border-emerald-200/50 mb-6 shadow-lg shadow-emerald-200/20">
            <Code2 size={20} className="text-emerald-600" />
            <span className="text-sm font-black text-emerald-700 tracking-wider">MY TECH STACK</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 bg-clip-text text-transparent mb-6 leading-tight">
            Professional Skills
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Specialized in building modern, scalable web applications using cutting-edge technologies and best practices
          </p>
        </div>

        {/* Skills Grid - Showcase Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className={visible[i] ? "animate-slideInUp" : "opacity-0"}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Premium Skill Card */}
              <div className="group relative h-full bg-white rounded-3xl border-2 border-emerald-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:border-emerald-300">
                {/* Animated top border gradient */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-transparent group-hover:via-emerald-400 transition-all duration-500"></div>

                {/* Background pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-emerald-600 to-emerald-500 transition-opacity duration-500"></div>

                <div className="relative p-8 md:p-10">
                  {/* Icon Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-500 text-white shadow-xl group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-emerald-500/40 transition-all duration-300">
                      <Folder size={32} />
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-black text-emerald-600 group-hover:text-emerald-700 transition-colors">
                        {group.skills.length}
                      </div>
                      <p className="text-xs font-semibold text-emerald-600/70 mt-1">Skills</p>
                    </div>
                  </div>

                  {/* Category Title */}
                  <h3 className="text-3xl font-black text-emerald-900 mb-2">
                    {group.category.replace('/', '')}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-8">
                    {group.category === 'frontend/' ? 'Frontend technologies' : group.category === 'backend/' ? 'Backend frameworks' : group.category === 'database/' ? 'Database systems' : 'Development tools'}
                  </p>

                  {/* Skills Showcase */}
                  <div className="space-y-3">
                    {group.skills.map(({ name, icon: Icon, color }) => (
                      <div
                        key={name}
                        className="group/skill flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-emerald-50/30 hover:from-emerald-50 hover:to-emerald-100/30 border border-emerald-100/50 hover:border-emerald-300/50 transition-all duration-300 cursor-default"
                      >
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover/skill:scale-110 group-hover/skill:shadow-lg transition-all duration-300"
                          style={{ backgroundColor: `${color}15` }}
                        >
                          <Icon
                            size={24}
                            style={{ color }}
                            className="transition-all duration-300"
                          />
                        </div>
                        <div className="flex-1">
                          <span className="text-base font-bold text-gray-900 group-hover/skill:text-emerald-700 transition-colors duration-300">
                            {name}
                          </span>
                          <div className="h-1 w-16 bg-gradient-to-r from-emerald-400 to-emerald-200 rounded-full mt-1.5 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent mb-20">
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 px-4 bg-white">
            <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"></div>
          </div>
        </div>

        {/* Stats Section - Premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { value: `${skillGroups.reduce((sum, g) => sum + g.skills.length, 0)}+`, label: 'Technologies', desc: 'Mastered & actively used' },
            { value: `${skillGroups.length}`, label: 'Categories', desc: 'Full-stack coverage' },
            { value: '2+', label: 'Years', desc: 'Professional experience' }
          ].map((stat, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl border-2 border-emerald-100 p-8 text-center hover:border-emerald-400 hover:shadow-xl transition-all duration-500 hover:-translate-y-3"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent group-hover:via-emerald-400 transition-all duration-500"></div>

              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-3">
                {stat.value}
              </div>
              <h4 className="text-lg font-bold text-emerald-900 mb-1">
                {stat.label}
              </h4>
              <p className="text-sm text-gray-600">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

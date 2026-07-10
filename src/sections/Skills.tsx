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
    <section className="relative w-full py-24 px-6 bg-ink">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm mb-3 tracking-widest uppercase text-accent font-mono">
            $ ls -la ~/skills
            <span className="animate-blink text-accent">▍</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-cream font-display">
            Skills
          </h2>
        </div>

        {/* Terminal window */}
        <div className="rounded-xl border border-line bg-surface overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-line bg-ink">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-accent/70" />
            <span className="ml-3 text-xs text-muted font-mono">skills.sh</span>
          </div>

          {/* Groups */}
          <div className="p-6 md:p-8 space-y-9">
            {skillGroups.map((group, i) => (
              <div
                key={group.category}
                ref={(el) => {
                  refs.current[i] = el;
                }}
              >
                <div
                  className={visible[i] ? "animate-riseIn" : "opacity-0"}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  {/* Folder line */}
                  <div className="flex items-center gap-2 mb-4">
                    <Folder size={16} className="text-accent" />
                    <span className="text-sm font-mono text-cream tracking-wide">
                      {group.category}
                    </span>
                  </div>

                  {/* Skill grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pl-6">
                    {group.skills.map(({ name, icon: Icon, color }) => (
                      <div
                        key={name}
                         className="group relative flex items-center gap-2.5 px-3.5 py-3 rounded-lg border border-line bg-ink overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_10px_30px_-10px_rgba(52,211,153,0.35)]"
                      >
                        {/* shine sweep on hover */}
                        <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-accent/10 to-transparent transition-transform duration-700" />

                        <Icon
                          size={18}
                          style={{ color }}
                          className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="text-sm font-mono text-body transition-colors duration-300 hover:text-cream">
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
      </div>
    </section>
  );
}
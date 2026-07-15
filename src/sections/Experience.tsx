"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, GitCommit } from "lucide-react";

export default function Experience() {
  const expdata = [
    {
      companyname: "CodeAlpha",
      role: "Frontend Development Intern",
      issueDate: "10 Sep 2025",
      finishDate: "10 Oct 2025",
      WhatIDid:
        "Actively participated in CodeAlpha's internship program, working on frontend development tasks involving HTML, CSS, and JavaScript. Built and refined UI components, focused on responsive layouts, and improved my understanding of structuring and styling web pages efficiently. Completed all assigned tasks with dedication and consistency.",
      certificateLink:
        "https://drive.google.com/file/d/1GvXfzeMol0LoSl3ehnog23mCac_233Gq/view?usp=drive_link",
    },
    {
      companyname: "Codec Technologies Pvt. Ltd.",
      role: "MERN Stack Developer Intern",
      issueDate: "15 Sep 2025",
      finishDate: "15 Oct 2025",
      WhatIDid:
        "Completed a 1-month AICTE & ICAC approved internship as a MERN Stack Developer Intern. Worked on building full-stack web applications using MongoDB, Express.js, React, and Node.js. Gained hands-on experience in developing REST APIs, connecting frontend components to backend services, managing databases, and deploying functional web features as part of real-world development tasks.",
      certificateLink:
        "https://drive.google.com/file/d/1ndZYr1q52SQEWABePPxCJNZDNxoZlxtD/view?usp=drive_link",
    },
  ];

  const [visible, setVisible] = useState<boolean[]>(() => expdata.map(() => false));
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
    <section className="relative bg-gradient-to-b from-white via-emerald-50 to-emerald-100 py-24 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse hover:opacity-15 transition-opacity"></div>
      <div className="absolute -bottom-20 right-20 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse hover:opacity-15 transition-opacity" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-4 animate-glow-pulse">
            Experience
          </h2>
          <p className="text-gray-700 text-lg animate-slideInUp opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}>
            Professional development experience and internships
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600 via-emerald-400 to-emerald-200 rounded-full"></div>

          {expdata.map((exp, i) => (
            <div
              key={exp.companyname}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="relative mb-12 last:mb-0"
            >
              <div
                className={visible[i] ? "animate-slideInUp" : "opacity-0"}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Dot */}
                <div className="absolute -left-7 top-5 w-5 h-5 rounded-full flex items-center justify-center bg-emerald-600 border-4 border-white shadow-lg hover:scale-125 transition-transform duration-300">
                  <GitCommit size={10} className="text-white" />
                </div>

                {/* Card */}
                <div className="group rounded-2xl p-6 md:p-8 border-2 border-emerald-200 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-3 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-200/70 hover:scale-102 relative overflow-hidden">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/10 group-hover:to-emerald-400/5 transition-all duration-300"></div>

                  {/* Top bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 relative z-10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 group-hover:text-emerald-700 transition-colors">
                      Internship {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-gray-600 font-medium group-hover:text-emerald-600 transition-colors">
                      {exp.issueDate} &rarr; {exp.finishDate}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-emerald-900 group-hover:text-emerald-700 transition-colors relative z-10">
                    {exp.companyname}
                  </h3>

                  <p className="text-base mb-4 text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors relative z-10">{exp.role}</p>

                  <p className="text-sm leading-relaxed mb-6 text-gray-700 group-hover:text-gray-800 transition-colors relative z-10">
                    {exp.WhatIDid}
                  </p>

                  <a
                    href={exp.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-300/50 hover:scale-105 relative z-10 group/btn"
                  >
                    View Certificate
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

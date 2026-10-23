"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, GitCommit } from "lucide-react";

export default function Experience() {
  const expdata = [
    {
      companyname: "Codec Technologies Pvt. Ltd.",
      role: "MERN Stack Developer Intern",
      issueDate: "Sep 2025",
      finishDate: "Oct 2025",
      WhatIDid:
        "Completed an AICTE and ICAC-approved MERN Stack internship through the National Internship Portal, building full-stack features across the frontend and backend. Worked on RESTful API design, database integration, and reusable UI components under real-world deadlines and code-review standards.",
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
    <section className="relative overflow-hidden bg-[#151614] px-6 py-24 text-[#f4f3ee]">
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse"></div>
      <div className="absolute -bottom-20 right-20 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-4 animate-slideInDown">
            Experience
          </h2>
          <p className="text-[#c5c9bf] text-lg">
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
                <div className="group rounded-2xl p-6 md:p-8 border border-[#2b2d28] bg-[#20221e] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-200/50">
                  {/* Top bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#d7f77a]">
                      Internship {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-gray-600 font-medium">
                      {exp.issueDate} &rarr; {exp.finishDate}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-[#f4f3ee] group-hover:text-emerald-700 transition-colors">
                    {exp.companyname}
                  </h3>

                  <p className="text-base mb-4 text-[#d7f77a] font-semibold">{exp.role}</p>

                  <p className="text-sm leading-relaxed mb-6 text-[#c5c9bf]">
                    {exp.WhatIDid}
                  </p>

                  <a
                    href={exp.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg border-2 border-emerald-600 text-[#d7f77a] hover:bg-emerald-600 hover:text-white transition-all duration-300 hover:shadow-md hover:shadow-emerald-200"
                  >
                    View Certificate
                    <ExternalLink size={16} />
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

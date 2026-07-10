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
    <section className="relative w-full py-24 px-6 bg-ink">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm mb-3 tracking-widest uppercase text-accent font-mono">
            $ git log --experience
            <span className="animate-blink text-accent">▍</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-cream font-display">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-10">
          <div className="animate-growLine origin-top absolute left-[7px] top-2 bottom-2 w-[2px] bg-line" />

          {expdata.map((exp, i) => (
            <div
              key={exp.companyname}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="relative mb-14 last:mb-0"
            >
              <div
                className={`${visible[i] ? "animate-riseIn" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Node */}
                <div className="animate-pulseDot absolute -left-10 top-2 w-4 h-4 rounded-full flex items-center justify-center bg-accent-deep border-2 border-accent">
                  <GitCommit size={9} className="text-accent" />
                </div>

                {/* Card */}
                <div className="group rounded-xl p-6 md:p-8 border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_12px_40px_-12px_rgba(52,211,153,0.25)]">
                  <p className="text-xs mb-2 tracking-wider uppercase text-muted font-mono">
                    internship // {String(i + 1).padStart(2, "0")} — {exp.issueDate} →{" "}
                    {exp.finishDate}
                  </p>

                  <h3 className="text-2xl font-bold mb-1 text-cream font-display">
                    {exp.companyname}
                  </h3>

                  <p className="text-base mb-4 text-accent">{exp.role}</p>

                  <p className="text-sm leading-relaxed mb-6 text-body font-sans">
                    {exp.WhatIDid}
                  </p>

                  
                   <a href={exp.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-accent text-accent font-mono transition-all duration-300 hover:bg-accent hover:text-ink hover:gap-2.5"
                  >
                    View certificate
                    <ExternalLink size={14} />
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
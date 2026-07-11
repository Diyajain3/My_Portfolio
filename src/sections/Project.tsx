"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";

export default function Project() {
  const projectdata = [
    {
      name: "SnapResume - Full Stack AI Resume Builder",
      descp:
        "An AI-powered resume builder that helps users create professional resumes with modern templates and AI-assisted content generation.",
      skills: "React.js, Node.js, Express.js, MongoDB, TailwindCSS, AI",
      img: "/projects/snapresume.png",
      github: "https://github.com/Diyajain3/SnapResume",
      LiveDemo: "https://snap-resume-mazt.onrender.com/",
    },
    {
      name: "TrickTask - Smart Task Manager",
      descp:
        "A task management application with authentication, task categorization, reminders, and productivity features.",
      skills: "React.js, Node.js, Express.js, MongoDB, TailwindCSS",
      img: "/projects/tricktask.png",
      github: "https://github.com/Diyajain3/TrickTask",
      LiveDemo: "https://tricktask.onrender.com/",
    },
    {
      name: "JustBid - Online Tender Application",
      descp:
        "A web application that simplifies online tender management with secure authentication and bidding workflow.",
      skills: "React.js, Node.js, Express.js, MongoDB",
      img: "/projects/justbid.png",
      github: "https://github.com/Diyajain3/JustBid",
      LiveDemo: "",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    if (current < projectdata.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevProject = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const project = projectdata[current];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-b from-white via-emerald-50 to-emerald-100 py-20 px-6 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse"></div>
      <div className="absolute -bottom-20 right-20 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-12 animate-slideInDown">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-emerald-100 p-8 md:p-12 animate-slideInUp">

          {/* Left */}
          <div className="space-y-4">

            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 leading-tight">
              {project.name}
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              {project.descp}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 pt-4">

              {project.skills.split(",").map((skill, index) => (
                <span
                  key={index}
                  className="group relative bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-800 px-4 py-2 rounded-full font-semibold text-sm border border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-md hover:shadow-emerald-200 cursor-default"
                >
                  {skill.trim()}
                </span>
              ))}

            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-6">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/50 hover:scale-105"
              >
                <Github size={20} className="transition-transform group-hover:scale-110" />
                GitHub
              </a>

              {project.LiveDemo && (
                <a
                  href={project.LiveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/50 hover:scale-105 overflow-hidden relative"
                >
                  <span className="absolute inset-0 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></span>
                  <ExternalLink size={20} className="transition-transform group-hover:scale-110" />
                  Live Demo
                </a>
              )}

            </div>

          </div>

          {/* Right */}
          <div className="flex justify-center group">

            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
              <img
                src={project.img}
                alt={project.name}
                className="w-full max-w-lg h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

          </div>

        </div>

        {/* Navigation */}

        <div className="flex justify-between items-center mt-8 gap-4 flex-wrap">

          <button
            onClick={prevProject}
            disabled={current === 0}
            className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 text-white flex items-center justify-center hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 disabled:from-gray-400 disabled:to-gray-300 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-emerald-400/50 hover:scale-110"
          >
            <ChevronLeft className="transition-transform group-hover:-translate-x-1 group-disabled:opacity-50" size={24} />
          </button>

          <p className="text-2xl font-bold text-emerald-700 bg-white/50 px-6 py-2 rounded-full">
            {current + 1} <span className="text-gray-500">/</span> {projectdata.length}
          </p>

          <button
            onClick={nextProject}
            disabled={current === projectdata.length - 1}
            className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 text-white flex items-center justify-center hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 disabled:from-gray-400 disabled:to-gray-300 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-emerald-400/50 hover:scale-110"
          >
            <ChevronRight className="transition-transform group-hover:translate-x-1 group-disabled:opacity-50" size={24} />
          </button>

        </div>

      </div>
    </section>
  );
}

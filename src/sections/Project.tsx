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
      className="min-h-screen bg-green-50 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-green-800 mb-16">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-xl p-10">

          {/* Left */}
          <div className="space-y-6">

            <h2 className="text-4xl font-bold text-green-900">
              {project.name}
            </h2>

            <p className="text-gray-600 leading-8">
              {project.descp}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">

              {project.skills.split(",").map((skill, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium text-sm"
                >
                  {skill.trim()}
                </span>
              ))}

            </div>

            {/* Links */}
            <div className="flex gap-5 pt-4">

              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
              >
                <Github size={20} />
                GitHub
              </a>

              {project.LiveDemo && (
                <a
                  href={project.LiveDemo}
                  target="_blank"
                  className="flex items-center gap-2 border-2 border-green-700 text-green-700 px-6 py-3 rounded-full hover:bg-green-700 hover:text-white transition"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}

            </div>

          </div>

          {/* Right */}
          <div className="flex justify-center">

            <img
              src={project.img}
              alt={project.name}
              className="rounded-2xl shadow-2xl w-full max-w-lg h-[350px] object-cover"
            />

          </div>

        </div>

        {/* Navigation */}

        <div className="flex justify-between items-center mt-10">

          <button
            onClick={prevProject}
            disabled={current === 0}
            className="w-14 h-14 rounded-full bg-green-700 text-white flex items-center justify-center hover:bg-green-800 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <ChevronLeft />
          </button>

          <p className="text-xl font-semibold text-green-700">
            {current + 1} / {projectdata.length}
          </p>

          <button
            onClick={nextProject}
            disabled={current === projectdata.length - 1}
            className="w-14 h-14 rounded-full bg-green-700 text-white flex items-center justify-center hover:bg-green-800 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <ChevronRight />
          </button>

        </div>

      </div>
    </section>
  );
}
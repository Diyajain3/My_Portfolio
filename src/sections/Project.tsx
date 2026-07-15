"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import SnapResume from "@/images/SnapResume.png";
import TrickTask from "@/images/TrickTask.png";
import JustBid from "@/images/JustBid.png";

type ThemeKey = "blue" | "pink" | "amber";

export default function Project() {
  const projectdata: {
    name: string;
    descp: string;
    skills: string;
    img: any;
    github: string;
    LiveDemo: string;
    theme: ThemeKey;
  }[] = [
    {
      name: "SnapResume - Full Stack AI Resume Builder",
      descp:
        "An AI-powered resume builder that helps users create professional resumes with modern templates and AI-assisted content generation.",
      skills: "React.js, Node.js, Express.js, MongoDB, TailwindCSS, AI",
      img: SnapResume,
      github: "https://github.com/Diyajain3/SnapResume",
      LiveDemo: "https://snap-resume-mazt.onrender.com/",
      theme: "blue",
    },
    {
      name: "TrickTask - Smart Task Manager",
      descp:
        "A task management application with authentication, task categorization, reminders, and productivity features.",
      skills: "React.js, Node.js, Express.js, MongoDB, TailwindCSS",
      img: TrickTask,
      github: "https://github.com/Diyajain3/TrickTask",
      LiveDemo: "https://tricktask.onrender.com/",
      theme: "pink",
    },
    {
      name: "JustBid - Online Tender Application",
      descp:
        "A web application that simplifies online tender management with secure authentication and bidding workflow.",
      skills: "React.js, Node.js, Express.js, MongoDB",
      img: JustBid,
      github: "https://github.com/Diyajain3/JustBid",
      LiveDemo: "",
      theme: "amber",
    },
  ];

  // Theme colors integrated throughout the card
const projectThemes: Record<ThemeKey, { 
  badge: string; 
  accent: string; 
  light: string; 
  border: string;
  imageBg: string;
}> = {
  blue: {
    badge: "bg-blue-100 text-blue-800 border-blue-300",
    accent: "from-blue-600 to-blue-500",
    light: "bg-blue-50/50",
    border: "border-blue-200",
    imageBg: "bg-gradient-to-br from-blue-100 to-blue-50"
  },
  pink: {
    badge: "bg-pink-100 text-pink-800 border-pink-300",
    accent: "from-pink-600 to-pink-500",
    light: "bg-pink-50/50",
    border: "border-pink-200",
    imageBg: "bg-gradient-to-br from-pink-100 to-pink-50"
  },
  amber: {
    badge: "bg-amber-100 text-amber-800 border-amber-300",
    accent: "from-amber-600 to-amber-500",
    light: "bg-amber-50/50",
    border: "border-amber-200",
    imageBg: "bg-gradient-to-br from-amber-100 to-amber-50"
  },
};

  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    if (current < projectdata.length - 1) setCurrent(current + 1);
  };

  const prevProject = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const project = projectdata[current];
  const theme = projectThemes[project.theme];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-b from-white via-emerald-50 to-emerald-100 py-20 px-6 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse"></div>
      <div
        className="absolute -bottom-20 right-20 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <motion.div className="max-w-6xl mx-auto relative z-10">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-12 font-outfit"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h1>

        <motion.div 
          className={`grid md:grid-cols-2 gap-8 items-center rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 transition-all duration-300 ${theme.light} bg-white/70 backdrop-blur-md border ${theme.border}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          key={current}
        >
          {/* Left Section */}
          <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants}>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${theme.badge} font-poppins`}>
                Project {current + 1} of {projectdata.length}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-outfit">
                {project.name}
              </h2>
            </motion.div>

            <motion.p className="text-gray-700 leading-relaxed text-lg font-poppins" variants={itemVariants}>
              {project.descp}
            </motion.p>

            {/* Skills */}
            <motion.div className="flex flex-wrap gap-3" variants={containerVariants} initial="hidden" animate="visible">
              {project.skills.split(",").map((skill) => (
                <motion.span
                  key={skill}
                  className="bg-white border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full font-semibold text-sm hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300 font-poppins"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill.trim()}
                </motion.span>
              ))}
            </motion.div>

            {/* Links */}
            <motion.div className="flex flex-wrap gap-4 pt-2" variants={containerVariants} initial="hidden" animate="visible">
              <motion.a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-2 bg-gradient-to-r ${theme.accent} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg font-poppins`}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} className="group-hover:rotate-12 transition-transform" />
                GitHub
              </motion.a>

              {project.LiveDemo && (
                <motion.a
                  href={project.LiveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2 border-2 bg-white ${theme.border} text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg font-poppins`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                  Live Demo
                </motion.a>
              )}
            </motion.div>
          </motion.div>

          {/* Right - Image Section */}
          <motion.div className="flex justify-center">
            <motion.div
              className={`relative aspect-square w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border-2 ${theme.border} ${theme.imageBg}`}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={project.img}
                alt={project.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          className="flex justify-between items-center mt-12 gap-4 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={prevProject}
            disabled={current === 0}
            className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 text-white flex items-center justify-center hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 disabled:from-gray-400 disabled:to-gray-300 disabled:cursor-not-allowed shadow-lg disabled:shadow-none font-poppins"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="transition-transform group-hover:-translate-x-1 group-disabled:opacity-50" size={24} />
          </motion.button>

          <motion.p 
            className="text-2xl font-bold text-emerald-700 bg-white/60 backdrop-blur px-6 py-2 rounded-full font-poppins"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.5 }}
            key={current}
          >
            {current + 1} <span className="text-gray-500">/</span> {projectdata.length}
          </motion.p>

          <motion.button
            onClick={nextProject}
            disabled={current === projectdata.length - 1}
            className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 text-white flex items-center justify-center hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 disabled:from-gray-400 disabled:to-gray-300 disabled:cursor-not-allowed shadow-lg disabled:shadow-none font-poppins"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="transition-transform group-hover:translate-x-1 group-disabled:opacity-50" size={24} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

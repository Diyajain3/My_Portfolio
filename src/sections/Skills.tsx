"use client";

import { motion } from "framer-motion";
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
  SiTypescript,
  SiBootstrap,
  SiPostgresql
} from "react-icons/si";

import { Code2 } from "lucide-react";
import type { IconType } from "react-icons";

type Skill = { name: string; icon: IconType; color: string };

const skills: Skill[] = [
  { name: "HTML5", icon: SiHtml5, color: "#E44D26" },
  { name: "CSS3", icon: SiCss, color: "#2965F1" },
  { name: "JavaScript", icon: SiJavascript, color: "#E6C200" },
  { name: "React.js", icon: SiReact, color: "#149ECA" },
  { name: "Next.js", icon: SiNextdotjs, color: "#111827" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#0EA5E9" },
  { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
  { name: "Express.js", icon: SiExpress, color: "#111827" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#111827" },
  { name: "VS Code", icon: Code2, color: "#3178C6" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  {
    name: "TypeScript", icon:SiTypescript, color: "#0EA5E9"
  },
  {
    name: "PostgresSQL", icon:SiPostgresql, color: "#272462"
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-gradient-to-b from-white to-emerald-50 py-16 px-6 overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute top-10 -left-24 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 bg-emerald-200/10 rounded-full blur-3xl" />

      <motion.div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            viewport={{ once: true }}
          >
            <Code2 size={18} className="text-emerald-600" />
            <span className="text-sm font-bold text-emerald-700 tracking-wide font-poppins">
              MY TECH STACK
            </span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-3 font-outfit"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Skills &amp; Technologies
          </motion.h2>
          <motion.p 
            className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-poppins"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Tools and technologies I use to build modern, responsive and scalable
            web applications.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {skills.map(({ name, icon: Icon, color }, index) => (
            <motion.div
              key={name}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-white border border-emerald-100 p-5 shadow-md hover:shadow-2xl transition-all duration-300 hover:border-emerald-400 relative overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 300 },
                },
              }}
              whileHover={{ y: -12, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Hover glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-emerald-400/0 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.15 }}
              ></motion.div>
              
              <motion.div
                className="flex items-center justify-center w-14 h-14 rounded-2xl relative z-10"
                style={{ backgroundColor: `${color}1A` }}
                whileHover={{ scale: 1.3, rotate: 12 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={30} style={{ color }} />
              </motion.div>
              <motion.span 
                className="text-sm font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors relative z-10 font-poppins"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1, color: "#047857" }}
              >
                {name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

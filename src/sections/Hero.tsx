"use client";

import Image from "next/image";
import { Github, Linkedin, FileText, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute -bottom-8 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-6 md:gap-12 items-center relative z-10 pt-24 pb-12 md:py-16 lg:py-0">

        {/* Left Section - Image */}
        <div className="flex justify-center order-2 md:order-1">
          <div className="photo-frame">
            <Image
              src="/diyaaa.jpeg"
              alt="Diya Jain"
              fill
              className="photo object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="space-y-3 md:space-y-4 order-1 md:order-2">

          <p className="text-emerald-600 text-base sm:text-lg font-semibold animate-slideInDown opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Hello, I&apos;m
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-emerald-900 animate-slideInDown opacity-0 leading-tight" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Diya Jain
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-emerald-600 font-bold animate-slideInDown opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Full Stack MERN Developer
          </h2>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg animate-slideInDown opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            I am a passionate Full Stack MERN Developer with experience in building scalable and responsive web applications. I enjoy solving Data Structures & Algorithms problems and continuously improving my development skills by building real-world projects.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4 pt-3 sm:pt-4 animate-slideInDown opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>

            <a
              href="https://github.com/Diyajain3"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-emerald-600 p-2 sm:p-3 rounded-full text-white hover:bg-emerald-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-400/50"
            >
              <Github size={18} className="sm:hidden" />
              <Github size={22} className="hidden sm:block" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-emerald-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/diya30jain/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-emerald-600 p-2 sm:p-3 rounded-full text-white hover:bg-emerald-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-400/50"
            >
              <Linkedin size={18} className="sm:hidden" />
              <Linkedin size={22} className="hidden sm:block" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-emerald-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">LinkedIn</span>
            </a>

            <a
              href="https://drive.google.com/file/d/18xJDvmKCIYnMFQ8UDu0qaTIf_3FFQTLQ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-emerald-600 p-2 sm:p-3 rounded-full text-white hover:bg-emerald-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-400/50"
            >
              <FileText size={18} className="sm:hidden" />
              <FileText size={22} className="hidden sm:block" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-emerald-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Resume</span>
            </a>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6 animate-slideInDown opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>

            <a
              href="https://drive.google.com/file/d/18xJDvmKCIYnMFQ8UDu0qaTIf_3FFQTLQ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-4 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/50 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Download Resume</span>
            </a>

            <a
              href="#contact"
              className="group relative border-2 border-emerald-600 text-emerald-600 px-4 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/50 hover:scale-105 flex items-center gap-2 overflow-hidden"
            >
              <span className="absolute inset-0 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <Mail size={16} className="sm:hidden relative z-10" />
              <Mail size={18} className="hidden sm:block relative z-10" />
              <span className="relative z-10">Contact Me</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

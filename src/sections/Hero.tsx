"use client";

import Image from "next/image";
import { Github, Linkedin, FileText, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // GSAP animations for background elements
    const bgElements = containerRef.current.querySelectorAll('[data-gsap]');
    bgElements.forEach((el, i) => {
      gsap.to(el, {
        y: 20 + i * 10,
        duration: 3 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 overflow-hidden"
    >
      {/* Animated background elements with GSAP */}
      <motion.div data-gsap className="absolute top-10 right-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 hover:opacity-20 transition-opacity duration-300"></motion.div>
      <motion.div data-gsap className="absolute -bottom-8 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 hover:opacity-20 transition-opacity duration-300"></motion.div>
      
      {/* Floating accent elements */}
      <motion.div data-gsap className="absolute top-32 left-1/4 w-40 h-40 bg-emerald-300/5 rounded-full blur-2xl"></motion.div>
      <motion.div data-gsap className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-emerald-400/5 rounded-full blur-2xl"></motion.div>

      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-6 md:gap-12 items-center relative z-10 pt-24 pb-12 md:py-16 lg:py-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Section - Image */}
        <motion.div className="flex justify-center order-2 md:order-1" variants={itemVariants}>
          <motion.div
            className="photo-frame"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/diyaaa.jpeg"
              alt="Diya Jain"
              fill
              className="photo object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Right Section - Content */}
        <motion.div className="space-y-3 md:space-y-4 order-1 md:order-2" variants={containerVariants}>
          <motion.p 
            className="text-emerald-600 text-base sm:text-lg font-semibold font-poppins"
            variants={itemVariants}
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-emerald-900 leading-tight font-outfit"
            variants={itemVariants}
          >
            Diya Jain
          </motion.h1>

          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl text-emerald-600 font-bold font-poppins"
            variants={itemVariants}
          >
            Full Stack MERN Developer
          </motion.h2>

          <motion.p 
            className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg font-poppins"
            variants={itemVariants}
          >
            I am a passionate Full Stack MERN Developer with experience in building scalable and responsive web applications. I enjoy solving Data Structures & Algorithms problems and continuously improving my development skills by building real-world projects.
          </motion.p>

          {/* Social Icons */}
          <motion.div 
            className="flex gap-3 sm:gap-4 pt-3 sm:pt-4 flex-wrap"
            variants={containerVariants}
          >
            {[
              { href: "https://github.com/Diyajain3", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/diya30jain/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://drive.google.com/file/d/18xJDvmKCIYnMFQ8UDu0qaTIf_3FFQTLQ/view", icon: FileText, label: "Resume" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-emerald-600 p-2 sm:p-3 rounded-full text-white hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/70"
                whileHover={{ scale: 1.25, y: -4 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <social.icon size={22} className="group-hover:animate-bounce" />
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-emerald-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6"
            variants={containerVariants}
          >
            <motion.a
              href="https://drive.google.com/file/d/18xJDvmKCIYnMFQ8UDu0qaTIf_3FFQTLQ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-4 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/50 overflow-hidden font-poppins"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <span className="relative z-10">Download Resume</span>
              <motion.div 
                className="absolute inset-0 bg-white/20 rounded-full blur-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              ></motion.div>
            </motion.a>

            <motion.a
              href="#contact"
              className="group relative border-2 border-emerald-600 text-emerald-600 px-4 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/50 flex items-center gap-2 overflow-hidden font-poppins"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <span className="absolute inset-0 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <Mail size={18} className="relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Contact Me</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

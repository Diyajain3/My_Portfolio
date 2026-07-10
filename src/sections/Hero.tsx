"use client";

import Image from "next/image";
import { Github, Linkedin, FileText, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-green-50 via-white to-green-100"
    >
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Section */}
      <div className="flex justify-center">
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

        {/* Right Section */}
        <div>

          <p className="text-green-700 text-lg font-semibold">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-extrabold mt-2 text-green-900">
            Diya Jain
          </h1>

          <h2 className="text-2xl text-green-600 font-semibold mt-4">
            Full Stack MERN Developer
          </h2>

          <p className="mt-6 text-gray-700 leading-8 text-lg">
            I am a passionate Full Stack MERN Developer with experience in
            building scalable and responsive web applications. I enjoy solving
            Data Structures & Algorithms problems and continuously improving my
            development skills by building real-world projects.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-8">

            <a
              href="https://github.com/Diyajain3"
              target="_blank"
              className="bg-green-700 p-3 rounded-full text-white hover:scale-110 hover:bg-green-600 transition"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/diya30jain/"
              target="_blank"
              className="bg-green-700 p-3 rounded-full text-white hover:scale-110 hover:bg-green-600 transition"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="https://drive.google.com/file/d/18xJDvmKCIYnMFQ8UDu0qaTIf_3FFQTLQ/view"
              target="_blank"
              className="bg-green-700 p-3 rounded-full text-white hover:scale-110 hover:bg-green-600 transition"
            >
              <FileText size={22} />
            </a>

          </div>

          {/* Buttons */}
          <div className="flex gap-5 mt-10">

            <a
              href="https://drive.google.com/file/d/18xJDvmKCIYnMFQ8UDu0qaTIf_3FFQTLQ/view"
              target="_blank"
              className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-600 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-full hover:bg-green-700 hover:text-white transition flex items-center gap-2"
            >
              <Mail size={18} />
              Contact Me
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
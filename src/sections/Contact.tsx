"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.current) return;

  emailjs
  .sendForm(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    form.current!,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  )
  .then(() => {
    alert("Message sent successfully!");
    form.current?.reset();
  })
  .catch((error) => {
    console.error(error);
    alert("Failed to send message.");
  });
};

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-white via-emerald-50 to-emerald-100 py-16 md:py-24 px-4 sm:px-6 md:px-16 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse hover:opacity-15 transition-opacity"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse hover:opacity-15 transition-opacity" style={{ animationDelay: '2s' }}></div>

      {/* Heading */}
      <motion.div 
        className="text-center mb-10 md:mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-6 font-outfit tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.p 
          className="mt-6 md:mt-8 text-gray-700 text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed font-poppins"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project in mind or just want to say hello? I&apos;d love to hear from you. Let&apos;s collaborate and create something amazing together!
        </motion.p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto relative z-10">
        {/* LEFT - Contact Info */}

        <div className="group rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200 shadow-xl hover:shadow-2xl hover:shadow-emerald-300/50 p-6 sm:p-8 md:p-10 transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-emerald-400 animate-slide-in-left">

          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-emerald-900 mb-6 sm:mb-8 md:mb-10 font-outfit tracking-tight">
            Diya Jain
          </h3>

          <div className="space-y-6 md:space-y-8">

            <a href="mailto:diyajain3003@gmail.com" className="group/item flex gap-3 sm:gap-4 md:gap-5 p-3 md:p-4 rounded-2xl hover:bg-emerald-50 transition-all duration-300">
              <div className="flex-shrink-0 bg-gradient-to-br from-emerald-600 to-emerald-500 p-3 sm:p-4 rounded-xl text-white group-hover/item:shadow-lg group-hover/item:shadow-emerald-400/50 group-hover/item:scale-110 transition-all duration-300">
                <Mail size={20} className="sm:hidden" />
                <Mail size={24} className="hidden sm:block" />
              </div>

              <div>
                <p className="text-sm text-gray-600 font-semibold">Email</p>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-emerald-900 group-hover/item:text-emerald-700 transition-colors break-all">
                  diyajain3003@gmail.com
                </p>
              </div>
            </a>

            <a href="tel:+917879963982" className="group/item flex gap-3 sm:gap-4 md:gap-5 p-3 md:p-4 rounded-2xl hover:bg-emerald-50 transition-all duration-300">
              <div className="flex-shrink-0 bg-gradient-to-br from-emerald-600 to-emerald-500 p-3 sm:p-4 rounded-xl text-white group-hover/item:shadow-lg group-hover/item:shadow-emerald-400/50 group-hover/item:scale-110 transition-all duration-300">
                <Phone size={20} className="sm:hidden" />
                <Phone size={24} className="hidden sm:block" />
              </div>

              <div>
                <p className="text-sm text-gray-600 font-semibold">Phone</p>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-emerald-900 group-hover/item:text-emerald-700 transition-colors">
                  +91 7879963982
                </p>
              </div>
            </a>

            <div className="group/item flex gap-3 sm:gap-4 md:gap-5 p-3 md:p-4 rounded-2xl hover:bg-emerald-50 transition-all duration-300">
              <div className="flex-shrink-0 bg-gradient-to-br from-emerald-600 to-emerald-500 p-3 sm:p-4 rounded-xl text-white group-hover/item:shadow-lg group-hover/item:shadow-emerald-400/50 group-hover/item:scale-110 transition-all duration-300">
                <MapPin size={20} className="sm:hidden" />
                <MapPin size={24} className="hidden sm:block" />
              </div>

              <div>
                <p className="text-sm text-gray-600 font-semibold">Location</p>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-emerald-900">
                  Greater Noida, Uttar Pradesh
                </p>
              </div>
            </div>
          </div>

          {/* Social */}

          <div className="flex gap-4 mt-12 pt-8 border-t border-emerald-100">

            <a
              href="https://github.com/Diyajain3"
              target="_blank"
              rel="noopener noreferrer"
              className="group/social bg-gradient-to-br from-emerald-600 to-emerald-500 p-4 rounded-full text-white hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-emerald-400/50"
            >
              <Github size={20} className="group-hover/social:rotate-12 transition-transform duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/diya30jain/"
              target="_blank"
              rel="noopener noreferrer"
              className="group/social bg-gradient-to-br from-emerald-600 to-emerald-500 p-4 rounded-full text-white hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-emerald-400/50"
            >
              <Linkedin size={20} className="group-hover/social:rotate-12 transition-transform duration-300" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group/social bg-gradient-to-br from-emerald-600 to-emerald-500 p-4 rounded-full text-white hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-emerald-400/50"
            >
              <Instagram size={20} className="group-hover/social:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* RIGHT - Contact Form */}

      <form
  ref={form}
  onSubmit={sendEmail}
  className="group rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200 shadow-xl hover:shadow-2xl hover:shadow-emerald-300/50 p-6 sm:p-10 space-y-6 transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-emerald-400 animate-slide-in-right"
>

          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-2">Your Name</label>
            <input
  type="text"
  name="name"
  placeholder="John Doe"
  required
              className="w-full rounded-xl border-2 border-emerald-200 p-4 outline-none focus:border-emerald-500 focus:bg-emerald-50 transition-all duration-300 font-medium hover:border-emerald-300 focus:shadow-lg focus:shadow-emerald-200/50"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-2">Email Address</label>
            <input
  type="email"
  name="email"
  placeholder="your@email.com"
  required
              className="w-full rounded-xl border-2 border-emerald-200 p-4 outline-none focus:border-emerald-500 focus:bg-emerald-50 transition-all duration-300 font-medium hover:border-emerald-300 focus:shadow-lg focus:shadow-emerald-200/50"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-2">Subject</label>
           <input
  type="text"
  name="title"
  placeholder="What is this about?"
  required
              className="w-full rounded-xl border-2 border-emerald-200 p-4 outline-none focus:border-emerald-500 focus:bg-emerald-50 transition-all duration-300 font-medium hover:border-emerald-300 focus:shadow-lg focus:shadow-emerald-200/50"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-2">Message</label>
            <textarea
  name="message"
  rows={5}
  required
  placeholder="Tell me about your project..."
              className="w-full rounded-xl border-2 border-emerald-200 p-4 outline-none focus:border-emerald-500 focus:bg-emerald-50 transition-all duration-300 resize-none font-medium hover:border-emerald-300 focus:shadow-lg focus:shadow-emerald-200/50"
            />
          </div>

          <button
            type="submit"
            className="group/btn w-full rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 py-4 text-white font-bold flex justify-center items-center gap-3 hover:from-emerald-700 hover:via-emerald-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/60 active:scale-95 hover:-translate-y-1"
          >
            Send Message

            <Send
              size={20}
              className="group-hover/btn:translate-x-2 group-hover/btn:animate-bounce transition-transform duration-300"
            />
          </button>
        </form>
      </div>

      <p className="text-center text-gray-700 mt-12 text-lg font-medium relative z-10">
        Thank you for taking the time to explore my portfolio. Looking forward to connecting with you!
      </p>
    </section>
  );
}

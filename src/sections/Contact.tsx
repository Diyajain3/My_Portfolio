"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
      className="relative overflow-hidden bg-[#0d0e0c] px-4 py-24 text-[#f4f3ee] sm:px-6 md:px-16"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Heading */}
      <div className="text-center mb-10 md:mb-12 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#d7f77a] mb-4 animate-slideInDown">
          Get In Touch
        </h2>

        <p className="mt-4 md:mt-6 text-[#c5c9bf] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Have a project in mind or just want to say hello? I&apos;d love to hear from you. Let&apos;s collaborate and create something amazing together!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto relative z-10">
        {/* LEFT - Contact Info */}

        <div className="group rounded-3xl bg-[#20221e] border border-[#2b2d28] shadow-xl p-6 sm:p-8 md:p-10">

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f4f3ee] mb-6 sm:mb-8 md:mb-10">
            Diya Jain
          </h3>

          <div className="space-y-6 md:space-y-8">

            <a href="mailto:diyajain3003@gmail.com" className="group/item flex gap-3 sm:gap-4 md:gap-5 p-3 md:p-4 rounded-2xl hover:bg-[#252d24] transition-colors duration-300">
              <div className="flex-shrink-0 bg-gradient-to-br from-emerald-600 to-emerald-500 p-3 sm:p-4 rounded-xl text-white group-hover/item:shadow-lg group-hover/item:shadow-emerald-400/50 group-hover/item:scale-110 transition-all duration-300">
                <Mail size={20} className="sm:hidden" />
                <Mail size={24} className="hidden sm:block" />
              </div>

              <div>
                <p className="text-sm text-[#b8bdb2] font-semibold">Email</p>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-[#f4f3ee] group-hover/item:text-[#d7f77a] transition-colors break-all">
                  diyajain3003@gmail.com
                </p>
              </div>
            </a>

            <a href="tel:+917879963982" className="group/item flex gap-3 sm:gap-4 md:gap-5 p-3 md:p-4 rounded-2xl hover:bg-[#252d24] transition-colors duration-300">
              <div className="flex-shrink-0 bg-gradient-to-br from-emerald-600 to-emerald-500 p-3 sm:p-4 rounded-xl text-white group-hover/item:shadow-lg group-hover/item:shadow-emerald-400/50 group-hover/item:scale-110 transition-all duration-300">
                <Phone size={20} className="sm:hidden" />
                <Phone size={24} className="hidden sm:block" />
              </div>

              <div>
                <p className="text-sm text-[#b8bdb2] font-semibold">Phone</p>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-[#f4f3ee] group-hover/item:text-[#d7f77a] transition-colors">
                  +91 7879963982
                </p>
              </div>
            </a>

            <div className="group/item flex gap-3 sm:gap-4 md:gap-5 p-3 md:p-4 rounded-2xl hover:bg-[#252d24] transition-colors duration-300">
              <div className="flex-shrink-0 bg-gradient-to-br from-emerald-600 to-emerald-500 p-3 sm:p-4 rounded-xl text-white group-hover/item:shadow-lg group-hover/item:shadow-emerald-400/50 group-hover/item:scale-110 transition-all duration-300">
                <MapPin size={20} className="sm:hidden" />
                <MapPin size={24} className="hidden sm:block" />
              </div>

              <div>
                <p className="text-sm text-[#b8bdb2] font-semibold">Location</p>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-[#f4f3ee]">
                  Greater Noida, Uttar Pradesh
                </p>
              </div>
            </div>
          </div>

          {/* Social */}

          <div className="flex gap-4 mt-12 pt-8 border-t border-[#3b4634]">

            <a
              href="https://github.com/Diyajain3"
              target="_blank"
              rel="noopener noreferrer"
              className="group/social bg-gradient-to-br from-emerald-600 to-emerald-500 p-4 rounded-full text-white transition-colors duration-300"
            >
              <Github size={20} className="group-hover/social:rotate-12 transition-transform duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/diya30jain/"
              target="_blank"
              rel="noopener noreferrer"
              className="group/social bg-gradient-to-br from-emerald-600 to-emerald-500 p-4 rounded-full text-white transition-colors duration-300"
            >
              <Linkedin size={20} className="group-hover/social:rotate-12 transition-transform duration-300" />
            </a>

            <a
              href="https://www.instagram.com/diya.3003/"
              target="_blank"
              rel="noopener noreferrer"
              className="group/social bg-gradient-to-br from-emerald-600 to-emerald-500 p-4 rounded-full text-white transition-colors duration-300"
            >
              <Instagram size={20} className="group-hover/social:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* RIGHT - Contact Form */}

      <form
  ref={form}
  onSubmit={sendEmail}
  className="group rounded-3xl bg-[#20221e] border border-[#2b2d28] shadow-xl p-6 sm:p-10 space-y-6"
>

          <div>
            <label className="block text-sm font-semibold text-[#f4f3ee] mb-2">Your Name</label>
            <input
  type="text"
  name="name"
  placeholder="John Doe"
  required
              className="w-full rounded-xl border border-[#3b4634] bg-[#151814] p-4 text-[#f4f3ee] outline-none placeholder:text-[#899184] focus:border-[#d7f77a] focus:bg-[#1b2118] transition-colors duration-300 font-medium"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#f4f3ee] mb-2">Email Address</label>
            <input
  type="email"
  name="email"
  placeholder="your@email.com"
  required
              className="w-full rounded-xl border border-[#3b4634] bg-[#151814] p-4 text-[#f4f3ee] outline-none placeholder:text-[#899184] focus:border-[#d7f77a] focus:bg-[#1b2118] transition-colors duration-300 font-medium"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#f4f3ee] mb-2">Subject</label>
           <input
  type="text"
  name="title"
  placeholder="What is this about?"
  required
              className="w-full rounded-xl border border-[#3b4634] bg-[#151814] p-4 text-[#f4f3ee] outline-none placeholder:text-[#899184] focus:border-[#d7f77a] focus:bg-[#1b2118] transition-colors duration-300 font-medium"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#f4f3ee] mb-2">Message</label>
            <textarea
  name="message"
  rows={5}
  required
  placeholder="Tell me about your project..."
              className="w-full rounded-xl border-2 border-emerald-200 p-4 outline-none focus:border-emerald-500 focus:bg-emerald-50 transition-all duration-300 resize-none font-medium"
            />
          </div>

          <button
            type="submit"
            className="group/btn w-full rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 py-4 text-white font-bold flex justify-center items-center gap-3 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500 transition-colors duration-300 active:opacity-90"
          >
            Send Message

            <Send
              size={20}
              className="group-hover/btn:translate-x-1 group-hover/btn:translate-y-0 transition-transform duration-300"
            />
          </button>
        </form>
      </div>

      <p className="text-center text-[#c5c9bf] mt-12 text-lg font-medium relative z-10">
        Thank you for taking the time to explore my portfolio. Looking forward to connecting with you!
      </p>
    </section>
  );
}

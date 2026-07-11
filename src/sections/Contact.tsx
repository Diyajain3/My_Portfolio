"use client";

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
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-white via-emerald-50 to-emerald-100 py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-4 animate-slideInDown">
          Get In Touch
        </h2>

        <p className="mt-6 text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          Have a project in mind or just want to say hello? I&apos;d love to hear from you. Let&apos;s collaborate and create something amazing together!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto relative z-10">
        {/* LEFT - Contact Info */}

        <div className="group rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200 shadow-xl hover:shadow-2xl hover:shadow-emerald-200/50 p-10 transition-all duration-500 hover:-translate-y-2">

          <h3 className="text-4xl font-bold text-emerald-900 mb-10">
            Diya Jain
          </h3>

          <div className="space-y-8">

            <a href="mailto:diyajain3003@gmail.com" className="group/item flex gap-5 p-4 rounded-2xl hover:bg-emerald-50 transition-all duration-300">
              <div className="flex-shrink-0 bg-gradient-to-br from-emerald-600 to-emerald-500 p-4 rounded-xl text-white group-hover/item:shadow-lg group-hover/item:shadow-emerald-400/50 group-hover/item:scale-110 transition-all duration-300">
                <Mail size={24} />
              </div>

              <div>
                <p className="text-sm text-gray-600 font-semibold">Email</p>
                <p className="text-lg font-semibold text-emerald-900 group-hover/item:text-emerald-700 transition-colors">
                  diyajain3003@gmail.com
                </p>
              </div>
            </a>

            <a href="tel:+917879963982" className="group/item flex gap-5 p-4 rounded-2xl hover:bg-emerald-50 transition-all duration-300">
              <div className="flex-shrink-0 bg-gradient-to-br from-emerald-600 to-emerald-500 p-4 rounded-xl text-white group-hover/item:shadow-lg group-hover/item:shadow-emerald-400/50 group-hover/item:scale-110 transition-all duration-300">
                <Phone size={24} />
              </div>

              <div>
                <p className="text-sm text-gray-600 font-semibold">Phone</p>
                <p className="text-lg font-semibold text-emerald-900 group-hover/item:text-emerald-700 transition-colors">
                  +91 7879963982
                </p>
              </div>
            </a>

            <div className="group/item flex gap-5 p-4 rounded-2xl hover:bg-emerald-50 transition-all duration-300">
              <div className="flex-shrink-0 bg-gradient-to-br from-emerald-600 to-emerald-500 p-4 rounded-xl text-white group-hover/item:shadow-lg group-hover/item:shadow-emerald-400/50 group-hover/item:scale-110 transition-all duration-300">
                <MapPin size={24} />
              </div>

              <div>
                <p className="text-sm text-gray-600 font-semibold">Location</p>
                <p className="text-lg font-semibold text-emerald-900">
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

        <form className="group rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200 shadow-xl hover:shadow-2xl hover:shadow-emerald-200/50 p-10 space-y-6 transition-all duration-500 hover:-translate-y-2">

          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-2">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-xl border-2 border-emerald-200 p-4 outline-none focus:border-emerald-500 focus:bg-emerald-50 transition-all duration-300 font-medium"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-xl border-2 border-emerald-200 p-4 outline-none focus:border-emerald-500 focus:bg-emerald-50 transition-all duration-300 font-medium"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-2">Subject</label>
            <input
              type="text"
              placeholder="What is this about?"
              className="w-full rounded-xl border-2 border-emerald-200 p-4 outline-none focus:border-emerald-500 focus:bg-emerald-50 transition-all duration-300 font-medium"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-2">Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full rounded-xl border-2 border-emerald-200 p-4 outline-none focus:border-emerald-500 focus:bg-emerald-50 transition-all duration-300 resize-none font-medium"
            />
          </div>

          <button
            type="submit"
            className="group/btn w-full rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 py-4 text-white font-bold flex justify-center items-center gap-3 hover:from-emerald-700 hover:via-emerald-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-400/50 active:scale-95"
          >
            Send Message

            <Send
              size={20}
              className="group-hover/btn:translate-x-1 group-hover/btn:translate-y-0 transition-transform duration-300"
            />
          </button>
        </form>
      </div>

      <p className="text-center text-gray-700 mt-16 text-lg font-medium relative z-10">
        Thank you for taking the time to explore my portfolio. Looking forward to connecting with you!
      </p>
    </section>
  );
}

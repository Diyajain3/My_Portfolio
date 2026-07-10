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
      className="bg-gradient-to-b from-green-50 via-white to-green-100 py-24 px-6 md:px-16"
    >
      {/* Heading */}

      <div className="text-center mb-16">
        <h2 className="text-5xl font-black bg-gradient-to-r from-green-700 via-green-500 to-emerald-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? I'd love to hear
          from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* LEFT */}

        <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-green-200 shadow-xl p-10">

          <h3 className="text-3xl font-bold text-green-700 mb-8">
            Diya Jain
          </h3>

          <div className="space-y-7">

            <div className="flex gap-5">
              <div className="bg-green-500 p-3 rounded-xl text-white">
                <Mail />
              </div>

              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-semibold">
                  diyajain3003@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="bg-green-500 p-3 rounded-xl text-white">
                <Phone />
              </div>

              <div>
                <p className="text-gray-500">Phone</p>
                <p className="font-semibold">
                  +91 7879963982
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="bg-green-500 p-3 rounded-xl text-white">
                <MapPin />
              </div>

              <div>
                <p className="text-gray-500">Location</p>
                <p className="font-semibold">
                  Greater Noida, Uttar Pradesh
                </p>
              </div>
            </div>
          </div>

          {/* Social */}

          <div className="flex gap-5 mt-10">

            <a
              href="#"
              className="bg-green-500 p-3 rounded-full text-white hover:scale-110 hover:bg-green-600 duration-300"
            >
              <Github />
            </a>

            <a
              href="#"
              className="bg-green-500 p-3 rounded-full text-white hover:scale-110 hover:bg-green-600 duration-300"
            >
              <Linkedin />
            </a>

            <a
              href="#"
              className="bg-green-500 p-3 rounded-full text-white hover:scale-110 hover:bg-green-600 duration-300"
            >
              <Instagram />
            </a>
          </div>
        </div>

        {/* RIGHT */}

        <form className="rounded-3xl bg-white/70 backdrop-blur-xl border border-green-200 shadow-xl p-10 space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border border-green-200 p-4 outline-none focus:border-green-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-green-200 p-4 outline-none focus:border-green-500"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-xl border border-green-200 p-4 outline-none focus:border-green-500"
          />

          <textarea
            rows={6}
            placeholder="Your Message..."
            className="w-full rounded-xl border border-green-200 p-4 outline-none focus:border-green-500 resize-none"
          />

          <button
            className="group w-full rounded-xl bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 py-4 text-white font-semibold flex justify-center items-center gap-3 hover:scale-[1.02] duration-300 shadow-lg"
          >
            Send Message

            <Send
              size={18}
              className="group-hover:translate-x-1 duration-300"
            />
          </button>
        </form>
      </div>

      <p className="text-center text-gray-600 mt-20 text-lg">
        Thank you for taking the time to explore my portfolio. Looking forward
        to connecting with you! 💚
      </p>
    </section>
  );
}
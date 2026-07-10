"use client";

const footLinks = [
  { name: "Home", href: "#hero" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-950 via-green-900 to-green-800 text-white mt-16">
      
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="text-center">
          
          {/* Glow Name */}
          <h1 className="text-3xl font-bold relative inline-block">
            Diya's Portfolio
            <span className="absolute -inset-2 blur-2xl opacity-40 bg-green-400 rounded-full -z-10"></span>
          </h1>

          <p className="text-green-100 mt-3">
            Professional Full Stack Developer
          </p>
          <p className="text-green-200 mt-1">
            Building modern web experiences with love 💚
          </p>

          {/* Links */}
          <ul className="flex flex-wrap justify-center gap-6 mt-8">
            {footLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-green-100 hover:text-white transition relative group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-300 group-hover:w-full transition-all"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="my-8 border-t border-green-700/50"></div>

          {/* Bottom */}
          <p className="text-green-200 text-sm">
            Made with <span className="text-green-300">❤️</span> by Diya
          </p>

        </div>
      </div>
    </footer>
  );
}
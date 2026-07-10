"use client";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Education", href: "#education" },
  {name:"Services",href:"#services"},
  { name: "Profiles", href: "#profile" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-green-100 shadow-sm">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-16">
          
          {/* Logo with glow */}
          <h1 className="text-2xl font-extrabold text-green-800 relative">
            Diya's Portfolio
            <span className="absolute -inset-1 blur-xl opacity-40 bg-green-400 rounded-full -z-10"></span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-green-900 font-medium hover:text-green-500 transition relative group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Resume button */}
          <button className="hidden md:block bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-600 transition shadow-md hover:shadow-green-300">
            Resume
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden text-green-800 text-2xl">
            ☰
          </button>

        </div>
      </div>
    </nav>
  );
}
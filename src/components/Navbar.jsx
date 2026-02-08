import { useState } from "react";
import { Menu, X } from "lucide-react"; // install: npm i lucide-react

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-lg bg-white/70 border-b shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wide cursor-pointer">
          Ananya S Bharadwaj
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-700 font-medium hover:text-blue-600 transition duration-300 group"
            >
              {link.name}

              {/* animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/Ananya_Resume.pdf"
            download
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md px-8 pb-6 flex flex-col space-y-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/Ananya_Resume.pdf"
            download
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}




import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 pt-24">

      <div className="max-w-4xl text-center px-6">

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Hello */}
          <p className="text-gray-500 text-lg mb-3">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Ananya S Bharadwaj
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            AI/ML Engineer • Web Developer • Data Analyst
          </h2>

          {/* Description */}
          <p className="text-gray-500 max-w-2xl mx-auto mb-10">
            Building intelligent AI/ML solutions, scalable web apps,
and data-driven systems for real-world impact.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="#about"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              About Me
            </a>

            <a
              href="#skills"
              className="px-6 py-3 rounded-xl bg-white border hover:bg-gray-100 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-white border hover:bg-gray-100 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-white border hover:bg-gray-100 transition"
            >
              Contact
            </a>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-6 mt-10">
            <a href="https://github.com/" target="_blank">
              <Github className="hover:text-blue-600 transition" />
            </a>
            <a href="https://linkedin.com/" target="_blank">
              <Linkedin className="hover:text-blue-600 transition" />
            </a>
            <a href="mailto:youremail@gmail.com">
              <Mail className="hover:text-blue-600 transition" />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}



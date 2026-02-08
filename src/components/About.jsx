import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Award,
  Target
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-50 overflow-hidden"
    >

      {/* Background glow */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-300 blur-3xl rounded-full opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-400 blur-3xl rounded-full opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ===== Title ===== */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About <span className="text-blue-600">Me</span>
        </motion.h2>


        {/* ================= TOP (Image + Bio) ================= */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-20">

          {/* Photo (ONLY here as you requested) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src="/profile.jpg"
              alt="Ananya S Bharadwaj"
              className="w-72 md:w-96 rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I'm{" "}
              <span className="font-semibold text-blue-600">
                Ananya S Bharadwaj
              </span>
              , a Final Year Computer Science Engineering student specializing in
              <span className="font-semibold">
                {" "}Artificial Intelligence & Machine Learning
              </span>.
            </p>

            <p className="text-gray-500">
              Passionate about building intelligent AI systems, modern web apps,
              and scalable data solutions that solve real-world problems. I enjoy
              turning ideas into impactful technology.
            </p>
          </motion.div>
        </div>


        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Education */}
<motion.div
  whileHover={{ y: -8 }}
  className="p-7 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg"
>
  <GraduationCap className="text-blue-600 mb-4" size={32} />
  <h3 className="font-semibold mb-3">Education</h3>

  <p className="text-gray-600 text-sm">
    <span className="font-semibold">B.E – CSE (AI & ML)</span> <br />
    Don Bosco Institute of Technology <br />
    2022 – 2026 <br />
    <span className="font-semibold">CGPA: 8.35</span>
  </p>
</motion.div>



          {/* Internships */}
<motion.div
  whileHover={{ y: -8 }}
  className="p-7 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg"
>
  <Briefcase className="text-blue-600 mb-4" size={32} />
  <h3 className="font-semibold mb-3">Internships</h3>

  <ul className="text-gray-600 text-sm space-y-2">

    <li>
      <b>Adverk Technologies</b><br />
      AI Intern • Oct 2023 – Nov 2023
    </li>

    <li>
      <b>Coincent (Remote)</b><br />
      Virtual Engineering Intern • Apr 2024
    </li>

    <li>
      <b>Deloitte Australia (Forage)</b><br />
      Data Analytics & Technology Intern • Jul 2025
    </li>

    <li>
      <b>SRIT</b><br />
      Power BI & GenAI Intern • Feb 2026 – Apr 2026
    </li>

  </ul>
</motion.div>



          {/* Certifications */}
<motion.div
  whileHover={{ y: -8 }}
  className="p-7 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg"
>
  <Award className="text-blue-600 mb-4" size={32} />
  <h3 className="font-semibold mb-3">Certifications</h3>

  <ul className="text-gray-600 text-sm space-y-2">

    <li>
      • <span className="font-semibold">GeeksforGeeks</span> – Python & AI/ML
    </li>

    <li>
      • <span className="font-semibold">TNS India Foundation</span> – Certified in AI & ML
    </li>

    <li>
      • <span className="font-semibold">EnglishBolo</span> – Level 4 (CEFR B2)
    </li>

  </ul>
</motion.div>

          {/* Achievements */}
          {/* Achievements */}
<motion.div
  whileHover={{ y: -8 }}
  className="p-7 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg"
>
  <Target className="text-blue-600 mb-4" size={32} />
  <h3 className="font-semibold mb-3">Achievements</h3>

  <ul className="text-gray-600 text-sm space-y-3">

    <li>
      🏆 <b>Regional Winner – 5G Innovation Hackathon 2025</b><br />
      Department of Telecommunications, Govt. of India
    </li>

    <li>
      ⭐ <b>Advanced to Round 2 – YUKTI National Innovation Repository</b><br />
      Presented project at MS Ramaiah University (Dec 2025), an AICTE national-level initiative
    </li>

  </ul>
</motion.div>


        </div>
      </div>
    </section>
  );
}


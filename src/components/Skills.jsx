import { motion } from "framer-motion";
import { Code, Brain, Globe, BarChart3 } from "lucide-react";

export default function Skills() {

const categories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "SQL"]
  },

  {
    title: "Machine Learning",
    icon: Brain,
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Feature Engineering",
      "Scikit-learn",
      "Pandas"
    ]
  },

  {
    title: "Deep Learning & GenAI",
    icon: Brain,
    skills: [
      "TensorFlow",
      "OpenCV",
      "Generative AI"
    ]
  },

  {
    title: "Web & Deployment",
    icon: Globe,
    skills: [
      "Flask",
      "React",
      "MongoDB",
      "HTML",
      "CSS",
      "JavaScript"
    ]
  },

  {
    title: "Data Analytics & BI",
    icon: BarChart3,
    skills: [
      "Power BI",
      "Tableau",
      "Excel",
      "Matplotlib",
      "Data Analysis"
    ]
  }
];


  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden"
    >

      {/* Background glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-400 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ===== Title ===== */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-blue-600">Skills</span>
        </motion.h2>


        {/* ===== Skill Cards ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-2xl rounded-2xl p-8 transition"
              >

                {/* Icon */}
                <Icon className="text-blue-600 mb-4" size={32} />

                {/* Title */}
                <h3 className="text-lg font-semibold mb-5">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-gray-700 hover:scale-105 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function Projects() {

  const projects = [
    {
      title: "Smart Voting System",
      description:
        "Face recognition based secure voting platform using OpenCV and Machine Learning for fraud-free digital elections.",
      tech: ["Python", "OpenCV", "ML"],
      github:
        "https://github.com/Ananya-dot-gif/Smart-Voting-System-through-Facial-Recognition",
      image:
        "https://raw.githubusercontent.com/Ananya-dot-gif/Smart-Voting-System-through-Facial-Recognition/main/images/face-authentication.png",
    },

    {
      title: "Movie Recommendation System",
      description:
        "Personalized movie suggestions using cosine similarity and collaborative filtering techniques.",
      tech: ["Python", "Pandas", "ML"],
      github:
        "https://github.com/Ananya-dot-gif/Movie-Recommendation-System",
      image:
        "https://raw.githubusercontent.com/Ananya-dot-gif/Movie-Recommendation-System/main/images/recommendation-results.png",
    },

    {
      title: "Heart Disease Prediction",
      description:
        "Classification models to predict heart disease risk using healthcare datasets and ML algorithms.",
      tech: ["Python", "Scikit-Learn", "Data Analysis"],
      github:
        "https://github.com/Ananya-dot-gif/Heart_Disease-prediction",
      image:
        "https://raw.githubusercontent.com/Ananya-dot-gif/Heart_Disease-prediction/main/images/prediction-output.png",
    },

    {
      title: "Manufacturing Output Prediction",
      description:
        "Linear regression model to predict equipment performance and optimize production efficiency.",
      tech: ["Python", "Regression", "Analytics"],
      github:
        "https://github.com/Ananya-dot-gif/Manufacturing_Linear-Regression",
      image:
        "https://raw.githubusercontent.com/Ananya-dot-gif/Manufacturing_Linear-Regression/main/images/regression-graph.png",
    },

    {
      title: "Memory Card Matching Game",
      description:
        "Interactive web-based memory game built using Flask with dynamic UI and backend logic.",
      tech: ["Flask", "HTML", "CSS", "JavaScript"],
      github:
        "https://github.com/Ananya-dot-gif/Memory_game",
      image:
        "https://raw.githubusercontent.com/Ananya-dot-gif/Memory_game/main/images/game-board.png",
    },
  ];


  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden"
    >

      {/* Background glow shapes */}
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
          My <span className="text-blue-600">Projects</span>
        </motion.h2>


        {/* ===== Project Grid ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col transition"
            >

              {/* ===== Image with zoom effect ===== */}
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>


              {/* ===== Content ===== */}
              <div className="p-6 flex flex-col flex-grow">

                {/* Title */}
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-blue-100 to-indigo-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-medium hover:scale-105 transition"
                >
                  <Github size={18} />
                  View Code
                </a>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}


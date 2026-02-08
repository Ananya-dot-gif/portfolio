import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />

      {/* EmailJS Contact Form */}
      <Contact />

    </div>
  );
}






import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Contact from "./components/Contact";

import languages from "./data/languages";
import skills from "./data/skills";
import projects from "./data/projects";
import experiences from "./data/experiences";
import education from "./data/education";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About languages={languages} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Experiences experiences={experiences} />
      <Education education={education} />
      <Contact />
    </>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import languages from "./data/languages";
import skills from "./data/skills";
import projects from "./data/projects";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About languages={languages} />
      <Skills skills={skills} />
      <Projects projects={projects} />
    </>
  );
}

export default App;

import React from "react";

import Navbar from "./components/Navbar.tsx";
import Typewriter from "./components/Typewriter.tsx";
import About from "./components/About.tsx";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import Skills from "./components/Skills.tsx";
import "./styles/App.scss";

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Typewriter text="Aneesh Kumar" />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

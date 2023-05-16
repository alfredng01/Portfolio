import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {
  return (
    <menu>
      <Navbar></Navbar>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </menu>
  );
}

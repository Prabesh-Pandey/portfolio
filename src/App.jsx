import React from "react";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import CurrentlyLearning from "./components/CurrentlyLearning";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <CustomCursor />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
  <CurrentlyLearning />
      <Contact />
      <Footer />
    </>
  );
}

import React from "react";
import TargetCursor from "./components/TargetCursor";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
// import CurrentlyLearning from "./components/CurrentlyLearning";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);
  return (
    <>
      {!isTouch && <TargetCursor />}
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

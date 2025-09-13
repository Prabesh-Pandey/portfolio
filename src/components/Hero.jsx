import React, { useEffect, useRef, useState } from "react";

export default function Hero() {
  const fullText = "Hello, I’m Prabesh Pandey";
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [boxExpanded, setBoxExpanded] = useState(false);
  const [direction, setDirection] = useState('forward');
  const indexRef = useRef(0);
  const directionRef = useRef('forward');
  const timeoutRef = useRef(null);

  useEffect(() => {
    const delay = 120;
    const pauseAfterType = 1200;
    const pauseAfterErase = 500;
    setTypedText("");
    setIsTyping(true);
    setBoxExpanded(false);
    setDirection('forward');
    indexRef.current = 0;
    directionRef.current = 'forward';

    function tick() {
      let i = indexRef.current;
      let dir = directionRef.current;
      if (dir === 'forward') {
        if (i < fullText.length) {
          setTypedText(fullText.slice(0, i + 1));
          indexRef.current = i + 1;
          timeoutRef.current = setTimeout(tick, delay);
        } else if (i === fullText.length) {
          setTypedText(fullText); // Ensure full text is visible for the pause
          setBoxExpanded(true);
          setIsTyping(false);
          timeoutRef.current = setTimeout(() => {
            directionRef.current = 'backward';
            setDirection('backward');
            setIsTyping(true);
            timeoutRef.current = setTimeout(tick, delay);
          }, pauseAfterType);
        }
      } else {
        if (i > 0) {
          setTypedText(fullText.slice(0, i - 1));
          indexRef.current = i - 1;
          timeoutRef.current = setTimeout(tick, delay);
        } else if (i === 0) {
          setTypedText(""); // Ensure empty text is visible for the pause
          setBoxExpanded(false);
          setIsTyping(false);
          timeoutRef.current = setTimeout(() => {
            directionRef.current = 'forward';
            setDirection('forward');
            setIsTyping(true);
            timeoutRef.current = setTimeout(tick, delay);
          }, pauseAfterErase);
        }
      }
    }
    timeoutRef.current = setTimeout(tick, delay);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12 bg-gradient-to-tr from-[#0f2027] via-[#2c5364] to-[#232526] animate-gradient-move">
      {/* Animated blurred gradient blobs */}
      <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-gradient-to-br from-indigo-500 via-blue-400 to-purple-500 opacity-30 rounded-full blur-3xl animate-blob1 z-0" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-tr from-pink-500 via-indigo-400 to-blue-400 opacity-20 rounded-full blur-3xl animate-blob2 z-0" />

      {/* Glassmorphism card */}
      <div
        className="relative z-10 max-w-2xl w-full text-center bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 flex flex-col items-center animate-fade-in p-12 md:p-16 min-h-[320px]"
      >
        <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 drop-shadow-xl tracking-tight animate-slide-down break-words max-w-full">
          <span className="whitespace-pre-line break-words max-w-full inline-block align-middle">{typedText}</span>
          <span className="inline-block w-2 h-8 align-middle bg-white/80 ml-1 animate-blink" style={{visibility: isTyping ? 'visible' : 'hidden'}}></span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-medium text-indigo-200 mb-4 animate-slide-up">Creative Full Stack Developer</h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-xl mx-auto animate-fade-in delay-200">
          I craft <span className="text-indigo-300 font-semibold">sleek</span>, <span className="text-blue-300 font-semibold">high-performance</span> web apps and digital experiences with a focus on <span className="text-pink-300 font-semibold">design</span>, <span className="text-indigo-200 font-semibold">usability</span>, and <span className="text-blue-200 font-semibold">innovation</span>.
        </p>
        <a
          href="#portfolio"
          className="px-10 py-4 bg-gradient-to-r from-indigo-500 via-blue-500 to-pink-500 hover:from-indigo-600 hover:to-blue-600 text-white text-xl font-bold rounded-full shadow-xl border-2 border-indigo-400 hover:border-pink-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 animate-pop"
        >
           See My Work
        </a>
      </div>
    </section>
  );
}

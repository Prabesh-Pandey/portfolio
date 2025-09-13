import React from "react";

export default function About() {
  // Typewriter effect for intro
  const [typed, setTyped] = React.useState("");
  const intro = "Hi! I’m Prabesh Pandey, a passionate developer who loves building beautiful, performant web apps.";
  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(intro.slice(0, i));
      i++;
      if (i > intro.length) clearInterval(interval);
    }, 32);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative w-full flex flex-col items-center justify-center py-24 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-pink-500/20 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-4xl w-full px-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-cyan-400/40 p-10 animate-fade-in pointer-events-none">
        <div className="flex-shrink-0 animate-slide-left relative">
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-glow" />
          <img
            src="/assets/2.jpg"
            alt="Your portrait"
            className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 shadow-lg hover:scale-105 transition-transform duration-300 relative z-10"
          />
        </div>
        <div className="text-center md:text-left animate-slide-right pointer-events-auto">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
            About Me
            <span className="inline-block w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
          </h2>
          <p className="text-lg text-gray-200 mb-2 min-h-[3.5rem]">
            <span className="font-mono text-cyan-300">{typed}</span>
            <span className="text-cyan-400 animate-blink">|</span>
          </p>
          <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
            <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm font-semibold shadow">Creativity</span>
            <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm font-semibold shadow">Technology</span>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold shadow">Excellence</span>
            <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-semibold shadow">Problem Solver</span>
            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold shadow">Lifelong Learner</span>
            <span className="bg-gray-700/20 text-gray-300 px-3 py-1 rounded-full text-sm font-semibold shadow">Collaborator</span>
          </div>
          <p className="text-gray-300 mt-6 italic text-base">
            "Turning ideas into reality, one pixel at a time."
          </p>
        </div>
      </div>
      {/* Keyframes for glow and blink */}
      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 24px 8px #22d3ee44; }
          50% { box-shadow: 0 0 48px 16px #22d3ee88; }
        }
        .animate-glow { animation: glow 2s infinite; }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s steps(2, start) infinite; }
      `}</style>
    </section>
  );
}

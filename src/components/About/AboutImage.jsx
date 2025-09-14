import React from "react";

export default function AboutImage() {
  return (
    <div className="flex-shrink-0 animate-slide-left relative">
      <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-glow" />
      <img
        src="/assets/2.jpg"
        alt="Your portrait"
        className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 shadow-lg hover:scale-105 transition-transform duration-300 relative z-10"
      />
    </div>
  );
}

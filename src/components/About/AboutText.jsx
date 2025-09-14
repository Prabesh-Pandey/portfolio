import React from "react";

export default function AboutText({ typed }) {
  return (
    <p className="text-lg text-gray-200 mb-2 min-h-[3.5rem]">
      <span className="font-mono text-cyan-300">{typed}</span>
      <span className="text-cyan-400 animate-blink">|</span>
    </p>
  );
}

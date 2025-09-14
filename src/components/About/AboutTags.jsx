import React from "react";

export default function AboutTags() {
  return (
    <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
      <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm font-semibold shadow">Creativity</span>
      <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm font-semibold shadow">Technology</span>
      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold shadow">Excellence</span>
      <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-semibold shadow">Problem Solver</span>
      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold shadow">Lifelong Learner</span>
      <span className="bg-gray-700/20 text-gray-300 px-3 py-1 rounded-full text-sm font-semibold shadow">Collaborator</span>
    </div>
  );
}

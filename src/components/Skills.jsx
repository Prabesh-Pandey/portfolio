
import React, { useState } from "react";
import CurrentlyLearning from "./CurrentlyLearning";

const skills = [
  { name: "React", color: "bg-blue-400", icon: "⚛️", level: 90 },
  { name: "Tailwind CSS", color: "bg-cyan-400", icon: "🌬️", level: 85 },
  { name: "Node.js", color: "bg-green-400", icon: "🟩", level: 80 },
  { name: "TypeScript", color: "bg-blue-600", icon: "📘", level: 75 },
  { name: "UI/UX", color: "bg-pink-400", icon: "🎨", level: 70 },
];


export default function Skills() {
  const [activeTab, setActiveTab] = useState("skills");
  return (
    <section id="skills" className="relative w-full flex flex-col items-center justify-center py-24 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
  <div className="relative z-10 w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 flex flex-col items-center p-8 md:p-12 transition-all duration-300 box-hover">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center drop-shadow-lg tracking-tight">Skills & Learning</h2>
  {/* Tab system */}
        <div className="flex gap-4 mb-8">
          <button
            className={`px-6 py-2 rounded-full font-semibold text-lg transition-colors duration-200 focus:outline-none border-2 ${activeTab === "skills" ? "bg-indigo-500 text-white border-indigo-400 shadow-lg" : "bg-gray-800 text-indigo-300 border-gray-700"} cursor-target`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold text-lg transition-colors duration-200 focus:outline-none border-2 ${activeTab === "learning" ? "bg-cyan-500 text-white border-cyan-400 shadow-lg" : "bg-gray-800 text-cyan-300 border-gray-700"} cursor-target`}
            onClick={() => setActiveTab("learning")}
          >
            Currently Learning
          </button>
        </div>
        {/* Tab content */}
        {activeTab === "skills" ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <div
                key={skill.name}
                  className="group relative flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-xl px-8 py-8 text-white shadow-lg border border-white/20 transition-all duration-300 pointer-events-auto cursor-target"
                style={{ animation: `fadeInUp 0.5s ${idx * 0.08}s both` }}
              >
                <div className={`text-4xl mb-4 ${skill.color} rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform pointer-events-none`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                  <div
                    className={`h-3 rounded-full ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
                {/* ...existing code... */}
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full">
            <CurrentlyLearning />
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .box-hover {
          box-shadow: 0 8px 32px 0 rgba(31, 41, 55, 0.24), 0 1.5px 6px 0 rgba(255,255,255,0.08);
        }
        .box-hover:hover {
          box-shadow: 0 12px 48px 0 rgba(31, 41, 55, 0.32), 0 2px 12px 0 rgba(255,255,255,0.12);
          border-color: #a5b4fc;
        }
      `}</style>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

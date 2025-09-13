import React from "react";

const skills = [
  { name: "React", color: "bg-blue-400", icon: "⚛️", level: 90 },
  { name: "Tailwind CSS", color: "bg-cyan-400", icon: "🌬️", level: 85 },
  { name: "Node.js", color: "bg-green-400", icon: "🟩", level: 80 },
  { name: "TypeScript", color: "bg-blue-600", icon: "📘", level: 75 },
  { name: "UI/UX", color: "bg-pink-400", icon: "🎨", level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full flex flex-col items-center justify-center py-24 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      <h2 className="text-4xl font-extrabold text-white mb-12 text-center drop-shadow-lg tracking-tight">Skills</h2>
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <div
            key={skill.name}
            className="group relative flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-8 text-white shadow-2xl border border-white/20 transition-all duration-300 hover:scale-[1.06] hover:border-cyan-400 hover:shadow-cyan-500/30 hover:bg-white/20 pointer-events-auto"
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
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:shadow-[0_0_32px_8px_rgba(0,255,255,0.15)] transition-all duration-300" />
          </div>
        ))}
      </div>
      {/* Keyframes for fadeInUp animation */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

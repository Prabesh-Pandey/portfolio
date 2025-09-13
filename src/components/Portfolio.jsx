import React from "react";

const projects = [
  {
    name: "Task manager",
    description: "Task manager using MERN stack.",
  image: "/assets/delegation.png",
    link: "https://github.com/Prabesh-Pandey/Task-Manager/tree/b15755cb0dd9cead540f1169cc84436f98848b0a",
  },
  {
    name: "Project Two",
    description: "A brief description of the project goes here.",
    image: "https://placehold.co/96x96/png",
    link: "#",
  },
  {
    name: "Project Three",
    description: "A brief description of the project goes here.",
    image: "https://placehold.co/96x96/png",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full min-h-[60vh] flex flex-col items-center justify-center py-24 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      <h2 className="text-4xl font-extrabold text-white mb-12 text-center drop-shadow-lg tracking-tight">Portfolio</h2>
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {projects.map((project, idx) => (
          <div
            key={project.name}
            className="group relative flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-8 text-white shadow-2xl border border-white/20 transition-all duration-300 hover:scale-[1.06] hover:border-cyan-400 hover:shadow-cyan-500/30 hover:bg-white/20 pointer-events-auto"
            style={{ animation: `fadeInUp 0.5s ${idx * 0.08}s both` }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4"
            >
              <img
                src={project.image}
                alt={project.name + " screenshot"}
                className="w-24 h-24 object-cover rounded-lg shadow-md hover:opacity-80 transition-opacity"
              />
            </a>
            <h3 className="text-xl font-semibold text-white mb-2 pointer-events-auto">{project.name}</h3>
            <p className="text-gray-400 text-center text-sm mb-2 pointer-events-auto">{project.description}</p>
            <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:shadow-[0_0_32px_8px_rgba(0,255,255,0.15)] transition-all duration-300" />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

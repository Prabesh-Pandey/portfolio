import React from "react";
import reactLogo from "../assets/react.svg";

const icons = {
  react: reactLogo,
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  rest: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/link.svg",
  auth: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  tailwind: "src/assets/tss.png",
  dsa: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  se: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  oss: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
};

const topics = [
  { label: "Advanced React (Hooks, Context, Suspense)", icon: icons.react },
  { label: "TypeScript", icon: icons.typescript },
  { label: "Node.js & Express", icon: icons.node },
  { label: "MongoDB & Mongoose", icon: icons.mongodb },
  { label: "REST APIs", icon: icons.rest },
  { label: "Authentication & Authorization", icon: icons.auth },
  { label: "Tailwind CSS", icon: icons.tailwind },
  { label: "Data Structures & Algorithms", icon: icons.dsa },
  { label: "Software Engineering Best Practices", icon: icons.se },
  { label: "Open Source Collaboration", icon: icons.oss },
];

export default function CurrentlyLearning() {
  return (
    <section id="currently-learning" className="relative w-full flex flex-col items-center justify-center py-24 overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900">
      <h2 className="text-4xl font-extrabold text-white mb-12 text-center drop-shadow-lg tracking-tight">Currently Learning</h2>
      <ul className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {topics.map((topic, idx) => (
          <li
            key={topic.label}
             className="group relative flex items-center gap-6 bg-white/10 backdrop-blur-lg rounded-2xl px-10 py-8 text-white shadow-2xl border border-white/20 transition-all duration-300 hover:scale-[1.06] hover:border-cyan-400 hover:shadow-cyan-500/30 hover:bg-white/20"
            style={{ animation: `fadeInUp 0.5s ${idx * 0.08}s both` }}
          >
              <div className="flex-shrink-0 group">
                <img src={topic.icon} alt="icon" className="w-12 h-12 object-contain drop-shadow-lg transition-transform duration-200 group-hover:scale-125" />
              </div>
            <span className="text-xl font-semibold tracking-tight group-hover:text-cyan-300 transition-colors duration-300 pointer-events-auto">
              {topic.label}
            </span>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:shadow-[0_0_32px_8px_rgba(0,255,255,0.15)] transition-all duration-300" />
          </li>
        ))}
      </ul>
      {/* Keyframes for fadeInUp animation */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradientBlur {
          0%, 100% { filter: blur(8px); }
          50% { filter: blur(12px); }
        }
      `}</style>
    </section>
  );
}

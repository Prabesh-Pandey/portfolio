import React from "react";

export default function CurrentlyLearning() {
  const topics = [
    { label: "Advanced React (Hooks, Context, Suspense)", icon: "⚛️" },
    { label: "TypeScript", icon: "🟦" },
    { label: "Node.js & Express", icon: "🌳" },
    { label: "MongoDB & Mongoose", icon: "🍃" },
    { label: "REST APIs", icon: "🔗" },
    { label: "Authentication & Authorization", icon: "🔒" },
    { label: "Tailwind CSS", icon: "🌬️" },
    { label: "Data Structures & Algorithms", icon: "🧩" },
    { label: "Software Engineering Best Practices", icon: "🛠️" },
    { label: "Open Source Collaboration", icon: "🤝" },
  ];
  return (
    <section id="currently-learning" className="w-full flex flex-col items-center justify-center py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <h2 className="text-3xl font-bold text-white mb-8">Currently Learning</h2>
      <ul className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {topics.map((topic) => (
          <li
            key={topic.label}
            className="bg-gray-800 rounded-xl shadow-lg p-6 text-white text-lg flex items-center gap-3 hover:scale-105 transition-transform duration-300"
          >
            <span className="text-indigo-400 text-2xl">{topic.icon}</span>
            <span>{topic.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

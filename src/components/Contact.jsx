import React from "react";

export default function Contact() {
  // Mailto form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const mailto = `mailto:prabesh.code@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="relative w-full flex flex-col items-center justify-center py-24 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      <h2 className="text-4xl font-extrabold text-white mb-12 text-center drop-shadow-lg tracking-tight">Contact</h2>
      <form className="w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 flex flex-col gap-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-target"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-target"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={4}
          className="px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-target"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white text-lg font-semibold rounded-full shadow-lg border-2 border-indigo-400 hover:border-blue-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 cursor-target"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 flex gap-6 text-gray-400">
        <a href="mailto:prabesh.code@gmail.com" className="hover:text-indigo-400 transition-colors cursor-target">Email</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors cursor-target">LinkedIn</a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors cursor-target">GitHub</a>
      </div>
    </section>
  );
}

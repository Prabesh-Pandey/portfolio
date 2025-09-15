import React from "react";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xdkljpvb");

  return (
    <section id="contact" className="relative w-full flex flex-col items-center justify-center py-24 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      <h2 className="text-4xl font-extrabold text-white mb-12 text-center drop-shadow-lg tracking-tight">Contact</h2>
      {state.succeeded ? (
        <p className="text-center text-lg text-indigo-400 mt-8">Thanks for your message!</p>
      ) : (
        <form className="w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 flex flex-col gap-6" onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-left text-gray-300 font-semibold">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-target"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message" className="text-left text-gray-300 font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-target"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button
            type="submit"
            disabled={state.submitting}
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white text-lg font-semibold rounded-full shadow-lg border-2 border-indigo-400 hover:border-blue-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 cursor-target"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
  )}
      <div className="mt-8 flex gap-6 text-gray-400">
        <a href="mailto:prabesh.code@gmail.com" className="hover:text-indigo-400 transition-colors cursor-target">Email</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors cursor-target">LinkedIn</a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors cursor-target">GitHub</a>
      </div>
    </section>
  );
}

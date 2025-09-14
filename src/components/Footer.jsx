import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gradient-to-b from-gray-950 to-gray-900 flex flex-col items-center border-t border-gray-800 mt-12">
      <div className="flex gap-6 mb-2">
  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition-colors cursor-target">🐙</a>
  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition-colors cursor-target">💼</a>
  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition-colors cursor-target">🐦</a>
      </div>
      <span className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} prabesh. All rights reserved.</span>
    </footer>
  );
}

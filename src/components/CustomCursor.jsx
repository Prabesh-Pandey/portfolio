


import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [cursorStyle, setCursorStyle] = useState({
    width: 32,
    height: 32,
    borderRadius: "50%",
    borderColor: "#818cf8",
    background: "rgba(129,140,248,0.2)",
    transition: "transform 0.12s cubic-bezier(.4,2,.6,1), width 0.2s, height 0.2s, border-radius 0.2s, border-color 0.2s, background 0.2s",
    left: -100,
    top: -100,
  });

  useEffect(() => {
    function onMouseMove(e) {
      setCursorStyle((prev) => ({
        ...prev,
        left: e.clientX - 16,
        top: e.clientY - 16,
      }));
    }
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999]"
      style={{
        width: cursorStyle.width,
        height: cursorStyle.height,
        borderRadius: cursorStyle.borderRadius,
        border: `2px solid ${cursorStyle.borderColor}`,
        background: cursorStyle.background,
        left: cursorStyle.left,
        top: cursorStyle.top,
        transition: cursorStyle.transition,
        boxSizing: "border-box",
        mixBlendMode: "difference",
      }}
    />
  );
}

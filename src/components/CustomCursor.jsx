
import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    function onMouseMove(e) {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    }
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const cursorStyle = {
    width: 32,
    height: 32,
    borderRadius: "50%",
    borderColor: "#818cf8",
    background: "rgba(129,140,248,0.2)",
    transition: "transform 0.12s cubic-bezier(.4,2,.6,1), width 0.2s, height 0.2s, border-radius 0.2s, border-color 0.2s, background 0.2s",
  };

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        width: cursorStyle.width,
        height: cursorStyle.height,
        borderRadius: cursorStyle.borderRadius,
        transform: `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`,
        transition: cursorStyle.transition,
      }}
    >
      <div
        className="w-full h-full animate-cursorPulse"
        style={{
          border: `2px solid ${cursorStyle.borderColor}`,
          background: cursorStyle.background,
          borderRadius: cursorStyle.borderRadius,
        }}
      ></div>
    </div>
  );
}

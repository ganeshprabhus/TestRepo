"use client";
import { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    // Follow cursor
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Sparkle trail
      const sparkle = document.createElement("div");
      sparkle.className =
        "absolute w-2 h-2 rounded-full bg-yellow-400 opacity-80 pointer-events-none animate-ping";
      sparkle.style.left = `${e.clientX}px`;
      sparkle.style.top = `${e.clientY}px`;
      sparkle.style.boxShadow = "0 0 10px gold";
      trail.appendChild(sparkle);

      // Remove after animation
      setTimeout(() => sparkle.remove(), 600);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(".cta-button, .nav-link, a, button");
      if (isInteractive) {
        cursor.style.transform =
          "translate(-50%, -50%) scale(1.4) rotate(-15deg)";
        cursor.style.filter = "drop-shadow(0 0 15px gold)";
      } else {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.filter = "drop-shadow(0 0 8px gold)";
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseout", handleHover);

    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", handleHover);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      {/* Wand Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 text-yellow-400 pointer-events-none z-[9999] transition-transform duration-200 ease-out"
        style={{
          transform: "translate(-50%, -50%)",
          left: 0,
          top: 0,
        }}
      >
        {/* Magic wand SVG */}
        <svg
          fill="#ffffff"
          viewBox="0 0 24 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          className=""
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>magic</title>{" "}
            <path d="M9.5 9.625l-0.906 2.906-0.875-2.906-2.906-0.906 2.906-0.875 0.875-2.938 0.906 2.938 2.906 0.875zM14.563 8.031l-0.438 1.469-0.5-1.469-1.438-0.469 1.438-0.438 0.5-1.438 0.438 1.438 1.438 0.438zM0.281 24l17.906-17.375c0.125-0.156 0.313-0.25 0.531-0.25 0.281-0.031 0.563 0.063 0.781 0.281 0.094 0.063 0.219 0.188 0.406 0.344 0.344 0.313 0.719 0.688 1 1.063 0.125 0.188 0.188 0.344 0.188 0.5 0.031 0.313-0.063 0.594-0.25 0.781l-17.906 17.438c-0.156 0.156-0.344 0.219-0.563 0.25-0.281 0.031-0.563-0.063-0.781-0.281-0.094-0.094-0.219-0.188-0.406-0.375-0.344-0.281-0.719-0.656-0.969-1.063-0.125-0.188-0.188-0.375-0.219-0.531-0.031-0.313 0.063-0.563 0.281-0.781zM14.656 11.375l1.313 1.344 4.156-4.031-1.313-1.375zM5.938 13.156l-0.406 1.438-0.438-1.438-1.438-0.469 1.438-0.438 0.438-1.469 0.406 1.469 1.5 0.438zM20.5 12.063l0.469 1.469 1.438 0.438-1.438 0.469-0.469 1.438-0.469-1.438-1.438-0.469 1.438-0.438z"></path>{" "}
          </g>
        </svg>
      </div>

      {/* Sparkle Trail Container */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-full h-full z-[9998] pointer-events-none"
      ></div>
    </>
  );
};

export default CustomCursor;

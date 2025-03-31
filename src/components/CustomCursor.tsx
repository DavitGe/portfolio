"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });

  // Less aggressive smoothing for better responsiveness
  const smoothFactor = 0.2;

  // Simple animation loop that always runs when cursor is visible
  const updateCursorPosition = useCallback(() => {
    if (!cursorRef.current) return;

    // Calculate distance between current position and target
    const dx = targetPosition.current.x - cursorPosition.current.x;
    const dy = targetPosition.current.y - cursorPosition.current.y;

    // Apply smooth animation
    cursorPosition.current.x += dx * smoothFactor;
    cursorPosition.current.y += dy * smoothFactor;

    // Apply transform with hardware acceleration
    cursorRef.current.style.transform = `translate3d(${
      cursorPosition.current.x
    }px, ${cursorPosition.current.y}px, 0) translate(-50%, -50%) scale(${
      isPointer ? 1.2 : 1
    })`;

    // Continue animation loop
    requestRef.current = requestAnimationFrame(updateCursorPosition);
  }, [isPointer, smoothFactor]);

  // Start animation loop when component mounts
  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateCursorPosition);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
    };
  }, [updateCursorPosition]);

  // Handle mouse movement and interaction states
  useEffect(() => {
    // Simple throttling for mouse move
    let lastMoveTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Basic throttling - limit to ~60fps
      const now = performance.now();
      if (now - lastMoveTime < 16) return;
      lastMoveTime = now;

      // Update target position
      targetPosition.current = { x: e.clientX, y: e.clientY };

      // On first move, initialize cursor position to match mouse
      if (!isVisible) {
        cursorPosition.current = { x: e.clientX, y: e.clientY };
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Throttled pointer detection
    let pointerCheckTimeout: NodeJS.Timeout | null = null;

    const checkIfPointer = () => {
      if (pointerCheckTimeout) {
        clearTimeout(pointerCheckTimeout);
      }

      pointerCheckTimeout = setTimeout(() => {
        const x = targetPosition.current.x;
        const y = targetPosition.current.y;

        if (x === 0 && y === 0) return;

        const element = document.elementFromPoint(x, y);
        if (!element) return;

        const isInteractive =
          element.tagName === "A" ||
          element.tagName === "BUTTON" ||
          element.closest("a") !== null ||
          element.closest("button") !== null ||
          element.closest("[role='button']") !== null ||
          window.getComputedStyle(element).cursor === "pointer";

        setIsPointer(isInteractive);
      }, 50);
    };

    // Set up event listeners
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousemove", checkIfPointer, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousemove", checkIfPointer);

      if (pointerCheckTimeout) {
        clearTimeout(pointerCheckTimeout);
      }
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className="cursor-container"
      style={{
        opacity: isVisible ? 1 : 0,
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
        width: "100px",
        height: "100px",
        transition: "opacity 0.3s",
      }}
      aria-hidden="true"
    >
      {/* Central dot */}
      <div
        className="center-dot"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "7px",
          height: "7px",
          backgroundColor: "var(--cursor-color)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 3px rgba(0, 0, 0, 0.5)",
          zIndex: 2,
        }}
      />

      {/* Spinning text */}
      <div
        className="rotating-ring"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          animation: "spin 6s linear infinite",
          zIndex: 1,
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <path
              id="cursorCircle"
              d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text
            fontSize="9.5"
            fontWeight="900"
            fill="white"
            letterSpacing="0.8"
            style={{
              textTransform: "uppercase",
              strokeWidth: "0.3px",
              stroke: "white",
              dominantBaseline: "middle",
            }}
          >
            <textPath xlinkHref="#cursorCircle" startOffset="0%">
              DAVID • DAVID • DAVID • DAVID • DAVID •
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;

"use client";

import { useState, useEffect, useCallback } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchClassName?: string;
  intensity?: "low" | "medium" | "high";
  highlightColor?: string;
  enableHoverEffect?: boolean;
}

const GlitchText = ({
  text,
  className = "",
  glitchClassName = "",
  intensity = "medium",
  highlightColor = "text-purple-500",
  enableHoverEffect = true,
}: GlitchTextProps) => {
  const [glitchText, setGlitchText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Characters for random replacement during glitch
  const glitchChars = "!<>-_\\/[]{}—=+*^?#________";

  // Glitch effect intensity settings - increased speed by reducing intervals
  const intensitySettings = {
    low: {
      probability: 0.05,
      duration: 50,
      interval: 3000,
    },
    medium: {
      probability: 0.15,
      duration: 100,
      interval: 2000,
    },
    high: {
      probability: 0.25,
      duration: 150,
      interval: 1500,
    },
  };

  const settings = intensitySettings[intensity];

  // Create random glitch text by replacing characters
  const generateGlitchText = useCallback(() => {
    return text
      .split("")
      .map((char) => {
        if (char === " ") return " ";
        return Math.random() < settings.probability
          ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
          : char;
      })
      .join("");
  }, [text, settings.probability, glitchChars]);

  // Handle glitch effect timing
  useEffect(() => {
    // Don't run automatic glitching if we're hovering
    if (isHovering) return;

    // Function to trigger glitch
    const triggerGlitch = () => {
      setIsGlitching(true);

      // Multiple phases of glitching for a more realistic effect
      const glitchDuration = settings.duration;

      // First glitch phase
      setGlitchText(generateGlitchText());

      // Rapid glitch sequence
      const glitchSequence = [
        setTimeout(
          () => setGlitchText(generateGlitchText()),
          glitchDuration * 0.2
        ),
        setTimeout(
          () => setGlitchText(generateGlitchText()),
          glitchDuration * 0.4
        ),
        setTimeout(
          () => setGlitchText(generateGlitchText()),
          glitchDuration * 0.6
        ),
        setTimeout(
          () => setGlitchText(generateGlitchText()),
          glitchDuration * 0.8
        ),
        setTimeout(() => {
          setGlitchText(text);
          setIsGlitching(false);
        }, glitchDuration),
      ];

      return glitchSequence;
    };

    // Set up regular glitch intervals
    const glitchInterval = setInterval(() => {
      const glitchSequence = triggerGlitch();
      return () => glitchSequence.forEach(clearTimeout);
    }, settings.interval);

    // Also trigger on initial render with a small delay
    const initialGlitch = setTimeout(() => {
      triggerGlitch();
    }, 800);

    return () => {
      clearInterval(glitchInterval);
      clearTimeout(initialGlitch);
    };
  }, [text, settings, isHovering, generateGlitchText]);

  // Special glitch handling for hover events
  const handleHoverStart = () => {
    if (!enableHoverEffect) return;

    setIsHovering(true);
    setIsGlitching(true);

    // Create more intense glitching effect during hover - faster speed
    const runHoverGlitch = () => {
      setGlitchText(generateGlitchText());
      return setTimeout(runHoverGlitch, 30);
    };

    const hoverTimeout = runHoverGlitch();

    return () => clearTimeout(hoverTimeout);
  };

  const handleHoverEnd = () => {
    if (!enableHoverEffect) return;

    setIsHovering(false);
    setIsGlitching(false);
    setGlitchText(text);
  };

  return (
    <span
      className={`relative inline-block ${className} ${
        isGlitching ? glitchClassName : ""
      } ${enableHoverEffect ? "glitch" : ""}`}
      style={{
        textShadow: isGlitching
          ? `0 0 5px ${highlightColor}, 0 0 10px ${highlightColor}`
          : "none",
        transition: "text-shadow 50ms linear",
      }}
      data-text={text}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      onFocus={handleHoverStart}
      onBlur={handleHoverEnd}
      tabIndex={enableHoverEffect ? 0 : -1}
      aria-label={text}
    >
      {isHovering && enableHoverEffect ? glitchText : text}
    </span>
  );
};

export default GlitchText;

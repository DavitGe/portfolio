"use client";

import { useState, useEffect, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  hideCursorOnComplete?: boolean;
}

const TypewriterText = ({
  text,
  speed = 40,
  delay = 0,
  className = "",
  onComplete,
  hideCursorOnComplete = false,
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset state when text changes
    setDisplayText("");
    setIsTyping(false);
    setIsComplete(false);

    // Delay before starting the animation
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, delay]);

  useEffect(() => {
    // Handle typing animation
    if (isTyping && displayText.length < text.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length + 1));
      }, speed);
    } else if (isTyping && displayText.length === text.length) {
      // Animation completed
      setIsTyping(false);
      setIsComplete(true);
      if (onComplete) onComplete();
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isTyping, text, speed, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    // Don't blink cursor if we've completed typing and should hide cursor
    if (isComplete && hideCursorOnComplete) {
      setCursorVisible(false);
      return;
    }

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 400);

    return () => clearInterval(cursorInterval);
  }, [isComplete, hideCursorOnComplete]);

  return (
    <span className={className}>
      {displayText}
      {(!isComplete || !hideCursorOnComplete) && (
        <span
          className={`inline-block w-[2px] h-[1em] bg-purple-500 ml-1 align-middle ${
            cursorVisible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-100`}
          aria-hidden="true"
        ></span>
      )}
    </span>
  );
};

export default TypewriterText;

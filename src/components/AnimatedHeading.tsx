"use client";

import { useState, useEffect } from "react";
import TypewriterText from "./TypewriterText";
import GlitchText from "./GlitchText";

interface AnimatedHeadingProps {
  firstLine: string;
  secondLine: string;
  highlightWord: string;
  className?: string;
}

const AnimatedHeading = ({
  firstLine,
  secondLine,
  highlightWord,
  className = "",
}: AnimatedHeadingProps) => {
  const [firstLineCompleted, setFirstLineCompleted] = useState(false);
  const [secondLineCompleted, setSecondLineCompleted] = useState(false);
  const [showHighlight, setShowHighlight] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Extract the second line text without the highlight word
  const secondLineText = secondLine.replace(highlightWord, "");

  // Handle completion of first line typing
  const handleFirstLineComplete = () => {
    setFirstLineCompleted(true);
  };

  // Handle completion of second line typing
  const handleSecondLineComplete = () => {
    setSecondLineCompleted(true);
    // Show highlight word immediately after second line completes
    setShowHighlight(true);
  };

  // Mark when everything has loaded to enable hover effects
  useEffect(() => {
    if (showHighlight) {
      // Add a small delay to ensure everything is fully rendered
      const timer = setTimeout(() => {
        setHasLoaded(true);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [showHighlight]);

  return (
    <h1 className={`${className}`}>
      <div className="overflow-hidden">
        <TypewriterText
          text={firstLine}
          speed={30}
          className="block"
          onComplete={handleFirstLineComplete}
          hideCursorOnComplete={firstLineCompleted}
        />
      </div>

      <div className="overflow-hidden flex flex-wrap items-center">
        <TypewriterText
          text={secondLineText}
          speed={30}
          delay={firstLine.length * 30 + 100}
          className="inline-block"
          onComplete={handleSecondLineComplete}
          hideCursorOnComplete={secondLineCompleted}
        />

        {showHighlight ? (
          <GlitchText
            text={highlightWord}
            className="text-purple-500 ml-2"
            intensity="medium"
            glitchClassName="opacity-90"
            enableHoverEffect={hasLoaded}
          />
        ) : (
          <span className="invisible ml-2">{highlightWord}</span>
        )}
      </div>
    </h1>
  );
};

export default AnimatedHeading;

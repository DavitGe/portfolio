"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import CustomCursor from "./CustomCursor";

export default function CursorWrapper() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Directly manage cursor visibility on the client
  useEffect(() => {
    // Reset cursor to default on all pages
    document.documentElement.style.cursor = "";
    document.body.style.cursor = "";

    // Remove any existing cursor style if present
    const existingStyle = document.getElementById("cursor-style");
    if (existingStyle) {
      existingStyle.remove();
    }

    // Only hide the cursor on the homepage
    if (isHomePage) {
      const styleElement = document.createElement("style");
      styleElement.id = "cursor-style";
      styleElement.textContent = "* { cursor: none !important; }";
      document.head.appendChild(styleElement);
    }

    return () => {
      // Clean up
      document.documentElement.style.cursor = "";
      document.body.style.cursor = "";
      const style = document.getElementById("cursor-style");
      if (style) {
        style.remove();
      }
    };
  }, [isHomePage]);

  return isHomePage ? <CustomCursor /> : null;
}

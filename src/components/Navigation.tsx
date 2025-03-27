"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const fullText = "Full stack developer";
  const pathname = usePathname();
  const router = useRouter();

  // Handle typing animation
  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % 1; // We only have one text to loop through
      const fullString = fullText;

      setText(
        isDeleting
          ? fullString.substring(0, text.length - 1)
          : fullString.substring(0, text.length + 1)
      );

      // Set typing speed based on state
      if (isDeleting) {
        setTypingSpeed(30); // Much faster when deleting (changed from 75)
      } else {
        setTypingSpeed(100); // Normal speed when typing
      }

      // Logic for completing typing or deleting
      if (!isDeleting && text === fullString) {
        // Start deleting after a pause
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        // Pause before starting to type again
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Handle scroll effect for header background only
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  // Clean up overflow style when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleNavigation = (path: string) => {
    // First navigate to the page
    router.push(path);

    // Then close the menu after a small delay to allow for navigation
    setTimeout(() => {
      setIsMenuOpen(false);
      document.body.style.overflow = "auto";
    }, 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 p-6 transition-all duration-300 ${
          hasScrolled ? "bg-[#0c0c11]/90 backdrop-blur-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-white font-medium text-lg flex gap-4 items-center"
            >
              <span className="font-bold">DG</span> <span>|</span>
              <span className="text-sm min-w-[140px]">
                {text}
                <span className="inline-block w-[2px] h-4 bg-purple-500 ml-0.5 animate-pulse"></span>
              </span>
            </Link>
          </div>
          <button
            className="flex items-center gap-2 text-white hover:text-purple-500 transition-colors duration-300 group"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="text-sm tracking-wider transition-colors duration-300">
              MENU
            </span>
            <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
              <span className="bg-current transition-colors duration-300"></span>
              <span className="bg-current transition-colors duration-300"></span>
              <span className="bg-current transition-colors duration-300"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Fullscreen menu overlay */}
      <div
        className={`fixed inset-0 bg-[#0c0c11] z-40 flex items-center justify-center transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="text-center">
          <ul className="space-y-8 text-4xl md:text-6xl font-bold">
            <li className="menu-item">
              <a
                href="#"
                className={`block py-2 px-4 relative overflow-hidden uppercase tracking-wider transition-colors duration-300 ${
                  pathname === "/"
                    ? "text-purple-500"
                    : "text-white hover:text-purple-500"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleNavigation("/");
                  }
                }}
                tabIndex={0}
                aria-label="Navigate to Home page"
              >
                Home
              </a>
            </li>
            <li className="menu-item">
              <a
                href="#"
                className={`block py-2 px-4 relative overflow-hidden uppercase tracking-wider transition-colors duration-300 ${
                  pathname === "/projects"
                    ? "text-purple-500"
                    : "text-white hover:text-purple-500"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/projects");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleNavigation("/projects");
                  }
                }}
                tabIndex={0}
                aria-label="Navigate to Projects page"
              >
                Projects
              </a>
            </li>
            <li className="menu-item">
              <a
                href="#"
                className={`block py-2 px-4 relative overflow-hidden uppercase tracking-wider transition-colors duration-300 ${
                  pathname === "/resume"
                    ? "text-purple-500"
                    : "text-white hover:text-purple-500"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/resume");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleNavigation("/resume");
                  }
                }}
                tabIndex={0}
                aria-label="Navigate to Resume page"
              >
                Resume
              </a>
            </li>
            <li className="menu-item">
              <a
                href="#"
                className={`block py-2 px-4 relative overflow-hidden uppercase tracking-wider transition-colors duration-300 ${
                  pathname === "/contact"
                    ? "text-purple-500"
                    : "text-white hover:text-purple-500"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/contact");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleNavigation("/contact");
                  }
                }}
                tabIndex={0}
                aria-label="Navigate to Contact page"
              >
                Send me message
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;

import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import AnimatedHeading from "@/components/AnimatedHeading";
import socialConfig from "@/config/social";

export default function Home() {
  return (
    <>
      <div className="bg-[#0c0c11] text-white overflow-x-hidden">
        {/* Navigation with animated menu */}
        <Navigation />

        {/* Hero section with centered content */}
        <div className="relative min-h-screen flex items-center justify-center p-8">
          {/* Hand emoji on left */}
          <div className="absolute left-4 md:left-16 lg:left-24 top-1/3 z-10">
            <Image
              src="/images/hand-ok.svg"
              alt="OK hand"
              width={120}
              height={120}
              className="hidden md:block w-16 lg:w-24 xl:w-32 h-auto"
            />
          </div>

          {/* Main content */}
          <main className="max-w-5xl w-full flex flex-col items-center justify-center px-4 md:px-12">
            <div className="text-left w-full max-w-3xl">
              <AnimatedHeading
                firstLine="Turning ideas into"
                secondLine="real life products"
                highlightWord="products"
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight"
              />

              {/* Small circular badge */}
              <div className="absolute top-32 right-24 hidden md:block">
                <div className="relative w-24 h-24">
                  <svg
                    className="absolute inset-0 w-full h-full animate-slow-spin"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <path
                        id="circle"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text fontSize="8">
                      <textPath xlinkHref="#circle" className="text-gray-400">
                        • FULL STACK • DEVELOPER •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex flex-col sm:flex-row gap-6">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1c1c24] hover:bg-[#2a2a36] text-white font-medium rounded-lg transition-all duration-300 group relative overflow-hidden border-2 border-purple-500 shadow-[4px_4px_0px_0px_rgba(173,71,255,0.7))] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                >
                  <span className="flex items-center">
                    View Projects
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1c1c24] hover:bg-[#2a2a36] text-white font-medium rounded-lg transition-all duration-300 group relative overflow-hidden border-2 border-green-400 shadow-[4px_4px_0px_0px_rgba(74,222,128,0.7)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                >
                  <span className="flex items-center">
                    Contact Me
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </main>

          {/* Hand emoji on right */}
          <div className="absolute right-4 md:right-16 lg:right-24 bottom-1/3 z-10">
            <Image
              src="/images/hand-point.svg"
              alt="Pointing hand"
              width={120}
              height={120}
              className="hidden md:block w-16 lg:w-24 xl:w-32 h-auto"
            />
          </div>
        </div>

        {/* Footer section */}
        <footer className="py-8 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">
                  © 2025 David Gelovani. All rights reserved.
                </p>
              </div>
              <div className="flex space-x-6">
                <a
                  href={socialConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href={socialConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

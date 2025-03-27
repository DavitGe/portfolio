import Navigation from "@/components/Navigation";

export default function ProjectsPage() {
  return (
    <div className="bg-[#0c0c11] text-white min-h-screen overflow-x-hidden">
      {/* Navigation with animated menu */}
      <Navigation />

      <main className="pt-32 px-4 pb-20">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards */}
            <div className="bg-[#151519] rounded-lg p-6 overflow-hidden group hover:shadow-[0_10px_30px_-10px_rgba(121,100,219,0.3)] transition-all duration-300">
              <div className="h-48 bg-[#1c1c24] rounded-md mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p className="text-gray-400 mb-4">
                A short description of this project and what technologies were
                used to build it.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#1c1c24] rounded-full text-xs">
                  React
                </span>
                <span className="px-3 py-1 bg-[#1c1c24] rounded-full text-xs">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-[#1c1c24] rounded-full text-xs">
                  TailwindCSS
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 bg-[#1c1c24] hover:bg-[#2a2a36] text-white font-medium rounded-md transition-all duration-300 group relative overflow-hidden border-2 border-blue-400 shadow-[4px_4px_0px_0px_rgba(96,165,250,0.7)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
              >
                <span className="flex items-center text-sm">
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
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
              </a>
            </div>

            <div className="bg-[#151519] rounded-lg p-6 overflow-hidden group hover:shadow-[0_10px_30px_-10px_rgba(121,100,219,0.3)] transition-all duration-300">
              <div className="h-48 bg-[#1c1c24] rounded-md mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p className="text-gray-400 mb-4">
                A short description of this project and what technologies were
                used to build it.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#1c1c24] rounded-full text-xs">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-[#1c1c24] rounded-full text-xs">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-[#1c1c24] rounded-full text-xs">
                  TailwindCSS
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 bg-[#1c1c24] hover:bg-[#2a2a36] text-white font-medium rounded-md transition-all duration-300 group relative overflow-hidden border-2 border-green-400 shadow-[4px_4px_0px_0px_rgba(74,222,128,0.7)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
              >
                <span className="flex items-center text-sm">
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
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
              </a>
            </div>

            <div className="bg-[#151519] rounded-lg p-6 overflow-hidden group hover:shadow-[0_10px_30px_-10px_rgba(121,100,219,0.3)] transition-all duration-300">
              <div className="h-48 bg-[#1c1c24] rounded-md mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p className="text-gray-400 mb-4">
                A short description of this project and what technologies were
                used to build it.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#1c1c24] rounded-full text-xs">
                  React
                </span>
                <span className="px-3 py-1 bg-[#1c1c24] rounded-full text-xs">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-[#1c1c24] rounded-full text-xs">
                  MongoDB
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 bg-[#1c1c24] hover:bg-[#2a2a36] text-white font-medium rounded-md transition-all duration-300 group relative overflow-hidden border-2 border-purple-400 shadow-[4px_4px_0px_0px_rgba(192,132,252,0.7)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
              >
                <span className="flex items-center text-sm">
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
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
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

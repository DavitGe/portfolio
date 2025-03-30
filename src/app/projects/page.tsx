import Navigation from "@/components/Navigation";
import { projects, getShadowClass } from "@/config/projects";

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
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#151519] rounded-lg p-6 overflow-hidden group hover:shadow-[0_10px_30px_-10px_rgba(121,100,219,0.3)] transition-all duration-300"
              >
                <div className="h-48 bg-[#1c1c24] rounded-md mb-6">
                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} thumbnail`}
                      className="h-full w-full object-cover rounded-md"
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.id}-tag-${index}`}
                      className="px-3 py-1 bg-[#1c1c24] rounded-full text-xs"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <a
                  href={project.projectUrl}
                  className={`inline-flex items-center justify-center px-4 py-2 bg-[#1c1c24] hover:bg-[#2a2a36] text-white font-medium rounded-md transition-all duration-300 group relative overflow-hidden border-2 ${
                    project.borderColor || "border-blue-400"
                  } ${getShadowClass(
                    project.borderColor || "border-blue-400"
                  )} hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]`}
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
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

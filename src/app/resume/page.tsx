"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import resumeConfig, { ResumeConfig, loadResumeData } from "@/config/resume";

export default function ResumePage() {
  const [resumeData, setResumeData] = useState<ResumeConfig>(resumeConfig);

  // Ensure we're loading the latest data from localStorage on component mount
  useEffect(() => {
    setResumeData(loadResumeData());
  }, []);

  const { personalInfo, skills, experiences, education } = resumeData;

  // Function to format description with line breaks
  const formatDescription = (text: string) => {
    return text.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        {i < text.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className="bg-[#0c0c11] text-white min-h-screen overflow-x-hidden">
      {/* Navigation with animated menu */}
      <Navigation />

      <main className="pt-32 px-4 pb-20">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Resume</h1>

          <div className="bg-[#151519] rounded-xl p-8 shadow-[0_10px_50px_rgba(0,0,0,0.3)]">
            {/* Personal Info */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{personalInfo.name}</h2>
              <p className="text-gray-400 mb-4">{personalInfo.title}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  {personalInfo.email}
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"></path>
                  </svg>
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 text-purple-500">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#1c1c24] rounded-full text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-purple-500">
                Experience
              </h3>

              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className="mb-8 border-l-2 border-purple-500 pl-6 relative"
                >
                  <div className="w-4 h-4 bg-purple-500 rounded-full absolute -left-[9px] top-1"></div>
                  <div className="mb-2">
                    <h4 className="text-lg font-semibold">
                      {experience.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {experience.company} • {experience.period}
                    </p>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {formatDescription(experience.description)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-[#1c1c24] rounded-md text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-purple-500">
                Education
              </h3>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-purple-500 pl-6 relative"
                  >
                    <div className="w-4 h-4 bg-purple-500 rounded-full absolute -left-[9px] top-1"></div>
                    <div className="mb-2">
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <p className="text-gray-400 text-sm">
                        {edu.institution} • {edu.period}
                      </p>
                    </div>
                    <p className="text-gray-300">
                      {formatDescription(edu.description)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1c1c24] hover:bg-[#2a2a36] text-white font-medium rounded-lg transition-all duration-300 group relative overflow-hidden border-2 border-yellow-400 shadow-[4px_4px_0px_0px_rgba(250,204,21,0.7)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Download PDF Resume
              </span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

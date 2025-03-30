"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import resumeConfig, {
  ResumeConfig,
  saveResumeData,
  loadResumeData,
} from "@/config/resume";

export default function ResumeAdminPage() {
  const [formData, setFormData] = useState<ResumeConfig>(resumeConfig);
  const [showSuccess, setShowSuccess] = useState(false);

  // Ensure we're loading the latest data from localStorage on component mount
  useEffect(() => {
    setFormData(loadResumeData());
  }, []);

  const handlePersonalInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [name]: value,
      },
    });
  };

  const handleSkillChange = (index: number, value: string) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = { name: value };
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, { name: "" }],
    });
  };

  const removeSkill = (index: number) => {
    const updatedSkills = [...formData.skills];
    updatedSkills.splice(index, 1);
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  const handleExperienceChange = (
    index: number,
    field: keyof (typeof formData.experiences)[0],
    value: string
  ) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]:
        field === "skills" ? value.split(",").map((s) => s.trim()) : value,
    };
    setFormData({
      ...formData,
      experiences: updatedExperiences,
    });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        { title: "", company: "", period: "", description: "", skills: [] },
      ],
    });
  };

  const removeExperience = (index: number) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences.splice(index, 1);
    setFormData({
      ...formData,
      experiences: updatedExperiences,
    });
  };

  const handleEducationChange = (
    index: number,
    field: keyof (typeof formData.education)[0],
    value: string
  ) => {
    const updatedEducation = [...formData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value,
    };
    setFormData({
      ...formData,
      education: updatedEducation,
    });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { degree: "", institution: "", period: "", description: "" },
      ],
    });
  };

  const removeEducation = (index: number) => {
    const updatedEducation = [...formData.education];
    updatedEducation.splice(index, 1);
    setFormData({
      ...formData,
      education: updatedEducation,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save the data to localStorage
    saveResumeData(formData);

    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="bg-[#0c0c11] text-white min-h-screen overflow-x-hidden">
      <Navigation />

      <main className="pt-32 px-4 pb-20">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Resume Admin</h1>

          {showSuccess && (
            <div className="bg-green-500 text-white p-4 rounded-md mb-6 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Resume data updated successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Info Section */}
            <div className="bg-[#151519] rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-purple-500">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.personalInfo.name}
                    onChange={handlePersonalInfoChange}
                    className="w-full bg-[#1c1c24] rounded-md p-2 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.personalInfo.email}
                    onChange={handlePersonalInfoChange}
                    className="w-full bg-[#1c1c24] rounded-md p-2 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.personalInfo.location}
                    onChange={handlePersonalInfoChange}
                    className="w-full bg-[#1c1c24] rounded-md p-2 text-white"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.personalInfo.title}
                    onChange={handlePersonalInfoChange}
                    className="w-full bg-[#1c1c24] rounded-md p-2 text-white"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-[#151519] rounded-xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-purple-500">Skills</h2>
                <button
                  type="button"
                  onClick={addSkill}
                  className="bg-purple-500 hover:bg-purple-600 text-white py-1 px-3 rounded-md text-sm transition-colors"
                >
                  Add Skill
                </button>
              </div>
              <div className="space-y-3">
                {formData.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={skill.name}
                      onChange={(e) => handleSkillChange(index, e.target.value)}
                      className="flex-grow bg-[#1c1c24] rounded-md p-2 text-white"
                      placeholder="Skill name"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => removeSkill(index)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md transition-colors"
                      aria-label="Remove skill"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-[#151519] rounded-xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-purple-500">
                  Experience
                </h2>
                <button
                  type="button"
                  onClick={addExperience}
                  className="bg-purple-500 hover:bg-purple-600 text-white py-1 px-3 rounded-md text-sm transition-colors"
                >
                  Add Experience
                </button>
              </div>
              {formData.experiences.map((exp, index) => (
                <div
                  key={index}
                  className="mb-6 p-4 border border-gray-700 rounded-lg"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        value={exp.title}
                        onChange={(e) =>
                          handleExperienceChange(index, "title", e.target.value)
                        }
                        className="w-full bg-[#1c1c24] rounded-md p-2 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "company",
                            e.target.value
                          )
                        }
                        className="w-full bg-[#1c1c24] rounded-md p-2 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Period
                      </label>
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "period",
                            e.target.value
                          )
                        }
                        className="w-full bg-[#1c1c24] rounded-md p-2 text-white"
                        placeholder="e.g. 2020 - Present"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Skills (comma separated)
                      </label>
                      <input
                        type="text"
                        value={exp.skills.join(", ")}
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "skills",
                            e.target.value
                          )
                        }
                        className="w-full bg-[#1c1c24] rounded-md p-2 text-white"
                        placeholder="React, TypeScript, etc."
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1">
                        Description
                        <span className="text-xs ml-2 text-gray-400">
                          (Use line breaks for bullet points)
                        </span>
                      </label>
                      <textarea
                        value={exp.description}
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                        className="w-full bg-[#1c1c24] rounded-md p-2 text-white h-48 font-mono"
                        placeholder="Enter job description. Use new lines for bullet points."
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => removeExperience(index)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-sm transition-colors"
                    >
                      Remove Experience
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Section */}
            <div className="bg-[#151519] rounded-xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-purple-500">
                  Education
                </h2>
                <button
                  type="button"
                  onClick={addEducation}
                  className="bg-purple-500 hover:bg-purple-600 text-white py-1 px-3 rounded-md text-sm transition-colors"
                >
                  Add Education
                </button>
              </div>
              {formData.education.map((edu, index) => (
                <div
                  key={index}
                  className="mb-6 p-4 border border-gray-700 rounded-lg"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Degree
                      </label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) =>
                          handleEducationChange(index, "degree", e.target.value)
                        }
                        className="w-full bg-[#1c1c24] rounded-md p-2 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Institution
                      </label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) =>
                          handleEducationChange(
                            index,
                            "institution",
                            e.target.value
                          )
                        }
                        className="w-full bg-[#1c1c24] rounded-md p-2 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Period
                      </label>
                      <input
                        type="text"
                        value={edu.period}
                        onChange={(e) =>
                          handleEducationChange(index, "period", e.target.value)
                        }
                        className="w-full bg-[#1c1c24] rounded-md p-2 text-white"
                        placeholder="e.g. 2016 - 2020"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1">
                        Description
                        <span className="text-xs ml-2 text-gray-400">
                          (Use line breaks for bullet points)
                        </span>
                      </label>
                      <textarea
                        value={edu.description}
                        onChange={(e) =>
                          handleEducationChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                        className="w-full bg-[#1c1c24] rounded-md p-2 text-white h-32 font-mono"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => removeEducation(index)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-sm transition-colors"
                    >
                      Remove Education
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

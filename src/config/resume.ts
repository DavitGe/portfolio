export type Skill = {
  name: string;
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  description: string;
};

export type PersonalInfo = {
  name: string;
  title: string;
  email: string;
  location: string;
};

export type ResumeConfig = {
  personalInfo: PersonalInfo;
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
};

// Default resume data
const defaultResumeConfig: ResumeConfig = {
  personalInfo: {
    name: "David Gelovani",
    title: "Full Stack Developer ",
    email: "davit.gelovani403@gmail.com",
    location: "Tbilisi, Georgia",
  },
  skills: [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "TailwindCSS" },
    { name: "Node.js" },
    { name: "Express" },
    { name: "MongoDB" },
    { name: "SQL" },
    { name: "Git" },
    { name: "AWS" },
    { name: "CI/CD" },
  ],
  experiences: [
    {
      title: "Full Stack Developer",
      company: "My Helper",
      period: "Feb 2025 - Present",
      description:
        "Developed a full-stack web application using React, TypeScript, Node.js, MySQL and AWS.",
      skills: ["React", "Node.js", "TypeScript", "MySQL", "AWS"],
    },
    {
      title: "Frontend Developer",
      company: "Whizio",
      period: "Nov 2023 - Present",
      description:
        "* Implemented front-end architecture using React, Ant Design, Zustand. \n* Collaborated with UI/UX Designers, enhancing user experience and facilitating seamless integration with backend systems. \n* Enhanced system efficiency by 25% through implementation of cutting-edge performance and usability practices. \n* Led consultations with existing and potential clients, devising clarity-driven project plans that elevated product usability. \n* Perform code reviews of other team members' work and recommend changes to improve code quality.",
      skills: ["JavaScript", "React", "CSS"],
    },
  ],
  education: [
    {
      degree: "Deep Dive Into Modern Web Development",
      institution: "University of Helsinki",
      period: "Dec 2021 - Apr 2022",
      description:
        "Learned React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go! This course introduced me to modern JavaScript-based web development. The main focus was on building single page applications with ReactJS that use REST APIs built with Node.js.",
    },
    {
      degree: "UI/UX Design",
      institution: "Geolab",
      period: "Jan 2020 - Dec 2021",
      description:
        "In the UI/UX course, I learned essential principles of user interface and user experience design. Topics covered included wireframing, prototyping, user research, and interaction design. I gained hands-on experience with tools like Sketch, Figma, and Adobe XD, improving my ability to create intuitive and visually appealing designs.",
    },
  ],
};

// Storage key for localStorage
const STORAGE_KEY = "portfolio_resume_data";

// Save resume data to localStorage
export const saveResumeData = (data: ResumeConfig): void => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      console.log("Resume data saved successfully");
    } catch (error) {
      console.error("Error saving resume data:", error);
    }
  }
};

// Load resume data from localStorage
export const loadResumeData = (): ResumeConfig => {
  if (typeof window !== "undefined") {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        return JSON.parse(savedData) as ResumeConfig;
      }
    } catch (error) {
      console.error("Error loading resume data:", error);
    }
  }
  return defaultResumeConfig;
};

// Get the current resume configuration
const resumeConfig: ResumeConfig =
  typeof window !== "undefined" ? loadResumeData() : defaultResumeConfig;

export default resumeConfig;

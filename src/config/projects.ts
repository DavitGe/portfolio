export interface ProjectTag {
  name: string;
  color?: string; // Optional custom color for tag
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: ProjectTag[];
  imageUrl?: string; // URL for project image/thumbnail
  projectUrl: string; // Link to live project or GitHub repo
  borderColor?: string; // Optional custom border color for styling variations
  featured?: boolean; // Optional flag to mark featured projects
}

// Define project tags for reuse
export const projectTags = {
  react: { name: "React" },
  typescript: { name: "TypeScript" },
  tailwind: { name: "TailwindCSS" },
  nextjs: { name: "Next.js" },
  nodejs: { name: "Node.js" },
  mongodb: { name: "MongoDB" },
  mysql: { name: "MySQL" },
  // Add more tags as needed
};

// Projects data array
export const projects: Project[] = [
  {
    id: "whizio",
    title: "Whizio",
    description:
      "A landing page for a company I work for. We provide CRM Systems for businesses.",
    tags: [projectTags.react, projectTags.typescript],
    projectUrl: "https://whizio.ge",
    borderColor: "border-blue-400",
    imageUrl: "/images/whizio-screen.webp",
  },
  {
    id: "https://myhelper.ge",
    title: "MyHelper",
    description:
      "A hiring platform connecting workers with job opportunities and helping people find skilled workers for their needs.",
    tags: [
      projectTags.react,
      projectTags.typescript,
      projectTags.nodejs,
      projectTags.mysql,
    ],
    projectUrl: "https://myhelper.ge",
    borderColor: "border-green-400",
    imageUrl: "/images/myhelper-screen.webp",
  },
  {
    id: "2048-game",
    title: "2048 Game",
    description:
      "A simple 2048 game. The player can move the tiles with arrow keys and the game ends when the player reaches 2048.",
    tags: [projectTags.react, projectTags.typescript],
    projectUrl: "https://2048-seven-iota.vercel.app/",
    borderColor: "border-purple-400",
    imageUrl: "/images/2048-screen.webp",
  },
  // Add more projects as needed
];

// Helper function to get shadow class based on border color
export const getShadowClass = (borderColor: string): string => {
  const colorMap: Record<string, string> = {
    "border-blue-400": "shadow-[4px_4px_0px_0px_rgba(96,165,250,0.7)]",
    "border-green-400": "shadow-[4px_4px_0px_0px_rgba(74,222,128,0.7)]",
    "border-purple-400": "shadow-[4px_4px_0px_0px_rgba(192,132,252,0.7)]",
    // Add more mappings as needed
  };

  return (
    colorMap[borderColor] || "shadow-[4px_4px_0px_0px_rgba(121,100,219,0.7)]"
  );
};

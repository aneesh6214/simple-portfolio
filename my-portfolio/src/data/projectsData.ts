export interface Project {
  title: string;
  duration: string;
  technologies: string;
  liveDemo?: string;
  github: string;
  description: string[];
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    duration: "Ongoing",
    technologies: "React, TypeScript, Node.js",
    github: "https://github.com/aneesh6214/simple-portfolio",
    description: [
      "Designed and developed a modern, fully responsive portfolio website using React and TypeScript, emphasizing accessibility and optimal performance across various devices.",
      "Implemented dynamic navigation and interactive UI components, enhancing user experience through smooth transitions and intuitive interfaces.",
      "Configured continuous deployment workflows with Vercel, ensuring seamless updates and reliable hosting for the portfolio application.",
    ],
  },
  {
    title: "Videosharing Web App",
    duration: "May 2023",
    technologies: "Vue.js, Handelbars, HTML/CSS/JS, Node.js, Express.js, MySQL",
    liveDemo: "https://youtu.be/1aQBrA4lg40",
    github: "https://github.com/aneesh6214/csc317-web-app-aneesh6214",
    description: [
      "Ideated, designed, and built a user-friendly video-sharing web application for sharing and managing videos, complete with secure user authentication and personalized sessions.",
      "Implemented file uploads with Multer and FFMpeg-static for video processing, enabling efficient video storage and playback.",
    ],
  },
];

export interface Project {
    title: string;
    type: string;
    technologies: string;
    liveDemo?: string;
    github: string;
    description: string[];
}

export const projects: Project[] = [
    {
        title: "LoL Match Predictor",
        type: "Machine Learning",
        technologies: "Python, tensorflow, Pandas, scikit-learn, Riot API",
        github: "https://github.com/aneesh6214/lol-game-predicter",
        description: [
            "Designed and implemented a machine learning model to predict the outcomes of League of Legends matches based team composition & matchups, enhancing strategic decision-making in competitive gaming.",
            "Conducted extensive data preprocessing and feature engineering to prepare large-scale gaming match data for machine learning algorithms, improving model accuracy and performance.",
            "Developed and evaluated machine learning models to derive actionable insights from complex datasets, enabling data-driven strategies and optimization of game tactics.",
        ],
    },
    {
        title: "Simple Hardware Monitor",
        type: "System Utility",
        technologies: "Python, PyInstaller, Windows Operating System, Resource Path Handling, Git",
        liveDemo: "https://github.com/aneesh6214/simple-HW-monitor/releases/tag/V1.0",
        github: "https://github.com/aneesh6214/simple-HW-monitor",
        description: [
            "Designed and Developed a lightweight system monitoring application in Python using Tkinter, enabling real-time display of CPU and GPU temperatures with customizable 50% opacity overlay in the top-right screen corner.",
            "Integrated OpenHardwareMonitor’s API to retrieve and parse hardware metrics, enhancing user experience through a seamless system tray interface that allows easy toggling (Show/Hide) and exiting of the application.",
            "Packaged the application into a standalone executable using PyInstaller, managing dependencies and ensuring user-friendly deployment by incorporating necessary resources and optimizing for performance."
        ],
    },
    {
        title: "Videosharing Web App",
        type: "Full Stack",
        technologies: "Vue.js, Handelbars, HTML/CSS/JS, Node.js, Express.js, MySQL",
        liveDemo: "https://youtu.be/1aQBrA4lg40",
        github: "https://github.com/aneesh6214/csc317-web-app-aneesh6214",
        description: [
            "Designed and built a user-friendly video-sharing web application for sharing and managing videos, complete with secure user authentication and personalized sessions.",
            "Implemented file uploads with Multer and FFMpeg-static for video processing, enabling efficient video storage and playback.",
        ],
    },
    {
        title: "Portfolio Website",
        type: "Full Stack",
        technologies: "React, TypeScript, Node.js, Vercel, Cloudflare",
        github: "https://github.com/aneesh6214/simple-portfolio",
        description: [
            "Designed and developed a modern, fully responsive portfolio website using React and TypeScript, emphasizing accessibility and optimal performance across various devices.",
            "Implemented dynamic navigation and interactive UI components, enhancing user experience through smooth transitions and intuitive interfaces.",
            "Configured continuous deployment workflows with Vercel, ensuring seamless updates and reliable hosting for the portfolio application.",
        ],
    },
];

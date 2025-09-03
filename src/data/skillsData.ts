export interface SkillCategory {
    category: string;
    skills: string[];
}

export const skillsData: SkillCategory[] = [
    {
        category: "Programming Languages",
        skills: ["Java", "Python", "TypeScript", "C++", "SQL", "HTML/CSS/JS", "Bash", "PowerShell", "R"],
    },
    {
        category: "Web Dev Technologies",
        skills: ["React", "GraphQL", "Node.js", "Next.js", "Express.js", "Django", "Flask", "FastAPI"],
    },
    {
        category: "DevOps & Cloud Computing",
        skills: ["Docker", "Kubernetes", "Git", "OCI", "AWS", "Jira"],
    },
    {
        category: "AI & Machine Learning",
        skills: [
            "PyTorch",
            "TensorFlow",
            "Prompt Engineering",
            "Data Modeling & Analysis",
            "Vector Databases",
            "Retrieval-Augmented Generation (RAG)",
            "Inference Pipelines",
        ],
    },
];
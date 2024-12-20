export interface ExperienceData {
    jobTitle: string;
    jobDuration: string;
    description: string[];
    technologies: string;
}

export const experiences: ExperienceData[] = [
    {
        jobTitle: 'Software Engineering Intern - Oracle Corporation',
        jobDuration: 'May 2024 - Aug 2024',
        description: [
            'Leveraged OCI GenAI Services to develop a full-stack interactive dashboard for operational reporting and integrated AI help tool with Inference Pipelines for context-sensitive user assistance',
            'Engineered backend AI Help tool using Python & Natural Language Processing to enable real-time database retrieval and customer support, enhancing end user experience',
            'Developed within an agile/scrum framework to consistently meet deliverables & plan and execute sprints',
            'Developed customer solutions on Oracle Cloud using API first approach and microservice-based architecture',
        ],
        technologies: 'Python, GraphQL, FastAPI, TypeScript/JavaScript, React, OCI, Docker, Oracle Database',
    },
];
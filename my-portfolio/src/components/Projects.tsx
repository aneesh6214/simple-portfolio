import React from 'react';
import './Projects.scss';
import { FaLink } from 'react-icons/fa';
import { projects } from '../data/projectsData.ts';

const Projects: React.FC = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div className="project-item" key={index}>
                        <div className="project-header">
                            <h3>{project.title}</h3>
                            <div className="project-duration">{project.duration}</div>
                        </div>
                        <ul className="project-description">
                            {project.description.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                        <p className="project-technologies">Technologies: {project.technologies}</p>
                        <ul className="project-links">
                            {project.liveDemo && (<li>
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                    Live Demo <FaLink className="link-icon" />
                                </a>
                            </li>)}
                            <li>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    GitHub <FaLink className="link-icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
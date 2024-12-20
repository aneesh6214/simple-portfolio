import React from 'react';
import './Experience.scss';
import { experiences } from '../data/experienceData.ts';

const Experience: React.FC = () => {
    return (
        <section id="experience">
            <h2>Experience</h2>
            {experiences.map((exp, index) => (
                <div className="experience-item" key={index}>
                    <div className="experience-title">
                        <div className="job-title">{exp.jobTitle}</div>
                        <div className="job-duration">{exp.jobDuration}</div>
                    </div>
                    <ul className="experience-description">
                        {exp.description.map((line, idx) => (
                            <li key={idx}>{line}</li>
                        ))}
                    </ul>
                    <div className="experience-technologies">
                        Technologies: {exp.technologies}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Experience;
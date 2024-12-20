import React, { useState } from "react";
import "./Experience.scss";
import { experiences } from "../data/experienceData.tsx";

const Experience: React.FC = () => {
    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

    const toggleExpand = (index: number) => {
        setExpanded((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <section id="experience">
            <h2>Experience</h2>
            {experiences.map((exp, index) => (
                <div className="experience-item" key={index}>
                    <div className="experience-title">
                        <div className="job-title">{exp.jobTitle}</div>
                        <div className="job-duration">{`(${exp.jobDuration})`}</div>
                    </div>

                    {expanded[index] ? (
                        <div className="experience-long-description">{exp.longDescription} </div>
                    ) : (
                        <ul className="experience-description">
                            {exp.description.map((line, idx) => (
                                <li key={idx}>{line}</li>
                            ))}
                        </ul>
                    )}

                    <div className="experience-technologies">
                        Technologies: {exp.technologies}
                    </div>

                    <span onClick={() => toggleExpand(index)} className="read-more-btn">
                        {expanded[index] ? "Read Less" : "Read More"}
                    </span>
                </div>
            ))}
        </section>
    );
};

export default Experience;
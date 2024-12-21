import React from "react";
import "./Skills.scss";
import { skillsData, SkillCategory } from "../data/skillsData.ts";
import { FaCode, FaDatabase, FaCloud, FaBrain, FaTools } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";

const getCategoryIcon = (category: string) => {
    switch (category) {
        case "Programming Languages":
            return <FaCode />;
        case "Web Dev Technologies":
            return <MdOutlineWebAsset />;
        case "Backend Technologies & Databases":
            return <FaDatabase />;
        case "DevOps & Cloud Computing":
            return <FaCloud />;
        case "AI & Machine Learning":
            return <FaBrain />;
        default:
            return <FaTools />;
    }
};

const Skills: React.FC = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                {skillsData.map((category: SkillCategory, index: number) => (
                    <div className="skill-category" key={index}>
                        <h3>
                            {getCategoryIcon(category.category)} {category.category}
                        </h3>
                        <ul className="skills-list">
                            {category.skills.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
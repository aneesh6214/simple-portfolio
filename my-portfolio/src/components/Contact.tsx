import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.scss";

const Contact: React.FC = () => {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <ul className="contact-list">
                <li>
                    <MdEmail className="contact-icon" />
                    <a href="mailto:aneesh.kumar6214@gmail.com">
                        aneesh.kumar6214@gmail.com
                    </a>
                </li>
                <li>
                    <FaLinkedin className="contact-icon" />
                    <a
                        href="https://www.linkedin.com/in/aneesh6214"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        aneesh6214
                    </a>
                </li>
                <li>
                    <FaGithub className="contact-icon" />
                    <a
                        href="https://github.com/aneesh6214"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        aneesh6214
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Contact;

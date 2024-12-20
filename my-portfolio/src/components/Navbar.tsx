import React from 'react';
import './Navbar.scss';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <span className="location-text"> San Francisco Bay Area </span><FaMapMarkerAlt className="location-icon" />
        </div>
    );
};

export default Navbar;
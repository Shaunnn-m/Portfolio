// src/components/Header.js
import React from 'react';
import './Header.css'; // Importing the CSS file for styling
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    const handleHomeClick = () => navigate("./HomePage");
    const handleAboutClick = () => navigate("/about");

    const handleSkillsClick = () => navigate("/skills");

    const handleProjectsClick = () => {
        console.log('Projects clicked');
    };

    return (
        <header className="Header">
            <div className="logo">Portfolio</div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home" className="nav-link" onClick={handleHomeClick}>Home</a></li>
                    <li><a href="#about" className="nav-link" onClick={handleAboutClick}>About Me</a></li>
                    <li><a href="#skills" className="nav-link" onClick={handleSkillsClick}>Skills</a></li>
                    <li><a href="#projects" className="nav-link" onClick={handleProjectsClick}>Projects</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
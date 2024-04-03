import React, {useEffect, useState} from 'react';
import './SkillSlider.css';
import InstagramIcon from "./Pictures/bxl-instagram.svg";
import WhatsappIcon from "./Pictures/bxl-whatsapp.svg"; // Make sure to create this CSS file
import Typical from 'react-typical';


const skillsData = [
    { name: 'SQL', proficiency: 80 },
    { name: 'Algorithms', proficiency: 75 },
    { name: 'Java', proficiency: 85 },
    { name: 'C#', proficiency: 70 },
    { name: 'C++', proficiency: 80 },
    { name: 'C', proficiency: 75 },
    { name: 'Python', proficiency: 75 },
    { name: 'Git', proficiency: 90 },
    { name: 'Linux', proficiency: 80 },
    { name: 'Computer Networks', proficiency: 70 },
    { name: 'Parallel Programming', proficiency: 65 },
    { name: 'Data Structures', proficiency: 85 },
];

const SkillSlider = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
       
        setLoaded(true);
    }, []);

    return (
        <div id="skills" className="skills-section">
            <Typical
                steps={['', 1000, 'Skills', 500]}
                loop={1}
                wrapper="h2"
            />
            <p className="skills-description">Here are some of the skills I possess, along with an indication of my
                proficiency in each. I'm continually learning and improving, striving to master the technologies I work
                with.</p>

            <div className="skills-grid-container">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <h3 className="skill-name">{skill.name}</h3>
                        <div className="progress-bar-container">
                            <div
                                className={`progress-bar ${loaded ? 'loaded' : ''}`}
                                style={{width: loaded ? `${skill.proficiency}%` : '0%'}}
                            />
                        </div>
                        <span className="skill-percent">{skill.proficiency}%</span>
                    </div>
                ))}
            </div>

            <div className="Socials">
                <a href="https://www.instagram.com/shaunnn_m1?igshid=79lhr0k67ok0" className="social-link"><img
                    src={InstagramIcon} alt="Instagram"/></a>
                <a href="https://wa.me/+27834425504" className="social-link"><img src={WhatsappIcon}
                                                                                  alt="WhatsApp"/></a>
            </div>

        </div>
    );
};

export default SkillSlider;
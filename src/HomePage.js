import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Header from "./Header";
import InstagramIcon from "./Pictures/bxl-instagram.svg";
import WhatsappIcon from './Pictures/bxl-whatsapp.svg';

const HomePage = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = "Hi, I'm Thabang Mokoena,";
    const typingSpeedMs = 70;

    useEffect(() => {
        if (typedText.length < fullText.length) {
            setTimeout(() => {
                setTypedText(fullText.substring(0, typedText.length + 1));
            }, typingSpeedMs);
        }
    }, [typedText, fullText]);

    return (
        <div className="homepage">
            <Header/>
            <div className="Home">
                <div className="overlay-text">
                    <h1>{typedText}</h1>
                    {typedText.length === fullText.length && (
                        <>
                            <h3 style={{ opacity: 0, animation: 'fadeIn 2s forwards', animationDelay: '.5s' }}>a fullstack developer</h3>
                            <p style={{ opacity: 0, animation: 'fadeIn 2s forwards', animationDelay: '1s' }}>
                                I blend front-end creativity with back-end logic to deliver standout digital solutions.
                                Browse my work, dive into my tech toolkit, and let’s connect to bring your ideas to life!
                            </p>
                            <div className="Button">
                                <a href="mailto:shaunthabang835@gmail.com?subject=Job Inquiry&body=Hi Thabang,%0D%0A%0D%0AI came across your portfolio and am interested in discussing a project with you. Please get back to me at your earliest convenience.%0D%0AThank you."
                                   className="hire-me-button">Hire Me</a>

                            </div>
                            <div className="Socials">
                                <a href="https://www.instagram.com/shaunnn_m1?igshid=79lhr0k67ok0"
                                   className="social-link"><img src={InstagramIcon} alt="Instagram"/></a>
                                <a href="https://wa.me/+27834425504" className="social-link"><img src={WhatsappIcon} alt="WhatsApp"/></a>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomePage;

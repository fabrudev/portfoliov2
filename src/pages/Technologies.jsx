import React from 'react';
import './TechnologiesStyles.css'
import html from '../assets/technologies/html.png'

const Technologies = () => {
    return (
        <div className='technologies'>
            <div className="title-container">
                <div className="line"></div>
                <h3>Tecnologías</h3>
                <div className="line"></div>
            </div>
            <div className="technologies-container">
                <div className="technology">
                    <div className="face front">
                        <img src={html} alt="html-icon" />
                    </div>
                    <div className="face back">
                        <p>HTML</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
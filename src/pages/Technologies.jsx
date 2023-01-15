import React from 'react';
import './TechnologiesStyles.css'
import html from '../assets/technologies/html.png';
import css from '../assets/technologies/css.png';
import js from '../assets/technologies/js.png';
import react from '../assets/technologies/react.png';
import redux from '../assets/technologies/redux.png';
import git from '../assets/technologies/git.png';
import github from '../assets/technologies/github.png';
import bt from '../assets/technologies/bt.png';
import figma from '../assets/technologies/figma.png';
import photoshop from '../assets/technologies/photoshop.png'
import Technology from '../components/Technology';

const Technologies = () => {
    return (
        <div className='technologies'>
            <div className="title-container">
                <div className="line"></div>
                <h3>Tecnologías</h3>
                <div className="line"></div>
            </div>
            <div className="technologies-container">
                    <Technology img= {html} title= 'HTML' />
                    <Technology img= {css} title= 'CSS' />
                    <Technology img= {js} title= 'JS' />
                    <Technology img= {react} title= 'REACT' />
                    <Technology img= {redux} title= 'REDUX' />
                    <Technology img= {git} title= 'GIT' />
                    <Technology img= {github} title= 'GITHUB' />
                    <Technology img= {bt} title= 'BT' />
                    <Technology img= {figma} title= 'FIGMA' />
                    <Technology img= {photoshop} title= 'PS' />
            </div>
        </div>
    );
};

export default Technologies;
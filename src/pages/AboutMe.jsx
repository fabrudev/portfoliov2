import React from 'react';
import './AboutMeStyles.css'
import memoji2 from '../assets/memoji2.png'

const AboutMe = () => {
    return (
        <div className='about-me'>
            <img src={memoji2} alt="memoji2" />
            <div className="text-container">
                <h3>¿Quién <span>Soy</span>?</h3>
                <p>
                    Mi nombre es <span>Fabrizio Zarate</span>, me dicen Fabru. <br /> 
                    Soy Desarrollador Frontend, graduado en Academlo (México). <br />
                    Actualmente sigo estudiando en la Academia y de manera autodidacta para ser Full-Stack. <br />
                    Soy amante de los ejercicios de lógica, a todos mis proyectos los realizo con mucho entusiasmo.
                    Me gusta pasar tiempo diseñando para que todo quede PERFECTO. <br />
                    Ademas de todo esto, soy DJ, me encanta la música! 😉 
                </p>
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Córdoba, Argentina</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
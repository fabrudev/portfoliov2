import React from 'react';
import './ContactStyles.css';

const Contact = () => {
    return (
        <div className='contact'>
                <div className="contact-text-container">
                    <h3>Contactame<span>!</span></h3>
                    <p className='text'>Podés contactarme a través de cualquiera de mis redes.</p>
                </div>
                <div className="social-links">
                    <a href="mailto:fabrizarateok@gmail.com" className='send-mail'>
                        <p>Enviame un correo </p>
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/fabrudev/" target='_blank'>
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/FabruDJ" target='_blank'>
                                <i className="fa-brands fa-square-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/543515111022?text=Hola!" target='_blank'>
                                <i className="fa-brands fa-square-whatsapp"></i>
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
    );
};

export default Contact;
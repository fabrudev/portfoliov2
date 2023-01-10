import React from 'react';
import './NavbarStyles.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <p>Fabru-<span>Dev</span></p>
            <ul className='horizontal-menu'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Sobre Mí</a></li>
                <li><a href="#">Tecnologías</a></li>
                <li>
                    <a href="#">Proyectos <i className="fa-solid fa-angle-down"></i></a>
                    <ul className='vertical-menu'>
                        <li><a href="https://store-fabrudev.netlify.app" target='_blank'>E-Commerce</a></li>
                        <li><a href="https://pokedex-fabrudev.netlify.app" target='_blank'>Pokédex</a></li>
                        <li><a href="https://pricingpage-fabrudev.netlify.app" target='_blank'>Pricing Page</a></li>
                        <li><a href="#">Todos</a></li>
                    </ul>
                </li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
    );
};

export default Navbar;
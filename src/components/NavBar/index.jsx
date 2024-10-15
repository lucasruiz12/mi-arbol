import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-container">
            <p>Mi árbol</p>
            <ul className="item-list" >
                <Link>
                <li>
                    Mi huella
                </li>
                </Link>
                <Link>
                <li>
                    Soy carbono neutro
                </li>
                </Link>
                <Link>
                <li>
                    Mis semillas
                </li>
                </Link>
                <Link>
                <li>
                    Mi subscripción
                </li>
                </Link>
            </ul>
            <p>Imagen</p>
        </nav>
    );
};

export default NavBar;
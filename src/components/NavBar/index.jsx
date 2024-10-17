import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-container">
            <p>Mi árbol</p>
            <ul className="item-list" >
                <Link to="/home" className={`navbar-container-btn ${window.location.pathname === "/home" ? "active-btn" : ""}`}>
                    <li className="navbar-item">
                        Mi huella
                    </li>
                </Link>
                <Link to="/neutralCarbon" className={`navbar-container-btn ${window.location.pathname === "/neutralCarbon" ? "active-btn" : ""}`}>
                    <li className="navbar-item">
                        Soy carbono neutro
                    </li>
                </Link>
                <Link to="/mySubscription" className={`navbar-container-btn ${window.location.pathname === "/MySubscription" ? "active-btn" : ""}`}>
                    <li className="navbar-item">
                        Mi subscripción
                    </li>
                </Link>
                <Link to="/mySeeds" className={`navbar-container-btn ${window.location.pathname === "/mySeeds" ? "active-btn" : ""}`}>
                    <li className="navbar-item">
                        Mis semillas
                    </li>
                </Link>
            </ul>
            <p>Imagen</p>
        </nav>
    );
};

export default NavBar;
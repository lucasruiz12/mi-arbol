import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../firebase/connections';
import logoArbol from '../../assets/logos/logo-TAO-brown.svg';
import './style.css';

const NavBar = () => {
    return (
        <nav className="nav-container">
            <img className="nav-logo" src={logoArbol} alt="LOG" />
            <ul className="item-list" >
                <Link to="/home" className={`navbar-container-btn ${window.location.pathname === "/home" ? "active-btn" : ""}`}>
                    <li className="navbar-item">
                        Mi huella
                    </li>
                </Link>
                {/* <Link to="/neutralCarbon" className={`navbar-container-btn ${window.location.pathname === "/neutralCarbon" ? "active-btn" : ""}`}> */}
                <Link to="/home" className={`navbar-container-btn ${window.location.pathname === "/neutralCarbon" ? "active-btn" : ""}`}>
                    <li className="navbar-item">
                        Soy carbono neutro
                    </li>
                </Link>
                {/* <Link to="/mySubscription" className={`navbar-container-btn ${window.location.pathname === "/mySubscription" ? "active-btn" : ""}`}> */}
                <Link to="/home" className={`navbar-container-btn ${window.location.pathname === "/mySubscription" ? "active-btn" : ""}`}>
                    <li className="navbar-item">
                        Mi subscripción
                    </li>
                </Link>
                {/* <Link to="/mySeeds" className={`navbar-container-btn ${window.location.pathname === "/mySeeds" ? "active-btn" : ""}`}> */}
                <Link to="/home" className={`navbar-container-btn ${window.location.pathname === "/mySeeds" ? "active-btn" : ""}`}>
                    <li className="navbar-item">
                        Mis semillas
                    </li>
                </Link>
            </ul>
            <p style={{cursor: "pointer"}} onClick={() => logout()}>LOGOUT</p>
        </nav>
    );
};

export default NavBar;
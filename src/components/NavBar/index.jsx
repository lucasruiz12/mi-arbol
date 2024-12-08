import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../firebase/connections';
import logoArbol from '../../assets/logos/logo-TAO-brown.svg';
import iconTree from '../../assets/icons/icon-tree.svg';
import './style.css';

const NavBar = () => {
    return (
        <nav className="nav-container">
            <img className="nav-logo" src={logoArbol} alt="LOG" />
            <ul className="item-list" >
                <Link to="/home" className={`navbar-container-btn ${window.location.pathname === "/home" ? "active-btn" : ""}`}>
                    <li className="navbar-item">
                        <img src={iconTree} alt="NOIC" className="navbar-icon" />
                        <p>
                            Mi huella
                        </p>
                    </li>
                </Link>
                {/* <Link to="/neutralCarbon" className={`navbar-container-btn ${window.location.pathname === "/neutralCarbon" ? "active-btn" : ""}`}> */}
                <Link to="/home" className={`navbar-container-btn ${window.location.pathname === "/neutralCarbon" ? "active-btn" : ""}`}>
                    <li className="navbar-item">
                        <img src={iconTree} alt="NOIC" className="navbar-icon" />
                        <p>
                            Soy carbono neutro
                        </p>
                    </li>
                </Link>
                {/* <Link to="/mySubscription" className={`navbar-container-btn ${window.location.pathname === "/mySubscription" ? "active-btn" : ""}`}> */}
                <Link to="/home" className={`navbar-container-btn ${window.location.pathname === "/mySubscription" ? "active-btn" : ""}`}>
                    <li className="navbar-item">
                        <img src={iconTree} alt="NOIC" className="navbar-icon" />
                        <p>
                            Mi subscripción
                        </p>
                    </li>
                </Link>
                {/* <Link to="/mySeeds" className={`navbar-container-btn ${window.location.pathname === "/mySeeds" ? "active-btn" : ""}`}> */}
                <Link to="/home" className={`navbar-container-btn ${window.location.pathname === "/mySeeds" ? "active-btn" : ""}`}>
                    <li className="navbar-item">
                        <img src={iconTree} alt="NOIC" className="navbar-icon" />
                        <p>
                            Mis semillas
                        </p>
                    </li>
                </Link>
            </ul>
            <p className="navbar-logout" onClick={() => logout()}>LOGOUT</p>
        </nav>
    );
};

export default NavBar;
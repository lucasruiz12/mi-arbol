import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../firebase/connections';
import logoArbol from '../../assets/logos/logo-TAO-brown.svg';
import iconTrace from '../../assets/icons/navbar/icon-trace.svg';
import iconNeutral from '../../assets/icons/navbar/icon-neutral.svg';
import iconSubscription from '../../assets/icons/navbar/icon-subscription.svg';
import iconSeeds from '../../assets/icons/navbar/icon-seeds.svg';
import iconLogout from '../../assets/icons/navbar/icon-logout.svg';
import './style.css';

const NavBar = () => {
    return (
        <nav className="nav-container">
            <img className="nav-logo" src={logoArbol} alt="LOG" />
            <ul className="item-list" >
                <Link to="/home" className={`navbar-container-btn ${window.location.pathname === "/home" ? "active-btn" : ""}`}>
                    <li className="navbar-item">
                        <img src={iconTrace} alt="NOIC" className="navbar-icon" />
                        <p>
                            Mi huella
                        </p>
                    </li>
                </Link>
                {/* <Link to="/neutralCarbon" className={`navbar-container-btn ${window.location.pathname === "/neutralCarbon" ? "active-btn" : ""}`}> */}
                <Link to="/home" className={`navbar-container-btn ${window.location.pathname === "/neutralCarbon" ? "active-btn" : ""}`}>
                    <li className="navbar-item">
                        <img src={iconNeutral} alt="NOIC" className="navbar-icon" />
                        <p>
                            Soy carbono neutro
                        </p>
                    </li>
                </Link>
                {/* <Link to="/mySubscription" className={`navbar-container-btn ${window.location.pathname === "/mySubscription" ? "active-btn" : ""}`}> */}
                <Link to="/home" className={`navbar-container-btn ${window.location.pathname === "/mySubscription" ? "active-btn" : ""}`}>
                    <li className="navbar-item">
                        <img src={iconSubscription} alt="NOIC" className="navbar-icon" />
                        <p>
                            Mi subscripción
                        </p>
                    </li>
                </Link>
                {/* <Link to="/mySeeds" className={`navbar-container-btn ${window.location.pathname === "/mySeeds" ? "active-btn" : ""}`}> */}
                <Link to="/home" className={`navbar-container-btn ${window.location.pathname === "/mySeeds" ? "active-btn" : ""}`}>
                    <li className="navbar-item">
                        <img src={iconSeeds} alt="NOIC" className="navbar-icon" />
                        <p>
                            Mis semillas
                        </p>
                    </li>
                </Link>
            </ul>
            <div className="navbar-item logout">
                <img src={iconLogout} alt="NOIC" className="navbar-icon" />
                <p className="navbar-logout" onClick={() => logout()}>Cerrar sesión</p>
            </div>
        </nav>
    );
};

export default NavBar;
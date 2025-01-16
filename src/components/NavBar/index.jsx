import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { logout } from '../../firebase/connections';
import logoArbol from '../../assets/logos/logo-TAO-white.svg';
import iconTrace from '../../assets/icons/navbar/icon-trace.svg';
import iconNeutral from '../../assets/icons/navbar/icon-neutral.svg';
import iconSubscription from '../../assets/icons/navbar/icon-subscription.svg';
import iconSeeds from '../../assets/icons/navbar/icon-seeds.svg';
import iconLogout from '../../assets/icons/navbar/icon-logout.svg';
import LogOutDropdown from '../LogOutDropdown';
import { useAuth0 } from '@auth0/auth0-react';
// import ModalConfirmLogout from '../Modals/ModalConfirmLogout';
import './style.css';

const NavBar = () => {

    const { logout } = useAuth0();

    const handleLogout = () => {
        localStorage.clear();
        logout();
        window.location.href = "/";
    };

    return (
        <nav className="nav-container">
            <img className="nav-logo" src={logoArbol} alt="LOG" />
            <ul className="item-list" >
                <Link to="/home" className={`navbar-container-btn ${window.location.pathname === "/home" ? "active-btn" : ""}`}>
                    <li className="navbar-item">
                        <img src={iconTrace} alt="NOIC" className="navbar-icon" />
                        <p style={{ color: "white" }}>
                            Mi huella
                        </p>
                    </li>
                </Link>
                <Link to="/neutralCarbon" className={`navbar-container-btn ${window.location.pathname === "/neutralCarbon" ? "active-btn" : ""}`}>
                    {/* <Link to="/home" className={`navbar-container-btn ${window.location.pathname === "/neutralCarbon" ? "active-btn" : ""}`}> */}
                    <li className="navbar-item">
                        <img src={iconNeutral} alt="NOIC" className="navbar-icon" />
                        <p style={{ color: "white" }}>
                            Soy carbono neutro
                        </p>
                    </li>
                </Link>
                {/* <Link to="/mySeeds" className={`navbar-container-btn ${window.location.pathname === "/mySeeds" ? "active-btn" : ""}`}> */}
                <Link to="/subscriptionPlans" className={`navbar-container-btn ${window.location.pathname === "/subscriptionPlans" ? "active-btn" : ""}`}>
                    {/* <Link to="/home" className={`navbar-container-btn ${window.location.pathname === "/mySubscription" ? "active-btn" : ""}`}> */}
                    <li className="navbar-item">
                        <img src={iconSubscription} alt="NOIC" className="navbar-icon" />
                        <p style={{ color: "white" }}>
                            Planes de suscripción
                        </p>
                    </li>
                </Link>
                <Link to="/mySeeds" className={`navbar-container-btn ${window.location.pathname === "/mySeeds" ? "active-btn" : ""}`}>
                    <li className="navbar-item">
                        <img src={iconSeeds} alt="NOIC" className="navbar-icon" />
                        <p style={{ color: "white" }}>
                            Mis semillas
                        </p>
                    </li>
                </Link>
            </ul>
            <div className="navbar-item logout">
                <img onClick={() => handleLogout()} src={iconLogout} alt="NOIC" className="navbar-icon" />
                {/* <img onClick={() => setShowModal(true)} src={iconLogout} alt="NOIC" className="navbar-icon" /> */}
                {/* <LogOutDropdown openModal={() => setShowModal(true)} /> */}
                <LogOutDropdown openModal={() => handleLogout()} />
            </div>
            {/* <div>
            
            {
                showModal && <ModalConfirmLogout showModal={showModal} handleClose={() => setShowModal(false)} handleConfirm={() => logout()} />
            }
                    </div> */}
        </nav>
    );
};

export default NavBar;
import React from 'react';
import logoArbol from '../../assets/logos/logo-TAO-white.svg';
import iconLogout from '../../assets/icons/navbar/icon-logout.svg';
import LogOutDropdown from '../LogOutDropdown';
import { useAuth0 } from '@auth0/auth0-react';
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
            <div className="navbar-item logout">
                <img onClick={() => handleLogout()} src={iconLogout} alt="NOIC" className="navbar-icon" />
                <LogOutDropdown openModal={() => handleLogout()} />
            </div>
        </nav>
    );
};

export default NavBar;
import React from 'react';
import logoArbol from '../../assets/logos/logo-mas-raices.png';
import './style.css';

const LoadingLogo = () => {
  return (
    <div className="loading-logo-container">
      <img
        className="loading-logo"
        src={logoArbol}
        alt="Logo"
      />
    </div>
  );
};

export default LoadingLogo;
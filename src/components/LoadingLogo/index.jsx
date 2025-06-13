import React from 'react';
import logoArbol from '../../assets/logos/logo-TAO-white.svg';
import './style.css';

const LoadingLogo = () => {
  return (
    <div className="loading-logo-container d-flex justify-content-center align-items-center min-vh-100 w-100">
      <img
        className="loading-logo"
        src={logoArbol}
        alt="Logo"
      />
    </div>
  );
};

export default LoadingLogo;
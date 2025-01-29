import React from 'react';
import logoArbol from '../../assets/logos/logo-TAO-white.svg';
import './style.css';

const LoadingLogo = () => {
  return (
    <div className="loading-logo-container">
      <img className="loading-logo" src={logoArbol} alt="LOG" />
    </div>
  );
};

export default LoadingLogo;
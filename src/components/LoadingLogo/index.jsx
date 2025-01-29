import React from 'react';
import logoArbol from '../../assets/logos/logo-TAO-white.svg';
import './style.css';
import { useAuth0 } from '@auth0/auth0-react';

const LoadingLogo = () => {

  const { logout } = useAuth0();

  return (
    <div className="loading-logo-container">
      <img className="loading-logo" src={logoArbol} alt="LOG" />
      <button onClick={() => logout()}>Cerrar sesión</button>
    </div>
  );
};

export default LoadingLogo;
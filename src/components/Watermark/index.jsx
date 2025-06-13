import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logoTAOWhite from '../../assets/logos/logo-TAO-white.svg';
import logoTAOBrown from '../../assets/logos/logo-TAO-brown.svg';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import './style.css';

const Watermark = () => {
  const [showMark, setShowMark] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const isAuthenticated = JSON.parse(localStorage.getItem(IS_AUTHENTICATED) || 'false');
      const isHidden = (isAuthenticated || pathname === '/registerForm' || pathname === '/loginForm') && window.innerWidth < 768;
      setShowMark(!isHidden);
    };

    handleResize(); // Ejecutar al montar
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pathname]); // Dependencia en pathname

  return (
    <div className={showMark ? 'watermark' : 'water-none'}>
      <span>Powered by</span>
      <img
        src={pathname === '/initQuestions' ? logoTAOBrown : logoTAOWhite}
        alt="Logo de Más Raíces, Menos Huella"
      />
    </div>
  );
};

export default Watermark;
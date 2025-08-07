import React, { useEffect, useState } from 'react';
import logoArbol from '../../assets/logos/logo-mas-raices.png';
import logoArbol2 from '../../assets/logos/GRIS.png';
import { tipsAndRecommendations } from '../../helpers/messagesAndTips';
import './style.css';

const OurMission = ({ setView }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [hideMessage, setHideMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [notTimer, setNotTimer] = useState(false);

  const handleClick = () => {
    setView(2);
    setNotTimer(true);
    removeClick();
  };

  const removeClick = () => {
    document.removeEventListener('click', handleClick);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => removeClick();
  }, []);

  useEffect(() => {
    if (!notTimer) {
      if (showMessage) {
        setTimeout(() => {
          setShowMessage(false);
          if (currentMessage === 3) {
            setView(2);
            removeClick();
          }
        }, 8000);
      } else {
        if (currentMessage === '') {
          setCurrentMessage(0);
        } else {
          if (currentMessage < 3) {
            setCurrentMessage(currentMessage + 1);
          }
        }
        setTimeout(() => {
          setShowMessage(true);
          setHideMessage(false);
        }, 1000);
      }
    }
  }, [showMessage]);

  return (
    <div className="container-mission-view container-fluid">
      {/* Fila 1: Logo y mission tips */}
      <div className="row align-items-center mb-4 justify-content-center">
        <div className="col-12 col-md-4 col-lg-3 text-center d-flex justify-content-center align-items-center" style={{ 
          justifyContent: window.innerWidth >= 1920 && window.innerWidth < 2560 ? 'flex-start' : 'center',
          marginLeft: window.innerWidth >= 2560 ? '-2rem' : window.innerWidth >= 1920 && window.innerWidth < 2560 ? '2rem' : '0'
        }}>
          <img
            className="mission-logo"
            src={logoArbol2}
            alt="Logo de Más Raíces, Menos Huella"
            style={{
              margin: '0 auto',
              display: 'block',
              transform: window.innerWidth >= 2560 ? 'translateX(-2rem)' : 'none',
              height: window.innerWidth >= 2560 ? '450px !important' : 
                     window.innerWidth >= 1920 ? '320px !important' : 
                     window.innerWidth >= 1440 ? '280px !important' : '180px !important',
              maxHeight: window.innerWidth >= 2560 ? '450px !important' : 
                        window.innerWidth >= 1920 ? '320px !important' : 
                        window.innerWidth >= 1440 ? '280px !important' : '180px !important',
              marginRight: window.innerWidth >= 2560 ? '25% !important' : 'auto'
            }}
          />
        </div>

      </div>
      {/* Fila 2: Mission text */}
      <div className="row">
        <div className="col-12 col-md-8 offset-md-1">
          <div className="mission-text" style={{ marginLeft: '3rem' }}>
            <p className="mission-line-text">
              En "Más Raíces, Menos Huella" te ayudamos a calcular tus emisiones diarias para entender el impacto que tienes como persona.
            </p>
            <p className="mission-line-text">
              Al entender cuanto CO2 generas, te ayudaremos a reforestar los suficientes árboles para mitigar tu huella de carbono.
            </p>
            {/* Tips debajo del texto en tablet/móvil */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
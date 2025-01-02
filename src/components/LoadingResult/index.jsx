import React from 'react';
import logoResult from '../../assets/gifs/gif-mundo-loader.gif';
import './style.css';

const LoadingResult = () => {
  return (
    <div className="loading-result-container">
      <img className="loading-result" src={logoResult} alt="LOG" />
      <p className="loading-text">Calculando resultados</p>
    </div>
  );
};

export default LoadingResult;
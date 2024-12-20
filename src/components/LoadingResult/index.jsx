import React from 'react';
import logoResult from '../../assets/logos/gif-result.png';
import './style.css';

const LoadingResult = () => {
  return (
    <div className="loading-result-container">
      <img className="loading-result" src={logoResult} alt="LOG" />
    </div>
  );
};

export default LoadingResult;
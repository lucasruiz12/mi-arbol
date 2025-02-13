import React from 'react';
import logoResult from '../../assets/gifs/gif-mundo-loader.gif';
import './style.css';

const LoadingResult = ({ message }) => {
  return (
    <div className="loading-result-container">
      <img className="loading-result" src={logoResult} alt="LOG" />
      <p className="loading-text">{message}</p>
    </div>
  );
};

export default LoadingResult;
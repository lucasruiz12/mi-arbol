import React from 'react';
import backArrow from '../../assets/icons/cartoon/back-arrow.svg';
import './style.css';

const BackArrow = ({ handleAction, customMargin }) => {

    return (
        <div className="container-arrow-back" style={{ top: customMargin || "80%" }}>
            <img onClick={() => handleAction()} className="img-arrow-back" src={backArrow} alt="<=" />
        </div>
    );
};

export default BackArrow;
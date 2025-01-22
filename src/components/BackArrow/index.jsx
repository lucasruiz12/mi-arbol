import React from 'react';
import backArrow from '../../assets/icons/cartoon/back-arrow.svg';
import './style.css';

const BackArrow = ({ handleAction }) => {

    // const handleTouchStart = (e) => {
    //     e.target.classList.add('disable-hover');
    //     setTimeout(() => {
    //         e.target.classList.remove('disable-hover');
    //     }, 500);
    // };

    return (
        <div className="container-arrow-back">
            <img onClick={() => handleAction()} className="img-arrow-back" src={backArrow} alt="<=" />
        </div>
    );
};

export default BackArrow;
import React, { useEffect, useState } from 'react';
import logoTAO from '../../assets/logos/logo-TAO-white.svg'; // Asegúrate de importar tu logo SVG.
import './style.css';

const Watermark = ({ currentLocation }) => {

    const [showMark, setShowMark] = useState(true);

    useEffect(() => {
        if((currentLocation === "/home" || currentLocation === "/registerForm" || currentLocation === "/loginForm") && window.innerWidth < 768){
            setShowMark(false);
        }
    },[]);

    return (
        <div className={showMark ? "watermark" : "water-none"}>
            <span>Powered by</span>
            <img src={logoTAO} alt="Company Logo" />
        </div>
    );
};

export default Watermark;
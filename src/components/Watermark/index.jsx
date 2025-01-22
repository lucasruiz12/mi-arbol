import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logoTAOWhite from '../../assets/logos/logo-TAO-white.svg';
import logoTAOBrown from '../../assets/logos/logo-TAO-brown.svg';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import './style.css';

const Watermark = () => {

    const [showMark, setShowMark] = useState(true);
    const {pathname} = useLocation();

    useEffect(() => {
        const isAuthenticated = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));

        if ((isAuthenticated || pathname === "/registerForm" || pathname === "/loginForm") && window.innerWidth < 768) {
            setShowMark(false);
        }
    }, []);

    return (
        <div className={showMark ? "watermark" : "water-none"}>
            <span>Powered by</span>
            <img src={pathname === "/initQuestions" ? logoTAOBrown : logoTAOWhite} alt="Company Logo" />
        </div>
    );
};

export default Watermark;
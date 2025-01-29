import React, { useEffect, useState } from 'react';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import LoadingLogo from '../../components/LoadingLogo';
import OurMission from '../../components/OurMission';
import FirstSteps from '../../components/FirstSteps';
import './style.css';

const LandingHome = () => {

    const [view, setView] = useState(1);
    const [loading, setLoading] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleChangeView = (newView) => {
        setIsAnimating(true);
        setLoading(true);
        setTimeout(() => {
            setView(newView);
            setIsAnimating(false);
            setLoading(false);
        }, 500);
    };

    useEffect(() => {
        
        const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));

        if (user) {
            window.location.href = "/home";
        };

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div className={`container-landing-home ${isAnimating ? 'animating' : ''}`}>
            {
                loading ? (
                    <LoadingLogo />
                ) : view === 1 ? (
                    <div className="slide-container slide-out">
                        <OurMission view={view} setView={handleChangeView} />
                    </div>
                ) : (
                    <div className={`slide-container slide-in`}>
                        <FirstSteps setView={handleChangeView} />
                    </div>
                )
            }
        </div>
    );
}

export default LandingHome;

import React, { useEffect, useState } from 'react';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import LoadingLogo from '../../components/LoadingLogo';
import OurMission from '../../components/OurMission';
import FirstSteps from '../../components/FirstSteps';
import './style.css';

const LandingHome = () => {

    const [view, setView] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));

        if (user) {
            window.location.href = "/home";
        };

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="container-landing-home">
            {
                loading ?
                    <LoadingLogo />
                    :
                    view === 1 ?
                        <OurMission setView={setView} />
                        :
                        <FirstSteps />
            }
        </div>
    )
}

export default LandingHome;
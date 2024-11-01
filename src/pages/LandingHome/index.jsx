import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import LoadingLogo from '../../components/LoadingLogo';
import './style.css';

const LandingHome = () => {

    const [image, setImage] = useState("LandingHome");
    const [loading, setLoading] = useState(true);

    const goToNext = (pageToGo) => {
        setImage(pageToGo);
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));

        if (user) {
            window.location.href = "/home";
        };

        setTimeout(() => {
            setLoading(false);
        }, 1000);

        setTimeout(() => {
            setImage("Nuestra misión");
        }, 3000);
    }, []);

    return (
        <div className="container-landing-home">
            {
                loading ?
                    <LoadingLogo />
                    :
                    <div>
                        {
                            <p>
                                {image}
                            </p>
                        }
                        {
                            image === "LandingHome" ? null : image === "Nuestra misión" ?
                                <button className="btn-green" onClick={() => goToNext("El primer paso")}>
                                    Empezar
                                </button>
                                :
                                <Link to="/loginForm">
                                    <button className="btn-green">
                                        Empezar
                                    </button>
                                </Link>
                        }
                    </div>
            }
        </div>
    )
}

export default LandingHome;
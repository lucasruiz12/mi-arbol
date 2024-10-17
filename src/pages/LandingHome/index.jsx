import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const LandingHome = () => {

    const [image, setImage] = useState("LandingHome");

    const goToNext = (pageToGo) => {
        setImage(pageToGo);
    };

    useEffect(() => {
        setTimeout(() => {
            setImage("Nuestra misión");
        }, 3000);
    }, []);

    return (
        <div className="container-landing-home">
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
                        <Link to="/registerForm">
                            <button className="btn-green">
                                Registrarse
                            </button>
                        </Link>
                }
            </div>
        </div>
    )
}

export default LandingHome;
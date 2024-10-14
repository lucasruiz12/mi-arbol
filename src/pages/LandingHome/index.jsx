import React, { useEffect, useState } from 'react';
import './style.css';
import Register from '../../components/Register';

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
                    image !== "Registrarse" ?
                        <p>
                            {image}
                        </p>
                        :
                        <Register />
                }
                {
                    image !== "LandingHome" && image !== "Registrarse" &&
                    <button onClick={() => image === "Nuestra misión" ? goToNext("El primer paso") : image === goToNext("Registrarse")}>
                        {image === "Nuestra misión" ? "Empezar" : "Registrarse"}
                    </button>
                }
            </div>
        </div>
    )
}

export default LandingHome;
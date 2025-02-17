import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { CARBON_POINTS, CATEGORY_POINTS, IS_AUTHENTICATED } from '../../helpers/constants';
import { Link, useNavigate } from 'react-router-dom';
import gifLow from '../../assets/gifs/gif-mundo-bajo.gif';
import gifMedium from '../../assets/gifs/gif-mundo-medio.gif';
import gifHigh from '../../assets/gifs/gif-mundo-alto.gif';
import GraphicsHome from '../../components/Graphics/Home';

import './style.css';

const Home = () => {

    const [carbonPoints, setCarbonPoints] = useState(0);
    const [categoryPoints, setCategoryPoints] = useState(0);
    const navigate = useNavigate();

    const getImpact = (points) => {
        if (points > 10) {
            return "ALTO"
        } else if (points > 8) {
            return "MEDIO"
        } else {
            return "BAJO";
        };
    };

    const getAgent = () => {

        const impact = getImpact(carbonPoints);

        switch (impact) {
            case "ALTO":
                return gifHigh;
            case "MEDIO":
                return gifMedium;
            case "BAJO":
                return gifLow;
            default:
                break;
        };
    };

    const formattedNumber = (number) => {

        const formatNumber = new Intl.NumberFormat('es-ES', {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
        }).format(number);

        return formatNumber;
    };

    useEffect(() => {
        if (JSON.parse(localStorage.getItem(CARBON_POINTS))) {
            setCarbonPoints(JSON.parse(localStorage.getItem(CARBON_POINTS)));
            setCategoryPoints(JSON.parse(localStorage.getItem(CATEGORY_POINTS)));
        } else if (JSON.parse(localStorage.getItem(IS_AUTHENTICATED))?.carbonPoints) {
            setCarbonPoints(JSON.parse(localStorage.getItem(IS_AUTHENTICATED)).carbonPoints);
            setCategoryPoints(JSON.parse(localStorage.getItem(IS_AUTHENTICATED))?.categoryPoints || "");
        } else {
            navigate("/initQuestions");
        };
    }, []);

    return (
        <div className={`container-home`}>
            <NavBar />
            <div className="container-home-content">
                <div className="home-info">
                    <div className="home-user-data">
                        <div>
                            <h5 className="home-text">Tu huella de carbono es: </h5>
                            <h1 className="home-number">{formattedNumber(carbonPoints)} Tons CO2 Eq.</h1>
                            <h2 className="home-invitation">¡Mitiga tu huella al 100% sembrando <b>{Math.ceil(carbonPoints / 0.015)} árboles</b>!</h2>
                        </div>
                        <div className="home-result">
                            <div className="home-container-img">
                                <img className="result-img" src={getAgent()} alt="NOIM" />
                            </div>
                            <div className="home-result-text">
                                <h2 className="home-status">Tienes un <b>IMPACTO {getImpact(carbonPoints)}</b></h2>
                                <Link className="btn-container-link" to="/neutralCarbon">
                                    <button className="btn-green">¡Mitigar mi huella!</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="home-user-graphics">
                        <GraphicsHome carbonPoints={parseFloat(carbonPoints).toFixed(3)} categoryPoints={categoryPoints} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
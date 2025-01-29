import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { CARBON_POINTS, IS_AUTHENTICATED } from '../../helpers/constants';
import { Link, useNavigate } from 'react-router-dom';
// import { IS_AUTHENTICATED } from '../../helpers/constants';
// import LoadingLogo from '../../components/LoadingLogo';
// import badWorld from '../../assets/images/image-bad-world.png';
// import carbonFormula from '../../assets/images/image-carbon-formula.png';
// import goodWorld from '../../assets/images/image-good-world.png';
import gifLow from '../../assets/gifs/gif-mundo-bajo.gif';
import gifMedium from '../../assets/gifs/gif-mundo-medio.gif';
import gifHigh from '../../assets/gifs/gif-mundo-alto.gif';
import GraphicsHome from '../../components/Graphics/Home';

import './style.css';

const Home = () => {

    const [carbonPoints, setCarbonPoints] = useState(0);
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
        } else if (JSON.parse(localStorage.getItem(IS_AUTHENTICATED))?.carbonPoints) {
            setCarbonPoints(JSON.parse(localStorage.getItem(IS_AUTHENTICATED)).carbonPoints);
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
                            <h1 className="home-number">{formattedNumber(carbonPoints)} tons CO2</h1>
                        </div>
                        <div className="home-result">
                            <div className="home-container-img">
                                <img className="result-img" src={getAgent()} alt="NOIM" />
                            </div>
                            <div className="home-result-text">
                                <h2 className="home-status">Eres <b>IMPACTO {getImpact(carbonPoints)}</b></h2>
                                <h5 className="home-invitation">Plantando <b>{Math.ceil(carbonPoints / 0.015)} árboles</b> en un año puede disminuir su impacto. Modifique sus hábitos y empiece a disminuir su impacto</h5>
                                <Link className="btn-container-link" to="/neutralCarbon">
                                    <button className="btn-green">Mitigar tu huella</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="home-user-graphics">
                        <GraphicsHome carbonPoints={parseFloat(carbonPoints).toFixed(3)} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
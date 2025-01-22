import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { CARBON_POINTS } from '../../helpers/constants';
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

    // const [loading, setLoading] = useState(true);
    // const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED)).displayName;

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 3000);
    // }, []);

    const [carbonPoints, setCarbonPoints] = useState(0);
    const [fullLoading, setFullLoading] = useState(false);

    const navigate = useNavigate();

    const getImpact = (points) => {
        if (points > 7000) {
            return "ALTO"
        } else if (points > 5000) {
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
            minimumFractionDigits: 1,  // Mínimo 1 decimal
            maximumFractionDigits: 1,  // Máximo 1 decimal
        }).format(number);

        return formatNumber;
    };

    useEffect(() => {
        if (JSON.parse(localStorage.getItem(CARBON_POINTS))) {
            setCarbonPoints(JSON.parse(localStorage.getItem(CARBON_POINTS)) * 1000);
            setFullLoading(true);
        } else {
            console.log(navigate);
            navigate("/initQuestions");
        };
    }, []);

    return (
        fullLoading &&
        <div className={`container-home`}>
            <NavBar />
            <div className="container-home-content">
                <div className="home-info">
                    <div className="home-user-data">
                        <div>
                            <h5 className="home-text">Tu huella de carbono es: </h5>
                            <h1 className="home-number">{formattedNumber(carbonPoints)}kg CO2</h1>
                        </div>
                        <div className="home-result">
                            <div className="home-container-img">
                                {/* <div className="home-container-examples">
                                    <div className="home-example">
                                        <img className="example-img" src={gifLow} alt="NOIM" />
                                        <p className="example-text">Impacto bajo</p>
                                    </div>
                                    <div className="home-example">
                                        <img className="example-img" src={gifMedium} alt="NOIM" />
                                        <p className="example-text">Impacto medio</p>
                                    </div>
                                    <div className="home-example">
                                        <img className="example-img" src={gifHigh} alt="NOIM" />
                                        <p className="example-text">Impacto alto</p>
                                    </div>
                                </div> */}
                                <img className="result-img" src={getAgent()} alt="NOIM" />

                            </div>
                            <div className="home-result-text">
                                <h2 className="home-status">Eres <b>IMPACTO {getImpact(carbonPoints)}</b></h2>
                                <h5 className="home-invitation">Plantando <b>{Math.ceil(carbonPoints / 15)} árboles</b> en un año puede disminuir su impacto. Modifique sus hábitos y empiece a disminuir su impacto</h5>
                                <Link className="btn-container-link" to="/neutralCarbon">
                                    <button className="btn-green">Mitigar tu huella</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="home-user-graphics">
                        <GraphicsHome carbonPoints={carbonPoints} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
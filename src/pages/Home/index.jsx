import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
// import { IS_AUTHENTICATED } from '../../helpers/constants';
import LoadingLogo from '../../components/LoadingLogo';
import badWorld from '../../assets/images/image-bad-world.png';
import carbonFormula from '../../assets/images/image-carbon-formula.png';
// import goodWorld from '../../assets/images/image-good-world.png';
import videoTAO from '../../assets/videos/home/siembra-TAO.mp4';

import './style.css';
import { Link } from 'react-router-dom';

const Home = () => {

    const [loading, setLoading] = useState(true);
    // const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED)).displayName;

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div className={loading ? `container-home` : `container-home with-back`}>
            {
                loading ?
                    <LoadingLogo />
                    :
                    <>
                        <NavBar />
                        <div className="container-home-content">
                            <div className="home-info">
                                <div className="home-user-data">
                                    <div>
                                        <h5 className="home-text">Tu huella de carbono es: </h5>
                                        <h1 className="home-number">9.000kg CO2</h1>
                                    </div>
                                    <div className="home-result">
                                        <img className="result-img" src={badWorld} alt="NOIM" />
                                        <div className="home-result-text">
                                            <h2 className="home-status">Eres <b>AGENTE DE DESBALANCE</b></h2>
                                            <h5 className="home-invitation">Su acción actual está generando un impacto ambiental adverso. Le invitamos a ser parte del cambio hacia un equilibrio sostenible.</h5>
                                            <Link className="btn-container-link" to="/mySubscription">
                                                <button className="btn-green">Mitigar tu huella</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-user-graphics">
                                    {/* <h3 className="home-formula">Calculamos tu huella con la siguiente fórmula</h3>
                                    <div className="formula-container">
                                        <img className="formula-img" src={carbonFormula} alt="NOIM" />
                                    </div> */}
                                    <video autoPlay muted loop className="work-video">
                                        <source
                                            // src={window.innerWidth >= 768 ? missionVideo : missionMobileVideo} 
                                            src={videoTAO}
                                            type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default Home;
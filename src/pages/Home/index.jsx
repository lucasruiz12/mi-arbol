import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
// import { IS_AUTHENTICATED } from '../../helpers/constants';
// import LoadingLogo from '../../components/LoadingLogo';
// import badWorld from '../../assets/images/image-bad-world.png';
// import carbonFormula from '../../assets/images/image-carbon-formula.png';
// import goodWorld from '../../assets/images/image-good-world.png';
// import gifLow from '../../assets/gifs/gif-mundo-bajo.gif';
// import gifMedium from '../../assets/gifs/gif-mundo-medio.gif';
import gifHigh from '../../assets/gifs/gif-mundo-alto.gif';
import GraphicsHome from '../../components/Graphics/Home';

import './style.css';
import { Link } from 'react-router-dom';
import { videoCover } from '../../helpers/fullVideo';

const Home = () => {

    // const [loading, setLoading] = useState(true);
    // const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED)).displayName;

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 3000);
    // }, []);

    return (
        // <div className={`container-home with-back`}>
        <div className={`container-home`}>
            {/* <video autoPlay muted loop className="home-video">
                <source src={window.innerWidth >= 768 ? loginVideo : loginMobileVideo} type="video/mp4" />
                <source src={window.innerWidth >= 768 ? videoCover : videoCover} type="video/mp4" />
            </video> */}
            <NavBar />
            <div className="container-home-content">
                <div className="home-info">
                    <div className="home-user-data">
                        <div>
                            <h5 className="home-text">Tu huella de carbono es: </h5>
                            <h1 className="home-number">9.000kg CO2</h1>
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
                                <img className="result-img" src={gifHigh} alt="NOIM" />

                            </div>
                            <div className="home-result-text">
                                <h2 className="home-status">Eres <b>IMPACTO ALTO</b></h2>
                                <h5 className="home-invitation">Sus emisiones equivalen a cortar <b>160 árboles</b> por año. Modifique sus hábitos y empiece a disminuir su impacto</h5>
                                <Link className="btn-container-link" to="/neutralCarbon">
                                    <button className="btn-green">Mitigar tu huella</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="home-user-graphics">
                        <GraphicsHome />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
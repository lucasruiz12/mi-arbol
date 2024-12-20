import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
// import { IS_AUTHENTICATED } from '../../helpers/constants';
import LoadingLogo from '../../components/LoadingLogo';

import './style.css';
import ManyTrees from '../../components/ManyTrees';
import GraphicsHome from '../../components/Graphics/Home';

const Home = () => {

    const [loading, setLoading] = useState(true);
    // const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED)).displayName;

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    /* backgroundImage: loading ? "none" : `url(${backgroundImages[currentQuestion - 1]})` || 'none',
backgroundSize: 'cover',
backgroundPosition: 'center', */

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
                                    <h4 className="home-welcome">Bienvenido usuario</h4>
                                    <div>
                                        <h1 className="home-number">9.000kg CO2</h1>
                                        <h5 className="home-text">es tu huella de carbono...</h5>
                                    </div>
                                    <div>
                                        <p className="home-need">y para mitigarla necesitas plantar</p>
                                        <div>
                                            <h1 className="home-target">200 árboles</h1>
                                            <ManyTrees />
                                        </div>
                                    </div>
                                </div>
                                <div className="home-user-graphics">
                                    <GraphicsHome />
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default Home;
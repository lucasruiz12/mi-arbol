import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import LoadingLogo from '../../components/LoadingLogo';
// import GraphicsNeutralCarbon from '../../components/Graphics/NeutralCarbon';
import './style.css';

const NeutralCarbon = () => {

    {/* <GraphicsNeutralCarbon /> */}

    const [renderView, setRenderView] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div className="container-neutral-carbon">
            <NavBar />
            <div className="container-neutral-carbon-content">
                {
                    loading ?
                        <LoadingLogo />
                        :
                        renderView === 1 ?
                            <>
                                <div className="container-info-text">
                                    <p className="text-you-know">¿Sabías qué?</p>
                                    <p className="info-you-know">Por menos de lo que te gastas en una pizza grande al mes, puedes neutralizar tu huella de carbono individual.</p>
                                    <button className="btn-green" onClick={() => setRenderView(2)}>Saber más</button>
                                </div>
                                <div className="container-info-pizza">
                                    <p className="pizza-img">Foto de la pizza</p>
                                    <p className="pizza-price">$189</p>
                                </div>
                                <div className="container-info-three">
                                    <p className="three-img">Foto de los árboles</p>
                                    <p className="three-price">$149</p>
                                </div>
                            </>
                            :
                            <>
                                <div className="container-info-text">
                                    <p className="text-you-know">¿Cómo impacta tu inversión?</p>
                                    <p className="info-you-know">Inscrito podrás conocer la geolocalización de tus árboles y visitarlos siempre que gustes.</p>
                                    <p className="info-you-know">Tus árboles estarán etiquetados con tus datos y podrás formar parte de las reforestaciones que hagamos.</p>
                                    <Link to="/mySubscription">
                                        <button className="btn-green" onClick={() => setRenderView(2)}>¡Vuélvete carbono neutro!</button>
                                    </Link>
                                </div>
                                <div className="container-info-pizza">
                                    <p className="pizza-price">Foto de la pizza</p>
                                    <p className="pizza-img">Toca la pizza para ver el impacto de tu inversión</p>
                                </div>
                            </>
                }
            </div>
        </div>
    );
};

export default NeutralCarbon;
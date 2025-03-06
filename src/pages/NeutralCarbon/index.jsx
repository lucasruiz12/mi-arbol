import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import GraphicsNeutralCarbon from '../../components/Graphics/NeutralCarbon';
import treeIcon from '../../assets/icons/cartoon/tree.svg';
import pizzaIcon from '../../assets/icons/cartoon/pizza-box.svg';
import BackPages from '../../components/BackPages';
import BackArrow from '../../components/BackArrow';
import ModalMoreInfo from '../../components/ModalMoreInfo';
import './style.css';

const NeutralCarbon = () => {

    const [renderView, setRenderView] = useState(1);
    const [showModalMoreInfo, setShowModalMoreInfo] = useState(false);

    return (
        <div className="container-neutral-carbon">
            <NavBar />
            <div className="container-neutral-carbon-content">
                {
                    renderView === 1 ?
                        <>
                            <div className="container-info-text">
                                <p className="text-you-know">¿Sabías qué?</p>
                                <p className="info-you-know">Por menos de lo que gastas en una pizza al mes, puedes neutralizar tu huella de carbono como persona.</p>
                                <p className="info-you-know">¡Unete a nuestra comunidad con una pequeña suscripción para ser carbon neutro!</p>
                                <div className="container-btn-carbono">
                                    <button className="btn-green" onClick={() => setRenderView(2)}>¿Cómo se invierte mi suscripción?</button>
                                </div>
                            </div>
                            <div className="container-all-info">
                                <div className="container-info-pizza">
                                    <div className="info-pizza-item">
                                        <img className="info-pizza-img" src={pizzaIcon} alt="NOIMG" />
                                        <p className="info-pizza-text">$189</p>
                                    </div>
                                    <div className="info-pizza-item" style={{ marginBottom: "4vh" }}>
                                        <p className="info-pizza-text"><b>{">"}</b></p>
                                    </div>
                                    <div className="info-pizza-item">
                                        <img className="info-pizza-img" src={treeIcon} alt="NOIMG" />
                                        <p className="info-pizza-text">$149</p>
                                    </div>
                                </div>
                                <div className="contianer-btn-carbono-mobile">
                                    <button className="btn-green" onClick={() => setRenderView(2)}>¿Cómo se invierte mi suscripción?</button>
                                </div>
                            </div>
                            <BackPages goToPage="/home" />
                        </>
                        :
                        <div className="carbon-pizza-content">
                            <div className="container-info-text">
                                <p className="you-know-tips">¡Somos la plataforma que más arboles sembrará con cada peso tuyo!</p>
                                <p className="text-you-know">¿Cómo impacta tu inversión?</p>
                                <p className="info-inversion">Con tu inversión llevamos a cabo <b>reforestaciones masivas</b>, con esta acción logramos capturar carbono de la atmósfera, dar <b>trabajo a comunidades</b> y proteger ecosistemas que producen el oxígeno que respiramos. </p>
                                <p className="info-inversion">Tus árboles tendrán un <b>identificador personalizado y geolocalizado</b>, para que puedas visitar tus raíces siempre que quieras.</p>
                                <p className="info-inversion">¡Al ser miembro también <b>podrás asistir a nuestras reforestaciones</b> masivas!</p>
                                <div className="container-btn-carbono">
                                    <Link className="container-link-mobile" to="/subscriptionPlans">
                                        <button className="btn-green" onClick={() => setRenderView(2)}>¡Vuélvete carbono neutro!</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="container-info-graphics">
                                <GraphicsNeutralCarbon showModal={() => setShowModalMoreInfo(true)} />
                            </div>
                            <BackArrow handleAction={() => setRenderView(1)} customMargin="90%" />
                            {
                                showModalMoreInfo && <ModalMoreInfo showModal={showModalMoreInfo} hideModal={() => setShowModalMoreInfo(false)} />
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default NeutralCarbon;
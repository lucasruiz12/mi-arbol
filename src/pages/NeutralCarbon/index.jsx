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
        <div className="container-fluid neutral-carbon-container">
            {
                renderView === 1 ?
                    <>
                        {/* Fila 1: NavBar completo */}
                        <div className="row" style={{ minHeight: '15vh' }}>
                            <div className="col-12">
                                <NavBar />
                            </div>
                        </div>

                        {/* Fila 2: Título */}
                        <div className="row align-items-center fila-titulo">
                            <div className="col-12 text-center">
                                <h1 className="title-you-know">Siembra árboles certificados y geolocalizados</h1>
                            </div>
                        </div>

                        {/* Fila 3: Contenido dividido en 2 columnas */}
                        <div className="row align-items-center fila-contenido mt-4">
                            {/* Columna 1: ¿Sabías qué? y texto */}
                            <div className="col-md-6">
                                <div className="sabias-que-container">
                                    <h2 className="text-you-know">¿Sabías qué?</h2>
                                    <p className="info-you-know">Por menos de lo que gastas en una pizza al mes, puedes neutralizar tu huella de carbono como persona.</p>
                                    <p className="info-you-know bottom-text-info">¡Únete a nuestra comunidad con una pequeña suscripción para ser carbono neutro!</p>
                                </div>
                            </div>
                            {/* Columna 2: Comparación pizza vs árbol */}
                            <div className="col-md-6">
                                <div className="container-info-pizza">
                                    <div className="info-pizza-item">
                                        <img className="info-pizza-img" src={pizzaIcon} alt="NOIMG" />
                                        <p className="info-pizza-text">$199</p>
                                    </div>
                                    <div className="info-pizza-item" style={{ marginBottom: "4vh" }}>
                                        <p className="info-pizza-text"><b>{">"}</b></p>
                                    </div>
                                    <div className="info-pizza-item">
                                        <img className="info-pizza-img" src={treeIcon} alt="NOIMG" />
                                        <p className="info-pizza-text">$189</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Botón fuera de la fila, para que en móvil quede debajo de los íconos */}
                        <div className="row">
                            <div className="col-12 d-flex justify-content-md-start justify-content-center container-btn-carbono">
                                <button className="btn-green suscription-how btn-suscripcion-centro" onClick={() => setRenderView(2)}>
                                    ¿Cómo se invierte mi suscripción?
                                </button>
                            </div>
                        </div>

                        {/* Fila 4: Solo botón de back */}
                        <div className="row align-items-center" style={{ minHeight: '20vh' }}>
                            <div className="col-12 d-flex justify-content-start">
                                <div className="back-button-container">
                                    <BackPages goToPage="/home" />
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        {/* Fila 1: NavBar */}
                        <div className="row" style={{ minHeight: '12vh' }}>
                            <div className="col-12">
                                <NavBar />
                            </div>
                        </div>
                        {/* Fila 2: Dos columnas */}
                        <div className="row fila-contenido-impacto">
                            {/* Columna 1: Textos */}
                            <div className="col-md-6">
                                <div className="impacto-textos-container small-texts">
                                    <p className="text-you-know">¿Cómo impacta tu inversión?</p>
                                    <p className="info-inversion">Con tu inversión llevamos a cabo <b>reforestaciones masivas</b>, con esta acción logramos capturar carbono de la atmósfera, dar <b>trabajo a comunidades</b> y proteger ecosistemas que producen el oxígeno que respiramos.</p>
                                    <p className="info-inversion">Tus árboles tendrán un <b>identificador personalizado y geolocalizado</b>, para que puedas visitar tus raíces siempre que quieras.</p>
                                </div>
                            </div>
                            {/* Columna 2: Gráfico de pie */}
                            <div className="col-md-6 d-flex justify-content-center">
                                <div className="container-info-graphics">
                                    <GraphicsNeutralCarbon showModal={() => setShowModalMoreInfo(true)} />
                                </div>
                            </div>
                        </div>
                        {/* Fila 3: Botones en dos columnas */}
                        <div className="row align-items-center fila-botones-impacto" style={{ minHeight: '10vh' }}>
                            <div className="col-6 d-flex justify-content-start">
                                <Link to="/subscriptionPlans" className="btn-vuelvete-carbono">
                                    <button className="btn-green btn-impacto-reducido">
                                        ¡Vuélvete carbono neutro!
                                    </button>
                                </Link>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <button className="btn-green btn-impacto-reducido" onClick={() => setShowModalMoreInfo(true)}>
                                    ¿Quién es TAO?
                                </button>
                            </div>
                        </div>
                        {/* Fila 4: Botón de Back */}
                        <div className="back-fixed-bottom">
                            <div className="back-button-container">
                                <BackArrow handleAction={() => setRenderView(1)} customMargin="0" />
                            </div>
                        </div>
                        {showModalMoreInfo && <ModalMoreInfo showModal={showModalMoreInfo} hideModal={() => setShowModalMoreInfo(false)} />}
                    </>
            }
        </div>
    );
};

export default NeutralCarbon;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
// import LoadingLogo from '../../components/LoadingLogo';
import GraphicsNeutralCarbon from '../../components/Graphics/NeutralCarbon';
import threeIcon from '../../assets/icons/cartoon/three.svg';
import pizzaIcon from '../../assets/icons/cartoon/pizza-box.svg';
import './style.css';

const NeutralCarbon = () => {

    {/* <GraphicsNeutralCarbon /> */ }

    const [renderView, setRenderView] = useState(1);

    return (
        <div className="container-neutral-carbon">
            <NavBar />
            <div className="container-neutral-carbon-content">
                {
                    renderView === 1 ?
                        <>
                            <div className="container-info-text">
                                <p className="text-you-know">¿Sabías qué?</p>
                                <p className="info-you-know">Sembrar árboles tiene una serie de impactos positivos y beneficiosos para el medio ambiente, la biodiversidad y la salud humana. Los árboles capturan dióxido de carbono (CO2), ayudando a reducir las concentraciones de este gas de efecto invernadero.</p>
                                <p className="info-you-know">Por menos de lo que te gastas en una pizza grande al mes, puedes neutralizar tu huella de carbono individual.</p>
                                <div className="container-btn-carbono">
                                    <button className="btn-green" onClick={() => setRenderView(2)}>Saber más</button>
                                </div>
                            </div>
                            <div className="container-all-info">
                                <div className="container-info-pizza">
                                    <div className="info-pizza-item">
                                        <img className="info-pizza-img" src={pizzaIcon} alt="NOIMG" />
                                        <p className="info-pizza-text">$189</p>
                                    </div>
                                    <div className="info-pizza-item">
                                        <p className="info-pizza-text"><b>{">"}</b></p>
                                    </div>
                                    <div className="info-pizza-item">
                                        <img className="info-pizza-img" src={threeIcon} alt="NOIMG" />
                                        <p className="info-pizza-text">$149</p>
                                    </div>
                                    {/* <p className="pizza-img">Foto de la pizza</p>
                                <p className="pizza-price">$189</p> */}
                                </div>
                                <div className="contianer-btn-carbono-mobile">
                                    <button className="btn-green" onClick={() => setRenderView(2)}>Saber más</button>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="container-info-text">
                                <p className="text-you-know">¿Cómo impacta tu inversión?</p>
                                <p className="info-you-know">Inscrito podrás conocer la geolocalización de tus árboles y visitarlos siempre que gustes. Tus árboles estarán etiquetados con tus datos y podrás formar parte de las reforestaciones que hagamos.</p>
                                <p className="info-you-know">Somos la plataforma que más árboles siembra por cada peso que recibimos.</p>
                                <div className="container-btn-carbono">
                                    <Link className="container-link-mobile" to="/mySubscription">
                                        <button className="btn-green" onClick={() => setRenderView(2)}>¡Vuélvete carbono neutro!</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="container-info-pizza">
                                <GraphicsNeutralCarbon />
                                {/* <p className="pizza-price">Foto de la pizza</p>
                                <p className="pizza-img">Toca la pizza para ver el impacto de tu inversión</p> */}
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default NeutralCarbon;
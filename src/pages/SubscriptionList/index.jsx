import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import PriceSlider from '../../components/PriceSlider';
import ModalPayment from '../../components/ModalPayment';
import { IS_AUTHENTICATED, CARBON_POINTS } from '../../helpers/constants';
import BackPages from '../../components/BackPages';
import './style.css';

const SubscriptionList = () => {

    const [currentPrice, setCurrentPrice] = useState(189);
    const [modalPayment, setModalPayment] = useState(false);
    const [minPrice, setMinPrice] = useState(189);
    const [carbonPoints, setCarbonPoints] = useState(0);
    const [treesNeeded, setTreesNeeded] = useState(0);

    // Función para calcular árboles necesarios
    const calculateTreesNeeded = (carbonPointsValue) => {
        // Cada árbol representa 0.08 toneladas de CO2
        const trees = Math.ceil(carbonPointsValue / 0.08);
        setTreesNeeded(trees);
    };

    // Función para calcular árboles del slider
    const calculateSliderTrees = (price) => {
        // Cada 189 pesos son 4 árboles (según la lógica del PriceSlider)
        return Math.ceil((price / 189) * 4);
    };

    useEffect(() => {
        // Obtener carbonPoints del localStorage
        const storedCarbonPoints = JSON.parse(localStorage.getItem(CARBON_POINTS)) || 0;
        const authenticatedUser = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));
        
        if (authenticatedUser?.carbonPoints) {
            setCarbonPoints(authenticatedUser.carbonPoints);
        } else {
            setCarbonPoints(storedCarbonPoints);
        }

        if (authenticatedUser?.subscription) {
            const { amount } = authenticatedUser.subscription;
            setCurrentPrice(parseInt(amount));
            setMinPrice(parseInt(amount));
        };

    }, []);

    // Recalcular cuando cambien los carbonPoints o el precio
    useEffect(() => {
        calculateTreesNeeded(carbonPoints);
    }, [carbonPoints, currentPrice]);

    return (
        <div className="container-fluid">
            {/* Fila 1: NavBar */}
            <div className="row">
                <div className="col-12">
                    <NavBar />
                </div>
            </div>

            {/* Fila 2: Título principal */}
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="subscription-text-header">¡Somos la plataforma que más árboles sembrará por cada peso que inviertas!</h2>
                </div>
            </div>

            {/* Fila 3: Contenido principal con 2 columnas */}
            <div className="row">
                {/* Columna 1: Texto y PriceSlider (8 columnas) */}
                <div className="col-md-8">
                    <div className="subscription-text-container">
                        <h4 className="subscription-text-line"><i>"Recuerda que la acción más altruista que puedes hacer hoy, es sembrar un árbol para las personas del mañana."</i></h4>
                    </div>
                    <div className="container-subscription-slider">
                        <PriceSlider minPrice={minPrice} currentPrice={currentPrice} setCurrentPrice={setCurrentPrice} setModalPayment={setModalPayment} />
                    </div>
                </div>
                
                {/* Columna 2: Árboles que sembrarás (4 columnas) */}
                <div className="col-md-4 mt-4">
                    {/* Fila 1: Título */}
                    <div className="row">
                        <div className="col-12">
                            <h4 className="formula-title">Tu Impacto</h4>
                        </div>
                    </div>
                    
                    {/* Fila 2: Widgets */}
                    <div className="row">
                        <div className="col-12">
                            <div className="formula-container">
                                <div className="formula-section">
                                    <h5>Árboles que sembrarás:</h5>
                                    <p className="slider-trees">{calculateSliderTrees(currentPrice)} árboles</p>
                                </div>

                                <div className="formula-section">
                                    <h5>Toneladas de CO2 que mitigarás:</h5>
                                    <p className="carbon-mitigated">{(calculateSliderTrees(currentPrice) * 0.08).toFixed(2)} toneladas CO2</p>
                                </div>

                                <div className="formula-section">
                                    <h5>Tu huella restante:</h5>
                                    <p className="carbon-remaining">{(carbonPoints - (calculateSliderTrees(currentPrice) * 0.08)).toFixed(2)} toneladas CO2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fila 3: BackPages */}
            <div className="row">
                <div className="col-12">
                    <BackPages goToPage="/neutralCarbon" />
                </div>
            </div>

            {modalPayment && <ModalPayment currentPrice={currentPrice} showModal={modalPayment} hideModal={() => setModalPayment(false)} />}
        </div>
    );
};

export default SubscriptionList;
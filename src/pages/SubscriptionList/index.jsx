import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import PriceSlider from '../../components/PriceSlider';
import ModalPayment from '../../components/ModalPayment';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import BackPages from '../../components/BackPages';
import './style.css';

const SubscriptionList = () => {

    const [currentPrice, setCurrentPrice] = useState(189);
    const [modalPayment, setModalPayment] = useState(false);
    const [minPrice, setMinPrice] = useState(189);

    useEffect(() => {

        if (JSON.parse(localStorage.getItem(IS_AUTHENTICATED))?.subscription) {
            const { amount } = JSON.parse(localStorage.getItem(IS_AUTHENTICATED)).subscription;
            setCurrentPrice(parseInt(amount));
            setMinPrice(parseInt(amount));
        };

    }, []);

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
                
                {/* Columna 2: Vacía por ahora (4 columnas) */}
                <div className="col-md-4">
                    {/* Contenido futuro */}
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
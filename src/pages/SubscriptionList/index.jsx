import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import PriceSlider from '../../components/PriceSlider';
import ModalPayment from '../../components/ModalPayment';
import './style.css';
import { IS_AUTHENTICATED } from '../../helpers/constants';

const SubscriptionList = () => {

    const [currentPrice, setCurrentPrice] = useState(150);
    const [modalPayment, setModalPayment] = useState(false);
    const [minPrice, setMinPrice] = useState(150);

    useEffect(() => {

        if (JSON.parse(localStorage.getItem(IS_AUTHENTICATED)).subscription) {
            const { amount } = JSON.parse(localStorage.getItem(IS_AUTHENTICATED)).subscription;
            setCurrentPrice(parseInt(amount));
            setMinPrice(parseInt(amount));
        };

    }, []);

    return (
        <div className="container-subscription-list">
            <NavBar />
            <div className="container-subscription-list-content">
                <div className="subscription-text-container">
                    <h2 className="subscription-text-header">¡Somos la plataforma que más árboles sembrará por cada peso tuyo!</h2>
                    <h4 className="subscription-text-line">La acción más altruista que puedes hacer hoy es sembrar un árbol para las personas del mañana.</h4>
                </div>
                <div className="container-subscription-slider">
                    <PriceSlider minPrice={minPrice} currentPrice={currentPrice} setCurrentPrice={setCurrentPrice} setModalPayment={setModalPayment} />
                </div>
            </div>
            {modalPayment && <ModalPayment currentPrice={currentPrice} showModal={modalPayment} hideModal={() => setModalPayment(false)} />}
        </div>
    );
};

export default SubscriptionList;
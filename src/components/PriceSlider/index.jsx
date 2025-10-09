import React, { useEffect, useState } from 'react';
import ReactSlider from 'react-slider';
// import { Link } from 'react-router-dom';
import { IS_AUTHENTICATED, PRICE_TO_PAY } from '../../helpers/constants';
import './style.css';
import { useNavigate } from 'react-router-dom';

const PriceSlider = ({ minPrice, currentPrice, setCurrentPrice, setModalPayment }) => {

    const navigate = useNavigate();

    const [priceToValue, setPriceToValue] = useState({
        trees: 1,
        tons: 0.015
    });

    const newPriceToValue = (value) => {
        const trees = parseInt((value / 198) * 3.5 * 12);
        setPriceToValue({
            trees,
            tons: (0.015 * trees).toFixed(2),
        });
    }

    const handleSliderChange = (value) => {
        setCurrentPrice(value);
        newPriceToValue(value);
    };

    const handleInputChange = (event) => {
        let value = parseInt(event.target.value, 10);

        if (!isNaN(value)) {
            value = Math.min(Math.max(value, 0), 1980);
            setCurrentPrice(value);
            newPriceToValue(value);
        } else if (event.target.value === "") {
            setCurrentPrice("");
        };
    };

    const handleInputBlur = () => {
        if (currentPrice === "" || currentPrice < minPrice) {
            setCurrentPrice(minPrice);
            newPriceToValue(minPrice);
        };
    };

    const goToRegisterTemporal = () => {
        localStorage.setItem(PRICE_TO_PAY, currentPrice);
        navigate("/registerForm");
    }

    useEffect(() => {
        newPriceToValue(minPrice);
    }, [minPrice]);

    return (
        <div className="container-slider-price">
            <ReactSlider
                className="horizontal-slider"
                thumbClassName="thumb"
                trackClassName="track"
                min={minPrice}
                max={1980}
                step={198}
                value={currentPrice}
                onChange={handleSliderChange}
            />
            <div className="container-all-price">
                <div className="container-price-value">
                    <p className="price-symbol">$</p>
                    <input
                        id="price-input"
                        className="price-input"
                        type="number"
                        value={currentPrice}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        min={198}
                        max={1980}
                        step={198}
                    />
                    <p className="price-symbol"> Mensual</p>
                </div>
                <div className="container-tree-text">
                    <p className="tree-line">{priceToValue.trees} árboles al año</p>
                </div>
            </div>
            {/* <button className={`btn-green${(JSON.parse(localStorage.getItem(IS_AUTHENTICATED))?.subscription?.amount === currentPrice) ? " disabled" : ""} checkout-btn`} disabled={JSON.parse(localStorage.getItem(IS_AUTHENTICATED))?.subscription?.amount === currentPrice} onClick={() => setModalPayment(true)}>Sembrar mis raíces</button> */}
            <button className={`btn-green${(JSON.parse(localStorage.getItem(IS_AUTHENTICATED))?.subscription?.amount === currentPrice) ? " disabled" : ""} checkout-btn`} disabled={JSON.parse(localStorage.getItem(IS_AUTHENTICATED))?.subscription?.amount === currentPrice} onClick={goToRegisterTemporal}>Sembrar mis raíces</button>
        </div >
    );
};

export default PriceSlider;

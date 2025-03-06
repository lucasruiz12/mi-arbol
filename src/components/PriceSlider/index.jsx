import React, { useEffect, useState } from 'react';
import ReactSlider from 'react-slider';
import { Link } from 'react-router-dom';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import './style.css';

const PriceSlider = ({ minPrice, currentPrice, setCurrentPrice, setModalPayment }) => {
    const [priceToValue, setPriceToValue] = useState({
        trees: 1,
        tons: 0.015
    });

    const newPriceToValue = (value) => {
        const trees = (value / 150).toFixed(2);
        setPriceToValue({
            trees,
            tons: (0.015 * trees).toFixed(3),
        });
    }

    const handleSliderChange = (value) => {
        setCurrentPrice(value);
        newPriceToValue(value);
    };

    const handleInputChange = (event) => {
        let value = parseInt(event.target.value, 10);

        if (!isNaN(value)) {
            value = Math.min(Math.max(value, 0), 3000);
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
                max={3000}
                step={1}
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
                        min={150}
                        max={3000}
                        step={1}
                    />
                </div>
                <div className="container-tree-text">
                    <p className="tree-line">{priceToValue.trees} {currentPrice === 150 ? "árbol" : "árboles"} por mes</p>
                </div>
            </div>
            <button className={`btn-green${(JSON.parse(localStorage.getItem(IS_AUTHENTICATED))?.subscription?.amount === currentPrice) ? " disabled" : ""}`} disabled={JSON.parse(localStorage.getItem(IS_AUTHENTICATED))?.subscription?.amount === currentPrice} onClick={() => setModalPayment(true)}>Sembrar mis raíces</button>
        </div >
    );
};

export default PriceSlider;

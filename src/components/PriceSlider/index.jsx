import React, { useEffect, useState } from 'react';
import ReactSlider from 'react-slider';
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
            value = Math.min(Math.max(value, 0), 2000);
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
                max={2000}
                step={50}
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
                        max={2000}
                        step={50}
                    />
                </div>
                <div className="container-tree-text">
                    <p className="tree-line">{priceToValue.trees} {currentPrice === 150 ? "árbol" : "árboles"} por mes</p>
                    <p className="tree-line">{priceToValue.tons} tons de CO2</p>
                </div>
            </div>
            <button className="btn-green" onClick={() => setModalPayment(true)}>Contratar plan</button>
        </div>
    );
};

export default PriceSlider;

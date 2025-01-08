import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import './style.css';

const PriceSlider = () => {
    const [currentPrice, setCurrentPrice] = useState(50);

    const handleSliderChange = (value) => {
        setCurrentPrice(value);
    };

    const handleInputChange = (event) => {
        let value = parseInt(event.target.value, 10);

        if (!isNaN(value)) {
            value = Math.min(Math.max(value, 0), 500);
            setCurrentPrice(value);
        } else if (event.target.value === "") {
            setCurrentPrice("");
        };
    };

    const handleInputBlur = () => {
        if (currentPrice === "") {
            setCurrentPrice(50);
        };
    };

    return (
        <div className="container-slider-price">
            <ReactSlider
                className="horizontal-slider"
                thumbClassName="thumb"
                trackClassName="track"
                min={0}
                max={500}
                step={50}
                value={currentPrice}
                onChange={handleSliderChange}
            />
            <div className="container-price-value" style={{ marginTop: "10px", display: "flex", alignItems: "center" }}>
                <label className="price-label" htmlFor="price-input" style={{ marginRight: "10px" }}>
                    Monto: $
                </label>
                <input
                    id="price-input"
                    className="price-input"
                    type="number"
                    value={currentPrice}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    min={0}
                    max={500}
                    step={50}
                    style={{
                        width: "80px",
                        padding: "5px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                    }}
                />
            </div>
            <button className="btn-green">Contratar plan</button>
        </div>
    );
};

export default PriceSlider;

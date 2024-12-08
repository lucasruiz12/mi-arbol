import React, { useEffect, useState } from 'react';
import './style.css';

const CustomCheckbox = ({ data, setData, resetData }) => {

    const [checkValue, setCheckValue] = useState("");

    const setValue = (points) => {
        setData(points);
        setCheckValue(points);
    };

    useEffect(() => {
        setCheckValue("");
    }, [resetData]);

    return (
        data.map((el, idx) => {
            return (
                <label key={idx} className="container-checkbox">
                    <p className="text-checkbox">
                        {el.name}
                    </p>
                    <input type="checkbox" value={el.points} checked={checkValue === el.points} onChange={() => setValue(el.points)} />
                    <span className="box-checkbox"></span>
                </label>
            )
        })
    )
}

export default CustomCheckbox
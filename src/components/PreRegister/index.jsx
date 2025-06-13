import React, { useState } from 'react';
import logoArbol from '../../assets/logos/logo-TAO-brown.svg';
import './style.css';

const PreRegister = ({ goToResults }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const changeData = (event, data) => {
        if (data) {
            setFormData({
                ...formData,
                [data.name]: data.value,
            });
        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            });
        };
    };

    const submitData = () => {
        goToResults(formData)
    };

    return (
        <div className="container-register w-100 h-100">
            <form className="form-register" onSubmit={submitData}>
                <div className="title-register">
                    <img className="register-logo" src={logoArbol} alt="LOG" />
                    <div className="text-register">
                        <p className="register-line">Para conocer tus resultados, déjanos tu nombre y correo electrónico</p>
                    </div>
                </div>
                <div className="container-input-form">
                    <label className="input-title" htmlFor="name">
                        Nombre:
                    </label>
                    <input
                        className="input-form"
                        type="text"
                        id="name"
                        name="name"
                        onChange={changeData}
                    />
                </div>
                <div className="container-input-form">
                    <label className="input-title" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="input-form"
                        type="email"
                        id="email"
                        name="email"
                        onChange={changeData}
                    />
                </div>
                <div className="container-all-btns">
                    <div className="link-container-register">
                        <input
                            type="submit"
                            value="Ver resultados"
                            className={`btn-green-register${(formData.name === "" ||
                                formData.email === "") ? " disabled" : ""}`}
                            disabled={
                                formData.email === "" ||
                                formData.password === ""
                            }
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PreRegister;
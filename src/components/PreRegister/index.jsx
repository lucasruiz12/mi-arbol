import React, { useState } from 'react';
import logoArbol from '../../assets/logos/logo-mas-raices.png';
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
        <div className="container-register d-flex flex-column justify-content-center align-items-center min-vh-100">
            <form 
                className="bg-white bg-opacity-75 rounded-4 shadow w-100 w-md-75 w-lg-50 mx-auto p-3 p-md-4"
                style={{ maxWidth: '400px', minHeight: '500px' }}
                onSubmit={submitData}
            >
                <div className="title-register text-center mb-4">
                    <img className="register-logo mb-2" src={logoArbol} alt="LOG" />
                    <div className="text-register">
                        <p className="register-line mb-0">
                            Para conocer tus resultados, déjanos tu nombre y correo electrónico
                        </p>
                    </div>
                </div>
                <div className="mb-3 text-start">
                    <label className="input-title input-title-nombre mb-1" htmlFor="name">
                        Nombre:
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        onChange={changeData}
                    />
                </div>
                <div className="mb-4 text-start">
                    <label className="input-title input-title-email mb-1" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="form-control"
                        type="email"
                        id="email"
                        name="email"
                        onChange={changeData}
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <input
                        type="submit"
                        value="Ver resultados"
                        className={`btn btn-success w-100 fw-bold${(formData.name === "" || formData.email === "") ? " disabled" : ""}`}
                        disabled={formData.name === "" || formData.email === ""}
                    />
                </div>
            </form>
        </div>
    );
};

export default PreRegister;
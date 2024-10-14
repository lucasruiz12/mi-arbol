import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        city: "",
        state: "",
        phone: "",
        email: "",
        password: "",
        repeatPassword: "",
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

    const submitData = (event) => {
        event.preventDefault();
        console.log(formData);
    };


    return (
        <div className="container-register">
            <div className="title-register">
                <p>Mi árbol</p>
                <div className="text-register">
                    <p>Creemos tu perfil para comenzar a disminuir esa huella de carbono</p>
                    <p>"SEMBRAREMOS UN ÁRBOL HOY, PARA DAR SOBRA A LAS PERSONAS DEL MAÑANA."</p>
                </div>
            </div>
            <form className="form-register" onSubmit={submitData}>
                <div className="container-input-form">
                    <label className="input-title" htmlFor="name">
                        Nombre(s):
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
                    <label className="input-title" htmlFor="lastname">
                        Apellidos:
                    </label>
                    <input
                        className="input-form"
                        type="text"
                        id="lastname"
                        name="lastname"
                        onChange={changeData}
                    />
                </div>
                <div className="container-input-form">
                    <label className="input-title" htmlFor="city">
                        Ciudad:
                    </label>
                    <input
                        className="input-form"
                        type="text"
                        id="city"
                        name="city"
                        onChange={changeData}
                    />
                </div>
                <div className="container-input-form">
                    <label className="input-title" htmlFor="state">
                        Estado:
                    </label>
                    <input
                        className="input-form"
                        type="text"
                        id="state"
                        name="state"
                        onChange={changeData}
                    />
                </div>
                <div className="container-input-form">
                    <label className="input-title" htmlFor="phone">
                        Móvil:
                    </label>
                    <input
                        className="input-form"
                        type="number"
                        id="phone"
                        name="phone"
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
                <div className="container-input-form">
                    <label className="input-title" htmlFor="password">
                        Contraseña:
                    </label>
                    <input
                        className="input-form"
                        type="password"
                        id="password"
                        name="password"
                        onChange={changeData}
                    />
                </div>
                <div className="container-input-form">
                    <label className="input-title" htmlFor="repeatPassword">
                        Confirmar contraseña:
                    </label>
                    <input
                        className="input-form"
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        onChange={changeData}
                    />
                </div>
                <div className="container-social-media">
                    <span>Registrarse con: </span>
                    <div className="container-btn-social-media">
                        <button className="btn-social-media" type="button" onClick={() => console.log("Google")}>G</button>
                        <button className="btn-social-media" type="button" onClick={() => console.log("Facebook")}>F</button>
                        <button className="btn-social-media" type="button" onClick={() => console.log("Apple")}>A</button>
                    </div>
                </div>
                <Link to="/initQuestions">
                    <input
                        type="submit"
                        value="Registrarse"
                        disabled={
                            formData.name === "" ||
                            formData.lastname === "" ||
                            formData.city === "" ||
                            formData.state === "" ||
                            formData.phone === "" ||
                            formData.email === "" ||
                            formData.password === "" ||
                            formData.repeatPassword === "" ||
                            formData.password.length < 7 ||
                            formData.password !== formData.repeatPassword
                        }
                    />
                </Link>
            </form>
        </div>
    );
};

export default Register;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { signUpWithEmail, signUpWithFacebook, signUpWithGoogle } from '../../firebase/connections';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import LoadingLogo from '../LoadingLogo';
import './style.css';

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

    const [loading, setLoading] = useState(true);

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

    const submitSocialMedia = async (socialMedia) => {
        try {
            const { accessToken, displayName, email, uid } = await socialMedia(formData);

            const dataToStorage = {
                accessToken,
                displayName,
                email,
                uid
            };

            localStorage.setItem(IS_AUTHENTICATED, JSON.stringify(dataToStorage));
            window.location.href = "/home";
        } catch (err) {
            console.error("Error registrando usuario:", err);
        };
    };

    const submitData = async (event) => {
        event.preventDefault();
        try {
            const { accessToken, displayName, email, uid } = await signUpWithEmail(formData.email, formData.password, `${formData.name} ${formData.lastname}`);

            const dataToStorage = {
                accessToken,
                displayName,
                email,
                uid
            };

            localStorage.setItem(IS_AUTHENTICATED, JSON.stringify(dataToStorage));
            window.location.href = "/home";
        } catch (err) {
            console.error("Error registrando usuario:", err);
        };
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));

        if (user) {
            window.location.href = "/home";
        };

        setTimeout(() => {
            setLoading(false);
        }, 1000);

    }, []);

    return (
        <div className="container-register">
            {
                loading ?
                    <LoadingLogo />
                    :
                    <>
                        <div className="title-register">
                            <Link to="/">
                                <p>Mi árbol</p>
                            </Link>
                            <div className="text-register">
                                <p className="register-line">Creemos tu perfil para comenzar a disminuir esa huella de carbono</p>
                                <p className="register-line">"SEMBRAREMOS UN ÁRBOL HOY, PARA DAR SOBRA A LAS PERSONAS DEL MAÑANA."</p>
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
                                    <button className="btn-social-media" type="button" onClick={() => submitSocialMedia(signUpWithGoogle)}>G</button>
                                    <button className="btn-social-media" type="button" onClick={() => submitSocialMedia(signUpWithFacebook)}>F</button>
                                    {/* <button className="btn-social-media" type="button" onClick={() => console.log("Apple")}>A</button> */}
                                </div>
                            </div>
                            <div className="link-container-register">
                                {/* <Link to="/initQuestions"> */}
                                <input
                                    type="submit"
                                    value="Registrarse"
                                    className="btn-green-register"
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
                                {/* </Link> */}
                            </div>
                        </form>
                    </>
            }
        </div>
    );
};

export default Register;
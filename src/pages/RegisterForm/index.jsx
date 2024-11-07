import React from 'react';
import Register from '../../components/Register';
import registerVideo from '../../assets/videos/3. siembra.mp4';
import './style.css'

const RegisterForm = () => {
    return (
        <div className="container-register-form">
            <video autoPlay muted loop className="register-video">
                <source src={registerVideo} type="video/mp4" />
            </video>
            <Register />
        </div>
    );
};

export default RegisterForm;
import React from 'react';
import Register from '../../components/Register';
// import registerVideo from '../../assets/videos/landinghome/video-TAO3.mp4';
import registerVideo from '../../assets/videos/landinghome/video-test.mp4';
import registerMobileVideo from '../../assets/videos/landinghome/video-TAO3-movil.mp4';
// import registerVideo from '../../assets/videos/landinghome/video-TAO3-c.mp4';
// import registerVideo from '../../assets/videos/3. siembra.mp4';
import './style.css'

const RegisterForm = () => {
    return (
        <div className="container-register-form">
            <video autoPlay muted loop className="register-video">
                <source src={window.innerWidth >= 768 ? registerVideo : registerMobileVideo} type="video/mp4" />
                {/* <source src={registerVideo} type="video/mp4" /> */}
            </video>
            <Register />
        </div>
    );
};

export default RegisterForm;
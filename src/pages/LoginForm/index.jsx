import React from 'react';
import Login from '../../components/Login';
import loginVideo from '../../assets/videos/landinghome/video-TAO3.mp4';
import loginMobileVideo from '../../assets/videos/landinghome/video-TAO3-movil.mp4';
// import loginVideo from '../../assets/videos/landinghome/video-TAO3-c.mp4';
// import loginVideo from '../../assets/videos/3. siembra.mp4';
import './style.css'

const LoginForm = () => {
    return (
        <div className="container-login-form">
            <video autoPlay muted loop className="login-video">
                <source src={window.innerWidth >= 768 ? loginVideo : loginMobileVideo} type="video/mp4" />
                {/* <source src={loginVideo} type="video/mp4" /> */}
            </video>
            <Login />
        </div>
    );
};

export default LoginForm;
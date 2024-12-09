import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { questionsAndAnswers } from '../../helpers/questionsAndAnswers';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import logoArbol from '../../assets/logos/logo-TAO-brown.svg';
import LoadingLogo from '../../components/LoadingLogo';
import CustomCheckbox from '../../components/CustomCheckbox';
import { backgroundImages } from '../../helpers/backgroundImages';
import './style.css';

const InitQuestions = () => {
    const [responseUser, setResponseUser] = useState([...Array(18)].map((_, i) => ({ id: i + 1, points: 0 })));
    const [responsePoints, setResponsePoints] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [loading, setLoading] = useState(true);
    const [fadeIn, setFadeIn] = useState(false);
    const [showTip, setShowTip] = useState(true);  // Estado para manejar la visibilidad del tip

    const nextQuestion = () => {
        const currentIndex = responseUser.findIndex(el => el.id === currentQuestion);
        const newResponse = [...responseUser];
        newResponse[currentIndex].points = responsePoints;

        setResponseUser(newResponse);
        setFadeIn(false); // Inicia el fade-out

        setTimeout(() => {
            setCurrentQuestion(currentQuestion + 1);
            setResponsePoints("");
            setFadeIn(true); // Reactiva el fade-in después del cambio
            setShowTip(true);
        }, 300); // Tiempo del fade-out

        if (currentQuestion === 18) {
            setTimeout(() => console.log("Puntaje final", responseUser), 1000);
        }
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));
        if (user) {
            window.location.href = "/home";
        }
        setTimeout(() => {
            setLoading(false);
            setFadeIn(true); // Aplica fade-in inicial
        }, 3000);
    }, []);

    return (
        <div
            className="container-init-questions"
            style={{
                backgroundImage: loading ? "none" : `url(${backgroundImages[currentQuestion - 1]})` || 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 0.5s ease-in-out',
            }}
        >
            {
                showTip && questionsAndAnswers.find(el => el.id === currentQuestion)?.messageToShow &&
                <div className={`question-tip ${fadeIn ? 'fade-in-shake' : ''}`}>
                    <button className="close-btn" onClick={() => setShowTip(false)}>✖</button> {/* Cruz de cierre */}
                    <p>
                        {questionsAndAnswers.find(el => el.id === currentQuestion).messageToShow}
                    </p>
                </div>
            }
            {loading ? (
                <LoadingLogo />
            ) : (
                <>
                    <img className={`question-logo ${fadeIn ? 'fade-in' : ''}`} src={logoArbol} alt="LOGO" />
                    <div className={`container-question ${fadeIn ? 'fade-in' : ''}`}>
                        <div className="container-number">
                            <img
                                className="question-icon"
                                src={questionsAndAnswers.find(el => el.id === currentQuestion)?.icon}
                                alt="Icon"
                            />
                        </div>
                        <div className="container-text">
                            <p className="question-text">
                                {questionsAndAnswers.find(el => el.id === currentQuestion)?.id}.-{" "}
                                {questionsAndAnswers.find(el => el.id === currentQuestion)?.question}
                            </p>
                        </div>
                    </div>
                    <div className={`container-answers ${fadeIn ? 'fade-in' : ''}`}>
                        <CustomCheckbox
                            data={questionsAndAnswers.find(el => el.id === currentQuestion)?.answers}
                            setData={setResponsePoints}
                            resetData={responseUser}
                        />
                    </div>
                    <div className={`fade-in`} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh", width: "50vw" }}>
                        {currentQuestion < questionsAndAnswers.length ? (
                            <button
                                className="btn-green"
                                disabled={responsePoints === ""}
                                onClick={nextQuestion}
                            >
                                Siguiente
                            </button>
                        ) : (
                            <Link to="/registerForm" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                <button
                                    className="btn-green"
                                    disabled={responsePoints === ""}
                                    onClick={nextQuestion}
                                >
                                    Finalizar
                                </button>
                            </Link>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default InitQuestions;

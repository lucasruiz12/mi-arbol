import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questionsAndAnswers } from '../../helpers/questionsAndAnswers';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import logoArbol from '../../assets/logos/logo-TAO-brown.svg';
import LoadingLogo from '../../components/LoadingLogo';
import CustomCheckbox from '../../components/CustomCheckbox';
import { backgroundImages } from '../../helpers/backgroundImages';
import LoadingResult from '../../components/LoadingResult';
import './style.css';

const InitQuestions = () => {

    const [responseUser, setResponseUser] = useState([
        {
            id: 1,
            // answer: "",
            points: 0
        },
        {
            id: 2,
            // answer: "",
            points: 0
        },
        {
            id: 3,
            // answer: "",
            points: 0
        },
        {
            id: 4,
            // answer: "",
            points: 0
        },
        {
            id: 5,
            // answer: "",
            points: 0
        },
        {
            id: 6,
            // answer: "",
            points: 0
        },
        {
            id: 7,
            // answer: "",
            points: 0
        },
        {
            id: 8,
            // answer: "",
            points: 0
        },
        {
            id: 9,
            // answer: "",
            points: 0
        },
        {
            id: 10,
            // answer: "",
            points: 0
        },
        {
            id: 11,
            // answer: "",
            points: 0
        },
        {
            id: 12,
            // answer: "",
            points: 0
        },
        {
            id: 13,
            // answer: "",
            points: 0
        },
        {
            id: 14,
            // answer: "",
            points: 0
        },
        {
            id: 15,
            // answer: "",
            points: 0
        },
        {
            id: 16,
            // answer: "",
            points: 0
        },
        {
            id: 17,
            // answer: "",
            points: 0
        },
        {
            id: 18,
            // answer: "",
            points: 0
        },
    ]);

    const [responsePoints, setResponsePoints] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [loading, setLoading] = useState(true);
    const [loadResults, setLoadResults] = useState(false);

    const navigate = useNavigate();

    const nextQuestion = () => {
        const currentIndex = responseUser.findIndex(el => el.id === currentQuestion);
        const newResponse = [...responseUser];
        newResponse[currentIndex].points = responsePoints;

        setResponseUser(newResponse);
        setCurrentQuestion(currentQuestion + 1);
        setResponsePoints("");
        if (currentQuestion === 18) {
            setTimeout(() => {
                console.log("Puntaje final", responseUser);
            }, 1000);
        }
    };

    const goToResults = () => {
        setLoadResults(true);
        setTimeout(() => {
            navigate("/registerForm");
        }, 3000);
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));

        if (user) {
            window.location.href = "/home";
        };

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div
            className="container-init-questions"
            style={{
                backgroundImage: (loading || loadResults) ? "none" : `url(${backgroundImages[currentQuestion - 1]})` || 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 0.5s ease-in-out',
            }}
        >
            {
                !loadResults && questionsAndAnswers.find(el => el.id === currentQuestion) && questionsAndAnswers.find(el => el.id === currentQuestion).messageToShow &&
                <p className="question-tip">{questionsAndAnswers.find(el => el.id === currentQuestion).messageToShow}</p>
            }
            {loading ?
                <LoadingLogo />
                :
                loadResults ?
                    <LoadingResult />
                    :
                    <>
                        <img className="question-logo" src={logoArbol} alt="LOG" />
                        <div className="container-question">
                            <div className="container-number">
                                <img className="question-icon" src={questionsAndAnswers.find(el => el.id === currentQuestion).cartoon} alt="NOIC" />
                                {/* <p className="question-number">
                                <b>{questionsAndAnswers.find(el => el.id === currentQuestion).icon}</b>
                            </p> */}
                            </div>
                            <div className="container-text">
                                <p className="question-text">{questionsAndAnswers.find(el => el.id === currentQuestion).id}.- {questionsAndAnswers.find(el => el.id === currentQuestion).question}</p>
                            </div>
                        </div>
                        {/* <p style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh", width: "50vw" }}><b>{questionsAndAnswers.find(el => el.id === currentQuestion).id}</b> {questionsAndAnswers.find(el => el.id === currentQuestion).question}</p> */}
                        <div className={`container-answers ${questionsAndAnswers.find(el => el.id === currentQuestion)?.answers.length > 3 ? " many-answers" : ""}`}>
                            <CustomCheckbox data={questionsAndAnswers.find(el => el.id === currentQuestion).answers} setData={setResponsePoints} resetData={responseUser} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh", width: "50vw" }}>
                            {
                                currentQuestion < questionsAndAnswers.length ?
                                    <button className="btn-green" disabled={responsePoints === ""} onClick={() => nextQuestion()}>Siguiente</button>
                                    :
                                    <button className="btn-green" disabled={responsePoints === ""} onClick={() => goToResults()}>Finalizar</button>
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default InitQuestions;
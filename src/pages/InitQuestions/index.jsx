import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { questionsAndAnswers } from '../../helpers/questionsAndAnswers';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import logoArbol from '../../assets/logos/logo-TAO-brown.svg';
import LoadingLogo from '../../components/LoadingLogo';
import CustomCheckbox from '../../components/CustomCheckbox';
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

    const nextQuestion = () => {
        const currentIndex = responseUser.findIndex(el => el.id === currentQuestion);
        const newResponse = [...responseUser];
        newResponse[currentIndex].points = responsePoints;

        setResponseUser(newResponse);
        setCurrentQuestion(currentQuestion + 1);
        setResponsePoints("");
        setTimeout(() => {
            console.log("Actual response", responseUser);
        }, 1000);
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
        <div className="container-init-questions">
            {loading ?
                <LoadingLogo />
                :
                <>
                    <img className="question-logo" src={logoArbol} alt="LOG" />
                    <div className="container-question">
                        <div className="container-number">
                            <p className="question-number">
                                <b>{questionsAndAnswers.find(el => el.id === currentQuestion).id}</b>
                            </p>
                        </div>
                        <div className="container-text">
                            <p className="question-text">{questionsAndAnswers.find(el => el.id === currentQuestion).question}</p>
                        </div>
                    </div>
                    {/* <p style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh", width: "50vw" }}><b>{questionsAndAnswers.find(el => el.id === currentQuestion).id}</b> {questionsAndAnswers.find(el => el.id === currentQuestion).question}</p> */}
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", height: "10vh", width: "70vw" }}>
                        <CustomCheckbox data={questionsAndAnswers.find(el => el.id === currentQuestion).answers} setData={setResponsePoints} resetData={responseUser} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh", width: "50vw" }}>
                        {
                            currentQuestion < questionsAndAnswers.length ?
                                <button className="btn-green" disabled={responsePoints === ""} onClick={() => nextQuestion()}>Siguiente</button>
                                :
                                <Link to="/registerForm">
                                    <button className="btn-green" disabled={responsePoints === ""} onClick={() => nextQuestion()}>Finalizar</button>
                                </Link>
                        }
                    </div>
                </>
            }
        </div>
    );
};

export default InitQuestions;
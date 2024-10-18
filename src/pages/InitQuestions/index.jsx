import React, { useState } from 'react';
import { questionsAndAnswers } from '../../helpers/questionsAndAnswers';
import { Link } from 'react-router-dom';
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
    ]);

    const [responsePoints, setResponsePoints] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState(1);

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

    return (
        <div className="container-init-questions">
            <p style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh", width: "50vw" }}>Mi árbol logo</p>
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
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh", width: "50vw" }}>
                <CustomCheckbox data={questionsAndAnswers.find(el => el.id === currentQuestion).answers} setData={setResponsePoints} resetData={responseUser} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh", width: "50vw" }}>
                {
                    currentQuestion < 5 ?
                        <button className="btn-green" disabled={responsePoints === ""} onClick={() => nextQuestion()}>Siguiente</button>
                        :
                        <Link to="/home">
                            <button className="btn-green" disabled={responsePoints === ""} onClick={() => nextQuestion()}>Finalizar</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default InitQuestions;
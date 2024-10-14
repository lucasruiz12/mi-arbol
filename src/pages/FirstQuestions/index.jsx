import React, { useState } from 'react';
import { questionsAndAnswers } from '../../helpers/questionsAndAnswers';
import './style.css';
import { Link } from 'react-router-dom';

const FirstQuestions = () => {

    const [responseUser, setResponseUser] = useState([
        {
            id: 1,
            answer: "",
            points: 0
        },
        {
            id: 2,
            answer: "",
            points: 0
        },
        {
            id: 3,
            answer: "",
            points: 0
        },
        {
            id: 4,
            answer: "",
            points: 0
        },
        {
            id: 5,
            answer: "",
            points: 0
        }
    ]);

    const [currentQuestion, setCurrentQuestion] = useState(1);

    const nextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        <div>
            <p>Mi árbol</p>
            <p>Pregunta: {questionsAndAnswers.find(el => el.id === currentQuestion).question}</p>
            {/* <div> // RESOLVER TEMA PREGUNTAS
                {questionsAndAnswers.find(el => el.id === currentQuestion).answers.map((el, idx) => {
                    return (
                        <p key={idx}>{el}</p>
                    )
                })}
            </div> */}
            {
                currentQuestion < 4 ?
                    <button onClick={() => nextQuestion()}>Siguiente</button>
                    :
                    <Link to="/home">
                        <button onClick={() => nextQuestion()}>Finalizar</button>
                    </Link>
            }
        </div>
    );
};

export default FirstQuestions;
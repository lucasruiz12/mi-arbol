import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questionsAndAnswers } from '../../helpers/questionsAndAnswers';
import { CARBON_POINTS, IS_AUTHENTICATED } from '../../helpers/constants';
import logoArbol from '../../assets/logos/logo-TAO-brown.svg';
import LoadingLogo from '../../components/LoadingLogo';
import CustomCheckbox from '../../components/CustomCheckbox';
import { backgroundImages, backgroundImagesMovil } from '../../helpers/backgroundImages';
import LoadingResult from '../../components/LoadingResult';
import './style.css';
import BackArrow from '../../components/BackArrow';

const InitQuestions = () => {
    const [responseUser, setResponseUser] = useState([
        { id: 1, answer: "", points: 0, referenceQuestion: null, countPoints: false, },
        { id: 2, answer: "", points: 0, referenceQuestion: 1, countPoints: false, },
        { id: 3, answer: "", points: 0, referenceQuestion: null, countPoints: true, },
        { id: 4, answer: "", points: 0, referenceQuestion: null, countPoints: false, },
        { id: 5, answer: "", points: 0, referenceQuestion: 4, countPoints: true, },
        { id: 6, answer: "", points: 0, referenceQuestion: 2, countPoints: false, },
        { id: 7, answer: "", points: 0, referenceQuestion: 6, countPoints: true, },
        { id: 8, answer: "", points: 0, referenceQuestion: null, countPoints: true, },
        { id: 9, answer: "", points: 0, referenceQuestion: null, countPoints: false, },
        { id: 10, answer: "", points: 0, referenceQuestion: 9, countPoints: true, },
        { id: 11, answer: "", points: 0, referenceQuestion: null, countPoints: true, },
        { id: 12, answer: "", points: 0, referenceQuestion: null, countPoints: false, },
        { id: 13, answer: "", points: 0, referenceQuestion: 12, countPoints: true, },
        { id: 14, answer: "", points: 0, referenceQuestion: 100, countPoints: true, },
        { id: 15, answer: "", points: 0, referenceQuestion: null, countPoints: true, },
        { id: 16, answer: "", points: 0, referenceQuestion: null, countPoints: true, },
    ]);

    const [responsePoints, setResponsePoints] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [loading, setLoading] = useState(true);
    const [loadResults, setLoadResults] = useState(false);
    const [backgroundLoaded, setBackgroundLoaded] = useState(false);

    const navigate = useNavigate();

    const nextQuestion = () => {
        const currentIndex = responseUser.findIndex(el => el.id === currentQuestion);
        const newResponse = [...responseUser];
        newResponse[currentIndex].points = responsePoints;

        setResponseUser(newResponse);

        if (currentQuestion === 16) {
            goToResults();
            setTimeout(() => {
                const newResponseUser = [];
                let allMultiply = 0;
                responseUser.forEach(el => {
                    if (el.referenceQuestion) {
                        if (el.referenceQuestion === 100) {
                            allMultiply = el.points;
                        } else {
                            const multiply = el.points;
                            const newPoints = {
                                ...el,
                                points: newResponseUser[el.referenceQuestion - 1].points * multiply,
                            };
                            newResponseUser.push(newPoints);
                        }
                    } else {
                        newResponseUser.push(el);
                    };
                });
                // console.log("RESPUESTAS FINALES", newResponseUser);
                const totalPoints = newResponseUser.filter(el => el.countPoints).reduce((acc, el) => acc + el.points, 0) * allMultiply;
                localStorage.setItem(CARBON_POINTS, JSON.stringify(totalPoints));
            }, 1000);
        } else {
            setCurrentQuestion(currentQuestion + 1);
            setResponsePoints("");
        };
    };

    const goToResults = () => {
        setLoadResults(true);
        setTimeout(() => {
            navigate("/home");
        }, 7500);
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));

        if (user) {
            window.location.href = "/home";
        };

        setTimeout(() => {
            setLoading(false);
        }, 3000);

        const backgroundImage = window.innerWidth > 768
            ? backgroundImages[currentQuestion - 1]
            : backgroundImagesMovil[currentQuestion - 1];

        const img = new Image();
        img.onload = () => setBackgroundLoaded(true);
        img.src = backgroundImage;

    }, [currentQuestion]);

    return (
        <div
            className="container-init-questions"
            style={{
                backgroundImage: (loading || loadResults) ? "none" : backgroundLoaded ? `url(${window.innerWidth > 768 ? backgroundImages[currentQuestion - 1] : backgroundImagesMovil[currentQuestion - 1]})` : 'none',
                backgroundColor: loadResults ? "transparent" : "#C8D390",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 1s ease-in-out',
            }}
        >
            {
                currentQuestion > 1 && !loadResults &&
                <BackArrow handleAction={() => setCurrentQuestion(currentQuestion - 1)} />
            }
            {
                // !loadResults && questionsAndAnswers.find(el => el.id === currentQuestion) && questionsAndAnswers.find(el => el.id === currentQuestion).messageToShow &&
                // <p className="question-tip">{questionsAndAnswers.find(el => el.id === currentQuestion).messageToShow}</p>
            }
            {loading ?
                <LoadingLogo />
                :
                loadResults ?
                    <LoadingResult message="Calculando resultados" />
                    :
                    <>
                        <div className="container-question-logo">
                            <img className="question-logo" src={logoArbol} alt="LOG" />
                        </div>
                        <div className="container-question-count">
                            <p className="question-count">Pregunta {currentQuestion}/16</p>
                        </div>
                        <div className="container-question">
                            <div className="container-text">
                                <p className="question-text">{questionsAndAnswers.find(el => el.id === currentQuestion).id}.- {questionsAndAnswers.find(el => el.id === currentQuestion).question}</p>
                            </div>
                        </div>
                        <div className={`container-answers ${questionsAndAnswers.find(el => el.id === currentQuestion)?.answers.length > 3 ? " many-answers" : ""}`}>
                            <CustomCheckbox data={questionsAndAnswers.find(el => el.id === currentQuestion).answers} setData={setResponsePoints} resetData={responseUser} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh", width: "50vw" }}>
                            <button className={`btn-green${(responsePoints === "") ? " disabled" : ""}`} disabled={responsePoints === ""} onClick={() => nextQuestion()}>{currentQuestion < questionsAndAnswers.length ? "Siguiente" : "Finalizar"}</button>
                        </div>
                    </>
            }
        </div>
    );
};

export default InitQuestions;
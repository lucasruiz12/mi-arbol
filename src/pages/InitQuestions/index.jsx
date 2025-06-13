import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questionsAndAnswers } from '../../helpers/questionsAndAnswers';
import { CARBON_POINTS, CATEGORY_POINTS } from '../../helpers/constants';
import logoArbol from '../../assets/logos/logo-TAO-brown.svg';
import LoadingLogo from '../../components/LoadingLogo';
import CustomCheckbox from '../../components/CustomCheckbox';
import { backgroundImages, backgroundImagesMovil } from '../../helpers/backgroundImages';
import LoadingResult from '../../components/LoadingResult';
import BackArrow from '../../components/BackArrow';
import PreRegister from '../../components/PreRegister';
import loginConnections from '../../helpers/loginConnections';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import './style.css';

const InitQuestions = () => {
    const [responseUser, setResponseUser] = useState([
        { id: 1, answer: '', points: 0, referenceQuestion: null, countPoints: false },
        { id: 2, answer: '', points: 0, referenceQuestion: 1, countPoints: false },
        { id: 3, answer: '', points: 0, referenceQuestion: null, countPoints: true },
        { id: 4, answer: '', points: 0, referenceQuestion: null, countPoints: false },
        { id: 5, answer: '', points: 0, referenceQuestion: 4, countPoints: true },
        { id: 6, answer: '', points: 0, referenceQuestion: 2, countPoints: false },
        { id: 7, answer: '', points: 0, referenceQuestion: 6, countPoints: true },
        { id: 8, answer: '', points: 0, referenceQuestion: null, countPoints: true },
        { id: 9, answer: '', points: 0, referenceQuestion: null, countPoints: false },
        { id: 10, answer: '', points: 0, referenceQuestion: 9, countPoints: true },
        { id: 11, answer: '', points: 0, referenceQuestion: null, countPoints: true },
        { id: 12, answer: '', points: 0, referenceQuestion: null, countPoints: false },
        { id: 13, answer: '', points: 0, referenceQuestion: 12, countPoints: true },
        { id: 14, answer: '', points: 0, referenceQuestion: 100, countPoints: true },
        { id: 15, answer: '', points: 0, referenceQuestion: null, countPoints: true },
        { id: 16, answer: '', points: 0, referenceQuestion: null, countPoints: true },
    ]);

    const [responsePoints, setResponsePoints] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [loading, setLoading] = useState(true);
    const [loadResults, setLoadResults] = useState(false);
    const [backgroundLoaded, setBackgroundLoaded] = useState(false);
    const [showPreRegister, setShowPreRegister] = useState(false);
    const [pointsToPreRegister, setPointsToPreRegister] = useState({});
    const [currentBackground, setCurrentBackground] = useState('');
    const [fadeState, setFadeState] = useState('fade-in');

    const navigate = useNavigate();

    const calculatePoints = (responses) => {
        const newResponseUser = [];
        let allMultiply = 0;
        responses.forEach((el) => {
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
            }
        });
        const responsesFilter = newResponseUser.filter((el) => el.countPoints);
        const carbonCategories = [0, 0, 0];
        responsesFilter.forEach((el) => {
            if (el.id < 8) {
                carbonCategories[0] += el.points * allMultiply;
            } else if (el.id < 12) {
                carbonCategories[1] += el.points * allMultiply;
            } else {
                carbonCategories[2] += el.points * allMultiply;
            }
        });
        const totalPoints = carbonCategories.reduce((acc, el) => acc + el, 0);
        return { totalPoints, carbonCategories };
    };

    const nextQuestion = () => {
        const currentIndex = responseUser.findIndex((el) => el.id === currentQuestion);
        const newResponse = [...responseUser];
        newResponse[currentIndex].points = responsePoints;
        setResponseUser(newResponse);

        if (currentQuestion === 16) {
            setLoading(true);
            setShowPreRegister(true);
            setTimeout(() => {
                const { totalPoints, carbonCategories } = calculatePoints(newResponse);
                const pointsToSave = {
                    carbonPoints: JSON.stringify(totalPoints),
                    categoryPoints: JSON.stringify(carbonCategories),
                };
                setPointsToPreRegister(pointsToSave);
                localStorage.setItem(CARBON_POINTS, JSON.stringify(totalPoints));
                localStorage.setItem(CATEGORY_POINTS, JSON.stringify(carbonCategories));
                setLoading(false);
            }, 2000);
        } else {
            setFadeState('fade-out');
            const isDesktop = window.innerWidth > 768;
            const nextImage = isDesktop ? backgroundImages[currentQuestion] : backgroundImagesMovil[currentQuestion];
            const img = new Image();
            img.onload = () => {
                setTimeout(() => {
                    setCurrentQuestion(currentQuestion + 1);
                    setCurrentBackground(nextImage);
                    setFadeState('fade-in');
                    setResponsePoints('');
                }, 500); // Duración de la transición
            };
            img.src = nextImage;
        }
    };

    const goToResults = (data) => {
        setLoading(true);
        loginConnections
            .createPreregister({ ...data, ...pointsToPreRegister })
            .then((response) => {
                if (response.data.success) {
                    setLoadResults(true);
                    setTimeout(() => {
                        navigate('/home');
                    }, 3000);
                }
            })
            .catch((err) => {
                setTimeout(() => {
                    toast.error(err.response.data.message ?? 'Error! Ya existe un usuario con ese correo.', {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'colored',
                        transition: Bounce,
                    });
                    setLoading(false);
                }, 2000);
                console.error(err);
            });
    };

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        const isDesktop = window.innerWidth > 768;
        const currentImage = isDesktop ? backgroundImages[currentQuestion - 1] : backgroundImagesMovil[currentQuestion - 1];

        const img = new Image();
        img.onload = () => {
            setCurrentBackground(currentImage);
            setBackgroundLoaded(true);
            setFadeState('fade-in');
        };
        img.src = currentImage;

        return () => clearTimeout(timer);
    }, [currentQuestion]);

    return (
        <div className="container-init-questions" style={{ backgroundColor: loading || showPreRegister ? "transparent" : "#F7FFDA" }}>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
            {currentQuestion > 1 && !loadResults && !showPreRegister && (
                <BackArrow handleAction={() => setCurrentQuestion(currentQuestion - 1)} />
            )}
            {loading ? (
                <LoadingLogo />
            ) : showPreRegister ? (
                <PreRegister goToResults={goToResults} />
            ) : loadResults ? (
                <LoadingResult message="Calculando resultados" />
            ) : (
                <div className="question-content">
                    <div
                        className={`background-layer ${fadeState}`}
                        style={{
                            backgroundImage: backgroundLoaded ? `url(${currentBackground})` : 'none',
                            backgroundColor: '#F7FFDA',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="container-question-logo d-flex justify-content-center justify-content-md-start">
                        <img className="question-logo" src={logoArbol} alt="Logo de Más Raíces, Menos Huella" />
                    </div>
                    <div className="container-question-count d-flex justify-content-center justify-content-md-end">
                        <p className="question-count">Pregunta {currentQuestion}/16</p>
                    </div>
                    <div className="container-question d-flex justify-content-center">
                        <div className="container-text col-12 col-md-8 col-lg-6">
                            <p className="question-text">
                                {questionsAndAnswers.find((el) => el.id === currentQuestion).id}.-{' '}
                                {questionsAndAnswers
                                    .find((el) => el.id === currentQuestion)
                                    .question.split('\n')
                                    .map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                            </p>
                        </div>
                    </div>
                    <div
                        className={`container-answers d-flex justify-content-center align-items-start ${questionsAndAnswers.find((el) => el.id === currentQuestion)?.answers.length > 3 ? 'many-answers' : ''
                            }`}
                    >
                        <CustomCheckbox
                            data={questionsAndAnswers.find((el) => el.id === currentQuestion).answers}
                            setData={setResponsePoints}
                            resetData={responseUser}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            className={`btn-green${responsePoints === '' ? ' disabled' : ''}`}
                            disabled={responsePoints === ''}
                            onClick={nextQuestion}
                        >
                            {currentQuestion < questionsAndAnswers.length ? 'Siguiente' : 'Finalizar'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InitQuestions;
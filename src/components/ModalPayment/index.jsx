import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { IS_AUTHENTICATED, PRICE_TO_PAY } from '../../helpers/constants';
import { videoCover } from '../../helpers/fullVideo';
import handlePayment from '../../helpers/stripePayments';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import './style.css';


const ModalPayment = ({ currentPrice, showModal, hideModal }) => {

    const [showButtons, setShowButtons] = useState(false);
    const [sessionUser, setSessionUser] = useState("");

    const updatePayment = async (amount, userId, email, token) => {
        try {
            await handlePayment(amount, userId, email, token);
        } catch (err) {
            toast.error('Ocurrió un error en el pago! Reintentar.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));
        if (user) {
            setSessionUser(user);
        };
        setTimeout(() => {
            setShowButtons(true);
        }, 5000);
    }, []);

    return (
        <Modal size="lg" backdrop={"static"} show={showModal} onHide={hideModal}>
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
            <Modal.Header>
                <h3 className="modal-payment-title">
                    Muchas gracias por tu apoyo
                </h3>
                <button className="btn-close-modal" onClick={() => hideModal()}>
                    X
                </button>
            </Modal.Header>
            <Modal.Body>
                <div className="container-payment-form">
                    <div className="container-pay-request">
                        <span className="pay-greetings">Con tu contribución estamos haciendo un mundo mejor</span>
                        <div className="container-video-checkout">
                            <video autoPlay muted loop className="video-checkout">
                                <source src={window.innerWidth >= 768 ? videoCover : videoCover} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="container-buttons-confirm">
                        {
                            showButtons &&
                            (sessionUser ?
                                <button className="btn-green payment" onClick={() => updatePayment(currentPrice, sessionUser.id.toString(), sessionUser.email, sessionUser.token)}>Continuar</button>
                                :
                                <Link to="/registerForm" onClick={() => localStorage.setItem(PRICE_TO_PAY, currentPrice)} className="container-link-payment">
                                    <button className="btn-green payment">Continuar</button>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ModalPayment;
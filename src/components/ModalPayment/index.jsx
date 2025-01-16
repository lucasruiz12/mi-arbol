import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import { videoCover } from '../../helpers/fullVideo';
import handlePayment from '../../helpers/stripePayments';
import './style.css';


const ModalPayment = ({ currentPrice, showModal, hideModal }) => {

    const [currentUserId, setCurrentUserId] = useState("");
    const [currentEmail, setCurrentEmail] = useState("");
    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        const sessionUser = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));
        const idToSet = sessionUser.id;
        const emailToSet = sessionUser.email;
        setCurrentUserId(idToSet.toString());
        setCurrentEmail(emailToSet);
        setTimeout(() => {
            setShowButtons(true);
        }, 5000);
    }, []);

    return (
        <Modal size="lg" backdrop={"static"} show={showModal} onHide={hideModal}>
            <Modal.Header>
                <h3 className="modal-payment-title">
                    Muchas gracias por tu apoyo
                </h3>
                <button className="btn-close-modal" onClick={() => hideModal()}>
                    {/* <img src={closeModal} alt="X" /> */}
                    X
                </button>
            </Modal.Header>
            <Modal.Body>
                <div className="container-payment-form">
                    <div className="container-pay-request">
                        <span className="pay-greetings">Con tu contribución estamos haciendo un mundo mejor</span>
                        <div className="container-video-checkout">
                            <video autoPlay muted loop className="video-checkout">
                                {/* <source src={window.innerWidth >= 768 ? loginVideo : loginMobileVideo} type="video/mp4" /> */}
                                <source src={window.innerWidth >= 768 ? videoCover : videoCover} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="container-buttons-confirm">
                        {
                            showButtons &&
                            <>
                                {/* <button className="btn-green" onClick={() => window.location.href = `${linkPayment}?prefilled_email=${currentEmail}`}>Sí</button> */}
                                <button className="btn-green" onClick={() => handlePayment(currentPrice, currentUserId, currentEmail)}>Continuar con el pago</button>
                            </>
                        }
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ModalPayment;
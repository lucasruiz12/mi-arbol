// import { PUBLIC_KEY } from '../../env';
import { SESSION_ID_PAYMENT } from './constants';
import loginConnections from './loginConnections';

const handlePayment = async (amount, userId, email) => {
    console.log("ENTRA A INTENTAR PAGAR")
    try {
        const response = await loginConnections.createSubscription({ amount, userId, email });
        const { url, id } = response.data; // Obtén la URL de la sesión de Checkout

        if (url) {
            localStorage.setItem(SESSION_ID_PAYMENT, id);
            window.location.href = url;
        } else {
            console.error('No se recibió una URL de sesión de Stripe.');
            alert('Hubo un problema al crear la sesión de pago.');
        };
    } catch (error) {
        console.error('Error en el flujo de pago:', error.message);
        alert('Ocurrió un problema. Por favor, inténtalo de nuevo.');
    };
};

export default handlePayment;

import { SESSION_ID_PAYMENT } from './constants';
import loginConnections from './loginConnections';

const handlePayment = async (amount, userId, email, token) => {
    try {
        const response = await loginConnections.createSubscription({ amount, userId, email }, token);
        const { url, id } = response.data;

        if (url) {
            localStorage.setItem(SESSION_ID_PAYMENT, id);
            window.location.href = url;
        } else {
            console.error('No se recibió una URL de sesión de Stripe.');
            throw new Error('Hubo un problema al crear la sesión de pago.');
        };
    } catch (error) {
        console.error('Error en el flujo de pago:', error.message);
        throw new Error('Ocurrió un problema. Por favor, inténtalo de nuevo.');
    };
};

export default handlePayment;

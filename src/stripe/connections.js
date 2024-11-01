import Stripe from 'stripe';
import { SECRET_KEY } from '../../env';

const stripe = new Stripe(SECRET_KEY);

export const getAllSubscriptions = async () => {
    try {
        const subscriptions = await stripe.subscriptions.list();
        console.log('Lista de suscripciones:', subscriptions.data);
    } catch (error) {
        console.error('Error al obtener las suscripciones:', error);
    };
};

export const getCustomerByEmail = async (email) => {
    try {
        const customers = await stripe.customers.list({ email });

        if (customers.data.length === 0) return;

        const customerId = customers.data[0].id;
        const activeSubscriptions = await stripe.subscriptions.list({
            customer: customerId,
            status: 'active',
        });

        if (activeSubscriptions?.data?.length > 0) {
            return activeSubscriptions.data;
        };

    } catch (error) {
        console.error('Error al buscar el cliente:', error);
    };
};

export const getCustomerSubscriptions = async (customer) => {
    try {
        const subscriptions = await stripe.subscriptions.list({ customer });
        return subscriptions;

        // if (subscriptions.data.length === 0) {
        //     return subscriptions;
        // }

        // subscriptions.data.forEach((subscription) => {
        //     subscription.items.data.forEach((item) => {
        //         console.log(`Producto: ${item.price.product}`);
        //         console.log(`Precio: ${item.price.unit_amount / 100} ${item.price.currency}`);
        //     });
        // });
    } catch (error) {
        console.error('Error al obtener suscripciones:', error);
    };
};

const getActiveSubscription = async (customerId) => {
    const subscriptions = await stripe.subscriptions.list({
        customer: customerId,
        status: 'active'
    });

    return subscriptions.data.length > 0 ? subscriptions.data[0] : null; // Devuelve la suscripción activa o null
};

const upgradeSubscription = async (subscriptionId, newPriceId) => {
    try {
        const updatedSubscription = await stripe.subscriptions.update(subscriptionId, {
            cancel_at_period_end: false, // Si deseas que el cambio sea inmediato
            items: [
                {
                    id: subscriptionId,
                    price: newPriceId, // ID del precio del nuevo plan
                },
            ],
            proration_behavior: 'create_prorations', // Proporcional para ajustar el pago
        });

        console.log('Suscripción actualizada:', updatedSubscription);
    } catch (error) {
        console.error('Error al actualizar la suscripción:', error);
    }
};

export const manageCustomerSubscription = async (customerId, newPriceId) => {
    try {
        const activeSubscription = await getActiveSubscription(customerId);

        if (activeSubscription) {
            console.log('El cliente ya tiene una suscripción activa. Se procede a actualizar.');
            await upgradeSubscription(activeSubscription.id, newPriceId);
        } else {
            console.log('No hay suscripción activa. Se crea una nueva.');
            // Código para crear una nueva suscripción aquí
        }
    } catch (error) {
        console.error('Error en el manejo de la suscripción:', error);
    }
};
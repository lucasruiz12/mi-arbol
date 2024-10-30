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
        return customers;
        // if (customers.data.length === 0) {
        //     return customers;
        // }
        // const customer = customers.data[0];
        // return customer;

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
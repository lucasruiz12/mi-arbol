import { URL_BASE } from "./constants";
import axios from 'axios';

export default {
    loginUser: (data) => {
        return axios.post(`${URL_BASE}/api/users/login`, data);
    },
    createUser: (data) => {
        return axios.post(`${URL_BASE}/api/users/create`, data);
    },
    createSubscription: (data) => {
        return axios.post(`${URL_BASE}/api/stripe/checkout`, data);
    },
    verifyPayment: (data) => {
        return axios.post(`${URL_BASE}/api/stripe/verifyPayment`, data);
    },
};
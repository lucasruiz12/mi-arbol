import { ACCESS_TOKEN, URL_BASE } from "./constants";
import axios from 'axios';

let token = localStorage.getItem(ACCESS_TOKEN);

const axiosToken = axios.create({
    headers: { 'Authorization': token },
});

export default {
    loginUser: (data) => {
        return axios.post(`${URL_BASE}/api/users/login`, data);
    },
    createUser: (data) => {
        return axios.post(`${URL_BASE}/api/users/create`, data);
    },
    updateUser: (data) => {
        return axios.post(`${URL_BASE}/api/users/update`, data);
    },
    createSubscription: (data, forceToken) => {
        if (token) {
            return axiosToken.post(`${URL_BASE}/api/stripe/checkout`, data);
        } else {
            return axios.create({
                headers: { 'Authorization': forceToken },
            }).post(`${URL_BASE}/api/stripe/checkout`, data);
        };
    },
    verifyPayment: (data) => {
        return axios.post(`${URL_BASE}/api/stripe/verifyPayment`, data);
    },
    getSeedsByUserId: (user_id) => {
        if (token) {
            return axiosToken.get(`${URL_BASE}/api/seeds/user/${user_id}`);
        } else {
            return axios.create({
                headers: { 'Authorization': forceToken },
            }).get(`${URL_BASE}/api/seeds/user/${user_id}`);
        };
    },
};
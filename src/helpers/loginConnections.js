import { URL_BASE } from "./constants";
import axios from 'axios';

export default {
    loginUser: (data) => {
        return axios.post(`${URL_BASE}/api/users/login`, data);
    },
    createUser: (data) => {
        return axios.post(`${URL_BASE}/api/users/create`, data);
    }
};
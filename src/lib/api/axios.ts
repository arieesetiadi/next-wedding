import axios from 'axios';

const baseURL = process.env.API_URL_URL;

export const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

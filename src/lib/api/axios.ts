import axios from 'axios';

const baseURL = 'http://localhost:3000';

export const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

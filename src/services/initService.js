import axios from 'axios';
export const API_URL = `${process.env.REACT_APP_BACKEND_API}`;

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getQueryParams = (params) => {
    const filteredParams = Object.keys(params).reduce((acc, key) => {
        if (params[key]) {
            acc[key] = params[key];
        }
        return acc;
    }, {});
    return Object.keys(filteredParams)
        .map((key) => `${key}=${filteredParams[key]}`)
        .join('&');
};

export default instance;

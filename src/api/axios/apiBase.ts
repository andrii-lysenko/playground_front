import axios, { AxiosRequestConfig } from 'axios';

import { REST_API_URL } from '~/config';

const axiosConfig: AxiosRequestConfig = {
    baseURL: REST_API_URL,
    timeout: 60000,
    responseType: 'json',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
};

const client = axios.create(axiosConfig);

export default client;

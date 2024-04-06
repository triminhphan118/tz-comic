import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import { errorInterceptor, requestInterceptor, successInterceptor } from './interceptors';

const axiosRequestConfig: AxiosRequestConfig = {
    baseURL: 'https://sv1.otruyencdn.com/v1/api',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
};

const apiCDN: AxiosInstance = axios.create(axiosRequestConfig);

apiCDN.interceptors.request.use(requestInterceptor);
apiCDN.interceptors.response.use(successInterceptor, errorInterceptor);

export { apiCDN };

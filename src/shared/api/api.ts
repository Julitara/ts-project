import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

axios.defaults.baseURL = 'https://frontend-ts-server-jscsvb1ys-julitaras-projects.vercel.app';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = 'Bearer YOUR_TOKEN'; // Если требуется авторизация
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 
'https://tarasova-frontend-project.netlify.app';

export const $api = axios.create({
    baseURL: __API__,
});

$api.interceptors.request.use(config => {
    if (config.headers) {
        config.headers.authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    }

    return config;
});
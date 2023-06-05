import axios from 'axios';

export const API = () => {
    const defaultParams = { key: '35612110a4e744efb296d23f0856f1c7' };

    const api = axios.create({
        withCredentials: true,
        baseURL: 'https://api.rawg.io',
        params: defaultParams
    });

    return { api, defaultParams };
};

import { API } from '@/api';

export const fetchGames = async ({ urlParams }) => {
    try {
        const response = await API().api.get('/api/games', {
            params: { ...API().defaultParams, ...urlParams }
        });
        return response.data;
    } catch (e) {
        throw e;
    }
};

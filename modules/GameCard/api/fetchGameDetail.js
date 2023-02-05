import { API } from '@/api';

export const fetchGameDetail = async ({ id }) => {
  try {
    const response = await API().api.get(`/api/games/${id}`);
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const fetchGameScreenshots = async ({ id }) => {
  try {
    const response = await API().api.get(`/api/games/${id}/screenshots`);
    return response.data;
  } catch (e) {
    throw e;
  }
};
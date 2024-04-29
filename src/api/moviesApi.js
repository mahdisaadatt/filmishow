import axios from 'axios';
import { getCookie } from '../utils/js';

const moviesApi = axios.create({
  baseURL: 'https://filmishow.up.railway.app',
});

const getAllMovies = async () => {
  const { data } = await moviesApi.get('/home/');
  return data;
};

const getArrivalMovies = async () => {
  const { data } = await moviesApi.get('/arrival/');
  return data;
};

const getMovie = async id => {
  const { data } = await moviesApi.get(`/film/${id}/`);
  return data;
};

const getFavoriteMovies = async () => {
  const access = getCookie('access-token');
  const { data } = await moviesApi.get(`/favorites/`, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
  return data;
};

const addFavoriteMovie = async (filmId, userId) => {
  const access = getCookie('access-token');
  const { data } = await moviesApi.post(
    `/add-favorite/${filmId}/`,
    { userId },
    {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    }
  );
  return data;
};

const likeMovie = async id => {
  const access = getCookie('access-token');
  const refresh = getCookie('refresh-token');
  const { data } = await moviesApi.post(
    `/film/like/${id}/`,
    { refresh: refresh },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
    }
  );
  return data;
};

const disLikeMovie = async id => {
  const access = getCookie('access-token');
  const refresh = getCookie('refresh-token');
  const { data } = await moviesApi.post(
    `/film/dislike/${id}/`,
    { refresh: refresh },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
    }
  );
  return data;
};

export {
  getAllMovies,
  getArrivalMovies,
  getMovie,
  getFavoriteMovies,
  addFavoriteMovie,
  likeMovie,
  disLikeMovie,
};

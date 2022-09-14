import axios from 'axios';

const moviesApi = axios.create({
  baseURL: 'http://localhost:8000',
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

export { getAllMovies, getArrivalMovies, getMovie };

import axios from 'axios';

const moviesApi = axios.create({
  baseURL: 'http://localhost:8000',
});

const getMovies = async () => {
  const { data } = await moviesApi.get('/home/');
  return data;
};

const getMovie = async id => {
  return;
};

const addMovie = async () => {
  return;
};

const editMovie = async id => {
  return;
};

const deleteMovie = async id => {
  return;
};

export { getMovies, getMovie, addMovie, editMovie, deleteMovie };

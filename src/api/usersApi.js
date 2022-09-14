import axios from 'axios';
import { getCookie } from '../utils/js';

const usersApi = axios.create({
  baseURL: 'http://localhost:8000',
});

const signupUser = async (
  fullName,
  username,
  email,
  password,
  passwordConfirmation
) => {
  const data = await usersApi.post(
    '/signup/',
    JSON.stringify({
      full_name: fullName,
      username,
      email,
      password1: password,
      password2: passwordConfirmation,
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
  return data;
};

const loginUser = async (username, password) => {
  const data = await usersApi.post(
    '/api/token/',
    JSON.stringify({ username, password }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
  return data;
};

const logoutUser = async () => {
  const token = JSON.parse(getCookie('auth-tokens'));
  const data = await usersApi.post(
    '/api/token/logout/',
    { refresh_token: token.refresh },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access}`,
      },
    }
  );
  return data;
};

const newToken = async () => {
  const token = JSON.parse(getCookie('auth-tokens'));
  const data = await usersApi.post(
    '/api/token/refresh/',
    { refresh: token.refresh },
    {
      headers: {
        'Content-Type': 'application/,json',
        Authorization: `Bearer ${token.access}`
      },
    }
  );
  return data;
};

export { loginUser, signupUser, logoutUser, newToken };

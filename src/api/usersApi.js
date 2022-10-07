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
  const access = getCookie('access-token');
  const refresh = getCookie('refresh-token');
  const data = await usersApi.post(
    '/api/token/logout/',
    { refresh_token: refresh },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
    }
  );
  return data;
};

const newToken = async () => {
  const access = getCookie('access-token');
  const refresh = getCookie('refresh-token');
  const { data } = await usersApi.post(
    '/api/token/refresh/',
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

const getVerifyUserCode = async email => {
  const data = await usersApi.post(
    '/email/',
    { email },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
  return data;
};

const sendVerifyUserCode = async (email, token) => {
  const data = await usersApi.post(
    '/email/validation/',
    { email, token },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
  return data;
};

const getPassResetCode = async email => {
  const data = await usersApi.post(
    '/password_reset/',
    { email },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
  return data;
};

const validatePassResetCode = async token => {
  const data = await usersApi.post(
    '/password_reset/validate_token/',
    { token },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
  return data;
};

const confirmNewPass = async (password, token) => {
  const data = await usersApi.post(
    '/password_reset/confirm/',
    { password, token },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
  return data;
};

export {
  loginUser,
  signupUser,
  logoutUser,
  newToken,
  getVerifyUserCode,
  sendVerifyUserCode,
  getPassResetCode,
  validatePassResetCode,
  confirmNewPass,
};

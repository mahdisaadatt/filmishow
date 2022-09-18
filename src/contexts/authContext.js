import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { getCookie } from '../utils/js';

const Context = createContext();

export const AuthProvider = ({ children }) => {
  const accessTokenCookie = getCookie('access-token');
  const [accessToken, setAccessToken] = useState(
    accessTokenCookie !== undefined ? accessTokenCookie : ''
  );
  const [isLoggedIn, setLoggedIn] = useState(accessTokenCookie ? true : false);

  useEffect(() => {
    try {
      if (accessTokenCookie) {
        setAccessToken(jwt_decode(accessTokenCookie));
      }
    } catch (err) {
      console.log(err);
    }
  }, [isLoggedIn]);

  return (
    <Context.Provider
      value={{ accessToken, setAccessToken, isLoggedIn, setLoggedIn }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;

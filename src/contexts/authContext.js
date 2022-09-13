import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { getCookie } from '../utils/js';

const Context = createContext({});

export const AuthProvider = ({ children }) => {
  const loginToken = JSON.parse(getCookie('auth-tokens'));
  const [authTokens, setAuthTokens] = useState(
    loginToken !== undefined ? loginToken : {}
  );
  const [isLoggedIn, setLoggedIn] = useState(loginToken ? true : false);

  useEffect(() => {
    try {
      if (loginToken) {
        const decodedToken = jwt_decode(loginToken.access);
        setAuthTokens(decodedToken);
      }
    } catch (err) {
      console.log(err);
    }
  }, [isLoggedIn]);

  return (
    <Context.Provider
      value={{ authTokens, setAuthTokens, isLoggedIn, setLoggedIn }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;

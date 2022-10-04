import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-dark.svg';

const Logo = () => {
  return (
    <Link to="/" className="w-32 h-20">
      <div
        alt="FilmiShow Logo"
        style={{ backgroundSize: '100%' }}
        className="w-full h-full bg-center bg-no-repeat active:scale-95 transition-all dark:bg-logo-dark bg-logo-light"
      ></div>
    </Link>
  );
};

export default Logo;

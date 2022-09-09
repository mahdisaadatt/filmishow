import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="FilmiShow Logo"
        className="w-32 cursor-pointer active:scale-95 transition-all"
      />
    </Link>
  );
};

export default Logo;

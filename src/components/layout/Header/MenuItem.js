import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ toWhere, title }) => {
  return <li className="dark:hover:text-yellow-400 hover:text-yellow-500 transition"><Link to={toWhere}>{title}</Link></li>;
};

export default MenuItem;

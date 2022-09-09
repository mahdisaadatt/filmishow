import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ toWhere, title }) => {
  return <li className="hover:text-yellow-400 transition"><Link to={toWhere}>{title}</Link></li>;
};

export default MenuItem;

import React from 'react';
import { Link } from 'react-router-dom';

const DownloadButton = ({ toWhere, title }) => {
  return (
    <Link to={toWhere} className="px-6 py-2 bg-green-500 hover:bg-green-600 transition-all rounded-lg">
      {title}
    </Link>
  );
};

export default DownloadButton;

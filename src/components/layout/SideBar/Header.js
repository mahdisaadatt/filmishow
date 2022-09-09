import React from 'react';
import Neural from '../../common/Buttons/Neural';
import { FilmIcon } from '@heroicons/react/24/outline';
import { VideoCameraIcon } from '@heroicons/react/24/outline';

const Header = ({ title, desc, toWhere, icon }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center">
        {icon === 'movies' ? (
          <FilmIcon className="w-6 ml-2" />
        ) : icon === 'series' ? (
          <VideoCameraIcon className="w-6 ml-2" />
        ) : null}
        <div>
          <h3 className="font-bold">{title}</h3>
          <small className="text-yellow-default">{desc}</small>
        </div>
      </div>
      <Neural title="آرشیو" toWhere={toWhere} icon="arrowLeft" />
    </div>
  );
};

export default Header;

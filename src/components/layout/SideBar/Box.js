import React from 'react';
import Header from './Header';
import MovieCard from './MovieCard';

const Box = ({ title, desc, toWhere, icon }) => {
  return (
    <div className="w-full h-auto p-4 rounded-lg bg-gray-500 dark:bg-slate-700">
      <Header title={title} desc={desc} toWhere={toWhere} icon={icon} />
      <MovieCard />
    </div>
  );
};

export default Box;

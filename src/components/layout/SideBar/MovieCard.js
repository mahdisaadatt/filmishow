import React from 'react';
import { arrivalMovies } from '../../../data/arrivalMovies';
import { Link } from 'react-router-dom';
import { PlayIcon } from '@heroicons/react/24/solid';

const MovieCard = () => {
  const movies = arrivalMovies.slice(0, 8).map(movie => {
    return (
      <Link
        key={movie.id}
        to={
          movie.group === 'Movies'
            ? `/movie/${movie.id}/`
            : `/series/${movie.id}/`
        }
      >
        <div className="xl:w-20 w-18 h-32 group flex items-center justify-center overflow-hidden">
          <img
            src={movie.src}
            alt={movie.name}
            className="w-full h-full object-cover rounded-lg group-hover:opacity-40 transition-all"
          />
          <PlayIcon className="absolute w-10 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all" />
        </div>
      </Link>
    );
  });
  return (
    <div className="w-full h-full grid grid-cols-4 gap-4 py-4">{movies}</div>
  );
};

export default MovieCard;

import React from 'react';
import exampleVideo from '../../assets/videos/example.mp4';
import thumbnail from '../../assets/images/slider/spiderman.jpg';
import { FilmIcon } from '@heroicons/react/24/outline';

const MovieSummary = ({ movie }) => {
  return (
    <div className="flex md:flex-row flex-col my-10 w-full h-full">
      <video className="md:w-1/2" poster={thumbnail} preload="none" controls>
        <source src={exampleVideo} />
      </video>
      <div className="flex flex-col h-full md:w-1/2">
        <div className="md:my-5 my-4 md:mr-4">
          <div className="flex items-center mb-2">
            <FilmIcon className="w-6 ml-2" />
            <h2 className="text-xl font-yekan-bold">داستان فیلم</h2>
          </div>
          <p className="text-sm">{movie.summary}</p>
        </div>
        <div className="md:my-5 my-4 md:mr-4">
          <div className="flex items-center mb-2">
            <FilmIcon className="w-6 ml-2" />
            <h2 className="text-xl font-yekan-bold">درباره فیلم</h2>
          </div>
          <p className="text-sm">{movie.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieSummary;

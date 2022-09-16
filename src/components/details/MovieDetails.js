import React from 'react';
import { Link } from 'react-router-dom';
import imdbImg from '../../assets/icons/IMDB_Logo.svg';
import InteractionButton from './InteractionButton';

const MovieDetails = ({ movie }) => {
  let groupName;
  if (movie.group === 'Movie') {
    groupName = 'دانلود فیلم';
  } else if (movie.group === 'Series') {
    groupName = 'دانلود سریال';
  } else if (movie.group === 'Animation') {
    groupName = 'دانلود انیمیشن';
  } else {
    groupName = 'دانلود انیمه';
  }
  return (
    <div className="w-full h-auto flex lg:flex-row flex-col">
      <div className="flex md:flex-row flex-col justify-between overflow-hidden">
        <Link
          to={`/${movie.group.toLowerCase()}/${movie.id}/`}
          className="md:w-64"
        >
          <img
            src={movie.photo}
            alt={movie.eName}
            className="rounded-lg object-center w-full h-96"
          />
        </Link>
        <span className="w-32 h-12 items-center justify-center rounded-lg border-2 lg:hidden md:flex hidden border-yellow-300 dark:border-yellow-500">
          زیرنویس چسبیده
        </span>
      </div>
      <div className="w-full h-full lg:mr-4 mt-4 lg:mt-0 flex flex-col flex-1">
        <div>
          <h1 className="text-xl font-yekan-bold">
            {`${groupName} ${movie.eName} ${movie.pName}`}
          </h1>
          <div className="flex justify-between items-center w-full flex-wrap">
            <ul className="flex items-center my-3 flex-wrap">
              <li>
                {movie.genres.map(genre => (
                  <Link
                    className="m-px dark:hover:text-yellow-500 hover:text-yellow-300 transition-all"
                    key={genre.name}
                    to={`/genre/${genre.name}/`}
                  >
                    {genre.title + ' '}
                  </Link>
                ))}
              </li>
              <span className="px-2 text-gray-400">|</span>
              <li>
                <Link
                  to={`/release/${movie.yearOfPublication}/`}
                  className="dark:hover:text-yellow-500 hover:text-yellow-300 transition-all"
                >
                  {movie.yearOfPublication}
                </Link>
              </li>
              <span className="px-2 text-gray-400">|</span>
              <li>PG-13</li>
              <span className="px-2 text-gray-400">|</span>
              <li>
                {movie.countries.map(country => (
                  <Link
                    className="m-px dark:hover:text-yellow-500 hover:text-yellow-300 transition-all"
                    key={country.name}
                    to={`/genre/${country.name}/`}
                  >
                    {country.title + ' '}
                  </Link>
                ))}
              </li>
              <span className="px-2 text-gray-400">|</span>
              <li>{movie.time} دقیقه</li>
            </ul>
            <span className="p-2 rounded-lg border-2 md:hidden lg:block block border-yellow-300 dark:border-yellow-500">
              زیرنویس چسبیده
            </span>
          </div>
        </div>
        <div className="py-4 my-4 border-b border-t border-gray-400">
          <div className="flex items-center gap-2">
            <img src={imdbImg} alt="IMDB" className="w-10" />
            <p className="text-lg mt-2">
              <span>{movie.score}</span>
              <small className="mr-2">
                از 10 میانگین{' '}
                {movie.average_people && movie.average_people.toLocaleString()}{' '}
                نفر
              </small>
            </p>
          </div>
          <div className="flex flex-col justify-center py-2">
            <p>
              <span className="dark:text-gray-300 text-gray-500">
                بازیگران :{' '}
              </span>
              {movie.actors}
            </p>
            <p>
              <span className="dark:text-gray-300 text-gray-500">
                کارگردان :{' '}
              </span>
              {movie.directors}
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <InteractionButton />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

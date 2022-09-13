import React from 'react';
import { Link } from 'react-router-dom';
import { landingMovies } from '../../data/landingMovies';
import Default from './Buttons/Default';
import Infos from './Buttons/Infos';
import imdbLogo from '../../assets/icons/IMDB_Logo.svg';
import { getMovies } from '../../api/moviesApi';
import { useQuery } from '@tanstack/react-query';
import Loader from './Loader';
import {
  FlagIcon,
  LanguageIcon,
  ClockIcon,
  CalendarIcon,
  FolderIcon,
} from '@heroicons/react/24/outline';

const MoviePost = () => {
  const { isLoading, isError, error, data } = useQuery(['movies'], getMovies);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  const movies = data.map(movie => {
    // const genres = movie.genre.map(({ title, url }) => {
    //   return (
    //     <Link to={url} key={title}>
    //       <Infos title={title} />
    //     </Link>
    //   );
    // });
    // const countries = movie.countries.map(({ title, url }) => {
    //   return (
    //     <Link to={url} key={title}>
    //       <Infos title={title} />
    //     </Link>
    //   );
    // });
    // const languages = movie.languages.map(({ title, url }) => {
    //   return (
    //     <Link to={url} key={title}>
    //       <Infos title={title} />
    //     </Link>
    //   );
    // });
    return (
      <div
        key={movie.id}
        className="w-full text-white h-auto p-8 flex flex-col bg-gray-500 dark:bg-slate-700 rounded-lg mt-4"
      >
        <div className="flex w-full h-full sm:flex-row flex-col">
          <div className="overflow-hidden rounded-lg sm:w-72 sm:h-96 w-full h-80">
            <Link to={`/movie/${movie.id}/`}>
              <img
                src={movie.photo}
                alt={movie.name}
                className="w-full h-full hover:scale-110 transition-all duration-300 object-cover"
              />
            </Link>
          </div>
          <div className="sm:pr-6 sm:pt-0 pt-6 flex-1">
            <Link to={`/movie/${movie.id}/`}>
              <h1 className="text-xl font-yekan-bold">
                {`دانلود فیلم ${movie.name}`}
              </h1>
            </Link>
            <ul className="my-8">
              <li className="flex gap-x-2">
                <img src={imdbLogo} alt="IMDB" className="w-10" />
                <p className="text-lg mt-2">
                  <span className="text-yellow-400">{movie.score}</span>
                  {/* <small className="mr-2">
                    از 10 میانگین{' '}
                    {movie.imdbPoint.averagePeople.toLocaleString()} نفر
                  </small> */}
                </p>
              </li>
              <li className="flex items-center group flex-wrap">
                <div className="p-2 ml-1 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <FolderIcon className="w-4" />
                </div>
                <p className="ml-2">ژانر :</p>
                {movie.genre}
              </li>
              <li className="flex items-center group">
                <div className="p-2 ml-1 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <CalendarIcon className="w-4" />
                </div>
                <p className="ml-2">سال انتشار :</p>
                <Link to={`/release/${movie.yearOfPublication}/`}>
                  <Infos title={movie.yearOfPublication} />
                </Link>
              </li>
              <li className="flex items-center group flex-wrap">
                <div className="p-2 ml-1 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <FlagIcon className="w-4" />
                </div>
                <p className="ml-2">محصول :</p>
                {movie.country}
              </li>
              <li className="flex items-center group flex-wrap">
                <div className="p-2 ml-1 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <LanguageIcon className="w-4" />
                </div>
                {/* <p className="ml-2">زبان :</p>
                {languages} */}
              </li>
              <li className="flex items-center group">
                <div className="p-2 ml-1 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <ClockIcon className="w-4" />
                </div>
                {/* <p className="ml-2">مدت زمان :</p>
                <p>{movie.time} دقیقه</p> */}
              </li>
            </ul>
            <div className="bg-gray-600 dark:bg-slate-800 w-full py-2 px-4 rounded-lg lg:block hidden">
              <p>{movie.summary}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-600 dark:bg-slate-800 w-full py-2 px-4 sm:my-8 rounded-lg lg:hidden block">
          <p>{movie.summary}</p>
        </div>
        <div className="w-full h-full">
          <div className="sm:w-32 w-full sm:h-12 h-10 mr-auto lg:mt-6 mt-4">
            <Link to={`/movie/${movie.id}/`}>
              <Default
                title="دانلود فیلم"
                size="w-full h-full"
                icon="download"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return <>{movies.reverse()}</>;
};

export default MoviePost;

import React, { useContext } from 'react';
import imdbLogo from '../../assets/icons/IMDB_Logo.svg';
import { Link } from 'react-router-dom';
import Infos from './Buttons/Infos';
import AuthContext from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import Default from './Buttons/Default';
import { addFavoriteMovie } from '../../api/moviesApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  FlagIcon,
  LanguageIcon,
  ClockIcon,
  CalendarIcon,
  FolderIcon,
  BookmarkIcon,
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const AllMovies = ({ movie }) => {
  const { mutate, status } = useMutation(() => addFavoriteMovie(movie.id));
  const { accessToken, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const genres = movie.genres.map(({ name, title }, id) => {
    return (
      <Link
        to={`/genre/${name}/`}
        state={{ title, categoryName: 'ژانر' }}
        key={id}
      >
        <Infos title={title} />
      </Link>
    );
  });

  const countries = movie.countries.map(({ name, title }, id) => {
    return (
      <Link
        to={`/country/${name}/`}
        state={{ title, categoryName: 'محصول' }}
        key={id}
      >
        <Infos title={title} />
      </Link>
    );
  });

  const languages = movie.language.map(({ name, title }, id) => {
    return (
      <Link
        to={`/language/${name}/`}
        state={{ title, categoryName: 'زبان' }}
        key={id}
      >
        <Infos title={title} />
      </Link>
    );
  });

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

  const handleFavorite = () => {
    if (isLoggedIn) {
      mutate(
        { userId: accessToken.user_id },
        {
          onSuccess: data => {
            toast.success(t => (
              <div className="flex items-center justify-center">
                {data === '' ? (
                  <p>
                    فیلم به لیست علاقه <b className="text-green-600">اضافه</b>{' '}
                    شد
                  </p>
                ) : data === 205 ? (
                  <p>
                    فیلم از لیست علاقه <b className="text-red-600">حذف</b> شد
                  </p>
                ) : null}
                <button
                  className="p-2 bg-gray-200 rounded-lg m-1 font-yekan-bold"
                  onClick={() => toast.dismiss(t.id)}
                >
                  بستن
                </button>
              </div>
            ));
            queryClient.invalidateQueries(['favorites']);
          },
        }
      );
    } else {
      setTimeout(() => {
        navigate('/login/');
      }, 500);
    }
  };

  return (
    <div
      key={movie.id}
      className="w-full h-auto p-8 flex flex-col dark:bg-slate-700 bg-slate-200 rounded-lg mt-4"
    >
      <div className="flex w-full h-full sm:flex-row flex-col">
        <div className="overflow-hidden rounded-lg sm:w-72 sm:h-96 w-full h-full">
          <Link to={`/${movie.group.toLowerCase()}/${movie.id}/`}>
            <img
              src={movie.photo}
              alt={movie.name}
              className="w-full md:h-full h-[30rem] hover:scale-110 transition-all duration-300 md:object-cover object-center"
            />
          </Link>
        </div>
        <div className="sm:pr-6 sm:pt-0 pt-6 flex-1">
          <Link to={`/${movie.group.toLowerCase()}/${movie.id}/`}>
            <h1 className="text-xl font-yekan-bold">
              {`${groupName} ${movie.eName} ${movie.pName}`}
            </h1>
          </Link>
          <div className="flex justify-between items-start my-8 w-full md:flex-row flex-col">
            <ul>
              <li className="flex gap-x-2">
                <img src={imdbLogo} alt="IMDB" className="w-10" />
                <p className="text-lg mt-2">
                  <span className="dark:text-yellow-400 text-yellow-600">
                    {movie.score}
                  </span>
                  <small className="mr-2">
                    از 10 میانگین{' '}
                    {movie.average_people &&
                      movie.average_people.toLocaleString()}{' '}
                    نفر
                  </small>
                </p>
              </li>
              <li className="flex items-center group flex-wrap">
                <div className="p-2 ml-1 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <FolderIcon className="w-4" />
                </div>
                <p className="ml-2">ژانر :</p>
                {genres}
              </li>
              <li className="flex items-center group">
                <div className="p-2 ml-1 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <CalendarIcon className="w-4" />
                </div>
                <p className="ml-2">سال انتشار :</p>
                <Link
                  to={`/release/${movie.yearOfPublication}/`}
                  state={{
                    title: movie.yearOfPublication,
                    categoryName: 'سال انتشار',
                  }}
                >
                  <Infos title={movie.yearOfPublication} />
                </Link>
              </li>
              <li className="flex items-center group flex-wrap">
                <div className="p-2 ml-1 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <FlagIcon className="w-4" />
                </div>
                <p className="ml-2">محصول :</p>
                {countries}
              </li>
              <li className="flex items-center group flex-wrap">
                <div className="p-2 ml-1 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <LanguageIcon className="w-4" />
                </div>
                <p className="ml-2">زبان :</p>
                {languages}
              </li>
              <li className="flex items-center group">
                <div className="p-2 ml-1 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <ClockIcon className="w-4" />
                </div>
                <p className="ml-2">مدت زمان :</p>
                <p>{movie.time} دقیقه</p>
              </li>
            </ul>
            <div
              onClick={handleFavorite}
              className="cursor-pointer p-2 border md:mx-0 mx-auto md:mt-0 mt-2 dark:border-white border-black rounded-full group dark:hover:bg-white hover:bg-black transition-all"
            >
              <BookmarkIcon className="w-8 dark:group-hover:text-black group-hover:text-white" />
            </div>
          </div>
          <div className="dark:bg-slate-800 bg-slate-300 w-full py-2 px-4 rounded-lg lg:block hidden">
            <p>{movie.summary}</p>
          </div>
        </div>
      </div>
      <div className="dark:bg-slate-800 bg-slate-300 w-full py-2 px-4 sm:my-8 rounded-lg lg:hidden block">
        <p>{movie.summary}</p>
      </div>
      <div className="w-full h-full">
        <div className="sm:w-32 w-full sm:h-12 h-10 mr-auto lg:mt-6 mt-4">
          <Link to={`/${movie.group.toLowerCase()}/${movie.id}/`}>
            <Default
              title={groupName}
              size="w-full h-full"
              icon="download"
              textColor="dark:text-yellow-400 text-yellow-500 hover:text-black dark:hover:text-black"
              btnStyle="dark:border-yellow-400 border-yellow-500 dark:hover:bg-yellow-400 hover:bg-yellow-500 hover:bg-yellow-400 dark:focus:ring-yellow-600 focus:ring-yellow-700"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllMovies;

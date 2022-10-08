import React from 'react';
import { Link } from 'react-router-dom';
import { useFavoriteMovies } from '../../hooks';
import Loader from '../common/Loader';

const Page = () => {
  const { isLoading, isError, error, data } = useFavoriteMovies();
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  const favoriteMovies = data.map(
    ({ film_id, film_photo, film_eName, film_group }) => {
      return (
        <div key={film_id} className="flex flex-col items-center">
          <Link to={`/${film_group.toLowerCase()}/${film_id}/`}>
            <img
              src={film_photo}
              alt={film_eName}
              className="w-64 rounded-lg object-cover"
            />
          </Link>
          <p className="mt-2 text-ellipsis whitespace-nowrap overflow-hidden">
            {film_eName}
          </p>
        </div>
      );
    }
  );
  return (
    <div className="my-4">
      {favoriteMovies.length ? (
        <h1>لیست علاقه مندی ها</h1>
      ) : (
        <h1>لیست علاقه مندی شما خالی است.</h1>
      )}
      <div className="flex items-center justify-center flex-wrap gap-8 my-6">
        {favoriteMovies.reverse()}
      </div>
    </div>
  );
};

export default Page;

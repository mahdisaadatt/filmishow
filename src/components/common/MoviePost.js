import React from 'react';
import { useParams } from 'react-router-dom';
import { useAllMovies } from '../../hooks';
import Loader from './Loader';
import AllMovies from './AllMovies';
import Pagination from './Pagination';

const MoviePost = () => {
  const { q } = useParams();
  const { isLoading, isError, error, data } = useAllMovies();

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  const movies = data.map(movie => {
    if (q) {
      if (
        !movie.eName.toLowerCase().includes(q.toLowerCase()) &&
        !movie.pName.includes(q)
      ) {
        return null;
      }
    }
    return <AllMovies key={movie.id} movie={movie} />;
  });
  return (
    <div className="lg:w-2/3 w-full flex flex-col items-center">
      {movies.reverse()}
      {/* <Pagination /> */}
    </div>
  );
};

export default MoviePost;

import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovie } from '../../hooks';
import Loader from '../../components/common/Loader';
import MovieDetails from '../../components/details/MovieDetails';
import MovieSummary from '../../components/details/MovieSummary';
import DownloadBadge from '../../components/details/DownloadBadge';
import MovieComments from '../../components/details/MovieComments';

const Details = () => {
  const { id } = useParams();
  const { isLoading, isError, error, data: movie } = useMovie(id);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <section className="w-full h-full">
      <div
        className="absolute w-full left-0 right-0 top-0
        blur-xl
        opacity-40
        h-4/6
        md:block
        hidden
        bg-no-repeat"
        style={{
          backgroundImage: `url(${movie.photo})`,
          backgroundSize: '100% auto',
          backgroundPosition: 'center -15rem',
        }}
      ></div>
      <div className="relative my-4">
        <MovieDetails movie={movie} />
        <MovieSummary movie={movie} />
        <DownloadBadge movie={movie} />
        <MovieComments movie={movie} />
      </div>
    </section>
  );
};

export default Details;
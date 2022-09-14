import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getAllMovies } from '../../api/moviesApi';
import Loader from '../../components/common/Loader';

const Genre = () => {
  const { name } = useParams();
  const { isLoading, isError, error, data } = useQuery(
    ['movies'],
    getAllMovies
  );
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <p>{error}</p>;
  }
  const filteredMovies = data.map(movie => {
    return movie.genres.filter(genre => genre.name === name);
  });
  return <div>{filteredMovies}</div>;
};

export default Genre;

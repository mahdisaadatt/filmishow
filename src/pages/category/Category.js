import React from 'react';
import Page from '../../components/category/Page';
import { useAllMovies } from '../../hooks';

const Category = () => {
  const { isLoading, isError, error, data } = useAllMovies();
  if (isLoading) {
    return;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }
  return <Page data={data} />;
};

export default Category;

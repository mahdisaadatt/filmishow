import React from 'react';
import { useAllMovies, useArrivalMovies } from '../../hooks';
import TopSlider from '../../components/landing/TopSlider';
import MoviePost from '../../components/common/MoviePost';
import Sidebar from '../../components/layout/SideBar/Sidebar';

const Landing = () => {
  const {
    isLoading: moviesLoading,
    isError: isMoviesError,
    data: allMovies,
  } = useAllMovies();
  const {
    isLoading: arrivalLoading,
    isError: isArrivalError,
    data: arrivalMovies,
  } = useArrivalMovies();
  if (moviesLoading || arrivalLoading) {
    return;
  }
  if (isMoviesError || isArrivalError) {
    return <p>مشکلی به وجود آمده!</p>;
  }
  return (
    <>
      <TopSlider data={arrivalMovies} />
      <main className="w-full h-full flex justify-between my-8">
        <MoviePost data={allMovies} />
        <Sidebar />
      </main>
    </>
  );
};

export default Landing;

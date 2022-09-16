import React from 'react';
import TopSlider from '../../components/landing/TopSlider';
import MoviePost from '../../components/common/MoviePost';
import Sidebar from '../../components/layout/SideBar/Sidebar';
import Pagination from '../../components/common/Pagination';
import { useAllMovies } from '../../hooks';
import Loader from '../../components/common/Loader';

const Landing = () => {
  const { isLoading, isError, error } = useAllMovies();

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      <TopSlider />
      <main className="w-full h-full flex justify-between my-8">
        <div className="lg:w-2/3 w-full flex flex-col items-center">
          <MoviePost />
          <Pagination />
        </div>
        <Sidebar />
      </main>
    </>
  );
};

export default Landing;

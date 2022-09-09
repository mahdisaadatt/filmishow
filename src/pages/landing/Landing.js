import React from 'react';
import TopSlider from '../../components/landing/TopSlider';
import MoviePost from '../../components/common/MoviePost';
import Sidebar from '../../components/layout/SideBar/Sidebar';
import Pagination from '../../components/common/Pagination';

const Landing = () => {
  return (
    <>
      <TopSlider />
      <main className="w-full h-full flex justify-between">
        <div className="lg:w-2/3 w-full flex flex-col justify-center items-center">
          <MoviePost />
          <Pagination />
        </div>
        <Sidebar />
      </main>
    </>
  );
};

export default Landing;

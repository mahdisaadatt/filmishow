import React from 'react';
import TopSlider from '../../components/landing/TopSlider';
import MoviePost from '../../components/common/MoviePost';
import Sidebar from '../../components/layout/SideBar/Sidebar';

const Landing = () => {
  return (
    <>
      <TopSlider />
      <main className="w-full h-full flex justify-between my-8">
        <MoviePost />
        <Sidebar />
      </main>
    </>
  );
};

export default Landing;

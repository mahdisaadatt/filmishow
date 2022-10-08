import React from 'react';
import { useParams } from 'react-router-dom';
import PageNotFound from '../404/Page';
import { useLocation } from 'react-router-dom';
import AllMovies from '../../components/common/AllMovies';
import { FolderOpenIcon } from '@heroicons/react/24/outline';

const Page = ({ data }) => {
  const { category, value } = useParams();
  const { state } = useLocation();

  let filteredMovies;
  if (category === 'genre') {
    filteredMovies = data.filter(({ genres }) => {
      const genre = genres.map(({ name }) => name);
      return genre.includes(value);
    });
  } else if (category === 'language') {
    filteredMovies = data.filter(({ language: languages }) => {
      const language = languages.map(({ name }) => name);
      return language.includes(value);
    });
  } else if (category === 'country') {
    filteredMovies = data.filter(({ countries }) => {
      const country = countries.map(({ name }) => name);
      return country.includes(value);
    });
  } else if (category === 'release') {
    filteredMovies = data.filter(
      ({ yearOfPublication }) => yearOfPublication.toString() === value
    );
  } else {
    return <PageNotFound />;
  }

  const movieList = filteredMovies.map(movie => {
    return <AllMovies key={movie.id} movie={movie} />;
  });

  return (
    <main className="w-full h-full my-6 flex flex-col lg:items-start items-center">
      <div className="flex">
        <FolderOpenIcon className="w-6 ml-2" />
        <h1 className="text-xl font-bold">
          {state?.categoryName ? state.categoryName : category} :{' '}
          {state?.title ? state.title : value}
        </h1>
      </div>
      <div className="sm:w-11/12 md:w-5/6 w-full flex flex-col items-center">
        {movieList !== [] ? movieList.reverse() : <p>هیچ فیلمی پیدا نشد</p>}
      </div>
    </main>
  );
};

export default Page;

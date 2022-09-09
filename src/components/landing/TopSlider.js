import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { StarIcon } from '@heroicons/react/24/outline';
import { arrivalMovies } from '../../data/arrivalMovies';
import Arrow from '../common/Buttons/Arrow';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
  const movies = arrivalMovies.map(movie => {
    return (
      <SwiperSlide key={movie.id} className="px-2">
        <Link
          to={
            movie.group === 'Movies'
              ? `/movie/${movie.id}/`
              : `/series/${movie.id}/`
          }
        >
          <div className="cursor-pointer overflow-hidden group hover:rotate-1 transition text-black dark:text-white">
            <img
              src={movie.src}
              alt={movie.name}
              className="dark:group-hover:opacity-10 group-hover:opacity-40 transition rounded-lg carousel-img"
            />
            <div className="absolute top-0 z-20 overflow-hidden opacity-0 w-full transition group-hover:opacity-100 group-hover:translate-y-10 sm:group-hover:translate-y-5 scale-x-125 group-hover:scale-100">
              <div className="flex flex-row-reverse w-full h-full justify-center items-center gap-2">
                <StarIcon className="w-6 text-yellow-500" />
                <p className="text-xl font-extrabold mt-2">{movie.imdbPoint}</p>
              </div>
            </div>
            <div className="absolute bottom-0 z-20 transition w-full opacity-0 group-hover:opacity-100 scale-125 group-hover:-translate-y-10 sm:group-hover:-translate-y-5 group-hover:scale-100">
              <div className="flex flex-row-reverse justify-around items-center gap-2">
                <h1 className="mr-1 text-lg font-extrabold drop-shadow-2xl">
                  {movie.name}
                </h1>
                <Arrow />
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    );
  });
  return (
    <section className="section-with-carousel w-full relative mt-5">
      <Swiper
        className="my-8"
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          501: {
            slidesPerView: 2,
          },
          769: {
            slidesPerView: 3,
          },
          1025: {
            slidesPerView: 4,
          },
          1201: {
            slidesPerView: 5,
          },
        }}
        navigation={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Navigation]}
      >
        {movies}
      </Swiper>
    </section>
  );
};

export default Hero;

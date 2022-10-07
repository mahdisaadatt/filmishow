import React, { useState, useContext } from 'react';
import ThemeSwitcher from '../../common/ThemeSwitcher';
import Hamburger from '../../common/Buttons/Hamburger';
import MenuList from './MenuList';
import Search from '../../common/Field/Search';
import Logo from '../../common/Logo';
import Default from '../../common/Buttons/Default';
import { useFavoriteMovies } from '../../../hooks';
import { Link } from 'react-router-dom';
import AuthContext from '../../../contexts/authContext';
import Popover from '../../common/Popover';
import { HeartIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className="w-full h-20 relative z-50 bg-slate-300 dark:bg-slate-700 backdrop-filter backdrop-blur-md">
      <div className="w-full h-full px-2 max-w-screen-xl mx-auto flex flex-row items-center justify-between">
        <div className="flex justify-center items-center gap-4">
          <Hamburger isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
          {!isLoggedIn ? (
            <Link to="/login/">
              <Default
                btnStyle="dark:border-yellow-400 dark:hover:bg-yellow-400 border-yellow-600 hover:bg-yellow-600 dark:focus:ring-yellow-400 focus:ring-yellow-600"
                textColor="hover:text-black dark:text-yellow-400 text-yellow-600 dark:hover:text-black"
                title="ورود به پنل"
                size="w-24 h-12"
              />
            </Link>
          ) : (
            <Popover />
          )}
        </div>
        <Search
          breakPoint="sm:flex sm:flex-row hidden mx-4"
          size="w-5/12"
          setMenuOpen={setMenuOpen}
        />
        <MenuList isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <div className="flex justify-center items-center gap-6">
          {isLoggedIn && (
            <div className="rounded-full dark:bg-yellow-400 bg-yellow-500 p-2 flex justify-center items-center">
              <Link
                to="/favorite/"
                title="فیلم های مورد علاقه"
                className="rounded-full p-1 hover:scale-110 active:scale-100 transition-all dark:bg-yellow-600 bg-yellow-400 flex justify-center items-center"
              >
                <HeartIcon className="w-8" />
              </Link>
            </div>
          )}
          <div onClick={e => e.stopPropagation()}>
            <ThemeSwitcher />
          </div>
          <Logo />
        </div>
      </div>
    </nav>
  );
};

export default Header;

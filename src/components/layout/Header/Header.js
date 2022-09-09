import React, { useState } from 'react';
import ThemeSwitcher from '../../common/ThemeSwitcher';
import Hamburger from '../../common/Buttons/Hamburger';
import MenuList from './MenuList';
import Search from '../../common/Field/Search';
import Logo from '../../common/Logo';
import Default from '../../common/Buttons/Default';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full h-20 text-white bg-gray-500 dark:bg-slate-700 backdrop-filter backdrop-blur-md">
      <div className="w-full h-full px-2 max-w-screen-xl mx-auto flex flex-row items-center justify-between">
        <div className="flex justify-center items-center gap-4">
          <Hamburger isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
          <Link to="/login/">
            <Default title="ورود به پنل" size="w-24 h-12" />
          </Link>
        </div>
        <Search
          breakPoint="sm:flex sm:flex-row hidden"
          size="w-5/12"
          setMenuOpen={setMenuOpen}
        />
        <MenuList isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <div className="flex justify-center items-center gap-6">
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

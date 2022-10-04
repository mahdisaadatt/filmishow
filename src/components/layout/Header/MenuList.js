import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Search from '../../common/Field/Search';
import MenuItem from './MenuItem';

const MenuList = ({ isMenuOpen, setMenuOpen }) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  return createPortal(
    <div
      className={`text-black dark:text-white w-full h-full fixed top-20 left-0 z-10 ${
        isMenuOpen ? 'visible' : 'invisible'
      }`}
    >
      <div
        className={`w-full h-full flex flex-col items-center sm:py-20 py-2 overflow-y-auto scroll-smooth backdrop-filter backdrop-blur-2xl ${
          isMenuOpen ? 'opacity-100' : 'opacity-0'
        }  transition-all duration-300`}
      >
        <Search
          breakPoint="sm:hidden flex my-6 w-full"
          size="w-9/12"
          fieldStyle="placeholder:text-black dark:placeholder:text-white"
          borderStyle="border-black dark:border-white "
          setMenuOpen={setMenuOpen}
        />
        <ul className="w-full flex flex-col justify-center items-center gap-4 sm:text-2xl text-xl">
          <MenuItem toWhere="/movies/" title="دانلود فیلم" />
          <MenuItem toWhere="/series/" title="دانلود سریال" />
          <MenuItem toWhere="/movies/best-250" title="دانلود 250 فیلم برتر" />
          <MenuItem toWhere="/anime/" title="دانلود انیمه" />
          <MenuItem toWhere="/series/best-250" title="دانلود 250 سریال برتر" />
          <MenuItem toWhere="/animation/" title="دانلود انیمیشن" />
        </ul>
      </div>
    </div>,
    document.querySelector('#menu-list-portal')
  );
};

export default MenuList;

import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  UserCircleIcon,
  ChevronDownIcon,
  ArrowRightOnRectangleIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Action from './Modals/Action';
import { useGlobalState } from '../../store';
import { removeCookie } from '../../utils/js';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';
import { logoutUser } from '../../api/usersApi';

const Popover = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const { isModalOpen, setModalOpen } = useGlobalState();
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const ref = useRef();
  useEffect(() => {
    const onAvatarClick = e => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setPopoverOpen(false);
    };
    document.body.addEventListener('click', onAvatarClick);
    return () => {
      document.body.removeEventListener('click', onAvatarClick);
    };
  }, []);
  const onSignOutClick = () => {
    setPopoverOpen(false);
    setModalOpen(true);
  };
  const signOutAction = () => {
    logoutUser();
    setPopoverOpen(false);
    setModalOpen(false);
    setLoggedIn(false);
    removeCookie('access-token', 5);
    removeCookie('refresh-token', 5);
    navigate('/');
  };
  return (
    <>
      <Action
        action="خروج"
        message="آیا مطمعن هستید که میخواهید خارج شوید؟!"
        onSignOutClick={signOutAction}
      />
      <div className="flex flex-col text-black">
        <div
          className="flex justify-around items-center group w-20 h-12 bg-yellow-400 rounded-lg cursor-pointer"
          onClick={() => setPopoverOpen(!isPopoverOpen)}
          ref={ref}
        >
          <ChevronDownIcon
            className={`w-4 ${
              isPopoverOpen ? '-rotate-180' : ''
            } transition-all`}
          />
          <UserCircleIcon className="w-8" />
        </div>
        <ul
          className={`bg-yellow-400 p-4 w-40 text-lg absolute top-20 z-50 rounded-lg ${
            isPopoverOpen
              ? 'opacity-100 translate-y-0 scale-100 visible'
              : 'opacity-0 translate-y-2 scale-105 invisible'
          } transition-all`}
          onClick={e => e.stopPropagation()}
        >
          <li
            className="hover:bg-yellow-200 text-center rounded-lg transition-all"
            onClick={() => setPopoverOpen(false)}
          >
            <Link className="w-full flex items-center" to="/panel/user">
              <RectangleGroupIcon className="w-6 m-2" />
              <p>پنل کاربری</p>
            </Link>
          </li>
          <li
            className="hover:bg-yellow-200 transition-all rounded-lg"
            onClick={onSignOutClick}
          >
            <button className="w-full flex items-center">
              <ArrowRightOnRectangleIcon className="w-6 m-2" />
              <p>خروج</p>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Popover;

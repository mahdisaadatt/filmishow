import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HomeIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

const BreadCrumb = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pathnames = pathname.split('/').filter(x => x);
  return (
    <nav
      class="flex px-5 py-3 my-3 relative z-10 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Breadcrumb"
    >
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li aria-current="page">
          <button onClick={() => navigate('/')}>
            <div class="flex items-center justify-center ">
              {/* <HomeIcon className="w-4 ml-1 text-gray-500 dark:text-gray-400" /> */}
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                خانه
              </span>
            </div>
          </button>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <>
              <ChevronLeftIcon className="w-4 ml-1 text-gray-500 dark:text-gray-400" />
              <li aria-current="page">
                <div class="flex items-center justify-center ">
                  <span class="ml-1 text-sm mt-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                    {name}
                  </span>
                </div>
              </li>
            </>
          ) : (
            <>
              <ChevronLeftIcon className="w-4 ml-1 text-gray-500 dark:text-gray-400" />
              <li aria-current="page">
                <button key={name} onClick={() => navigate(routeTo)}>
                  <div class="flex items-center justify-center ">
                    <span class="ml-1 text-sm mt-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                      {name}
                    </span>
                  </div>
                </button>
              </li>
            </>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;

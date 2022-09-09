import React from 'react';

const Pagination = () => {
  return (
    <div className="flex justify-center py-8 text-xl text-black dark:text-white">
      <nav aria-label="Page navigation">
        <ul className="flex flex-row-reverse list-style-none">
          <li className="page-item">
            <a
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all rounded hover:bg-gray-300 dark:hover:bg-gray-600 focus:shadow-none active:scale-90"
              href="#0"
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all rounded hover:bg-gray-300 dark:hover:bg-gray-600 focus:shadow-none active:scale-90"
              href="#0"
            >
              1
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all rounded hover:bg-gray-300 dark:hover:bg-gray-600 focus:shadow-none active:scale-90"
              href="#0"
            >
              2
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all rounded hover:bg-gray-300 dark:hover:bg-gray-600 focus:shadow-none active:scale-90"
              href="#0"
            >
              3
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all rounded hover:bg-gray-300 dark:hover:bg-gray-600 focus:shadow-none active:scale-90"
              href="#0"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

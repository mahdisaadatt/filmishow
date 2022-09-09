import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Neural = ({ title, className, icon }) => {
  return (
    <button
      className={`${className} flex justify-center items-center hover:opacity-80 transition`}
    >
      {title}
      {icon === 'arrowLeft' ? <ArrowLeftIcon className="w-4 mr-2" /> : null}
    </button>
  );
};

Neural.defaultProps = {
  className: '',
};

export default Neural;

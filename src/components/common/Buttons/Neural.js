import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Neural = ({ title, className, icon, type }) => {
  return (
    <button
      type={type}
      className={`${className} flex justify-center items-center hover:opacity-80 transition`}
    >
      {title}
      {icon === 'arrowLeft' ? <ArrowLeftIcon className="w-4 mr-2" /> : null}
    </button>
  );
};

Neural.defaultProps = {
  className: '',
  type: 'button',
};

export default Neural;

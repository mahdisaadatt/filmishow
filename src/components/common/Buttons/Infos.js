import React from 'react';

const Infos = ({ title }) => {
  return (
    <button
      className="px-2 py-1 bg-gray-600 dark:bg-slate-800 m-1 rounded-lg hover:scale-110 transition-all"
    >
      {title}
    </button>
  );
};

export default Infos;

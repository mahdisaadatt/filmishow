import React from 'react';

const Infos = ({ title }) => {
  return (
    <button className="px-2 py-1 dark:bg-slate-800 bg-slate-300 m-1 rounded-lg hover:scale-110 transition-all">
      {title}
    </button>
  );
};

export default Infos;

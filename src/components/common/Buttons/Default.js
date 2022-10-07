import React from 'react';
import { ArrowDownTrayIcon, BookmarkIcon } from '@heroicons/react/24/outline';

const Default = ({
  title,
  size,
  textColor,
  btnStyle,
  icon,
  type,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${size} ${btnStyle} ${textColor} flex items-center justify-center flex-row-reverse border-2
                    focus:ring-2 focus:outline-none font-semibold
                    rounded-lg text-sm text-center  transition`}
    >
      {title}
      {icon === 'download' ? (
        <ArrowDownTrayIcon className="w-6 ml-2" />
      ) : icon === 'favorite' ? (
        <BookmarkIcon className="w-6 ml-2" />
      ) : null}
    </button>
  );
};

Default.defaultProps = {
  type: 'button',
  size: 'w-20 h-10',
  btnStyle:
    'dark:border-yellow-400 dark:hover:bg-yellow-400 border-yellow-400 hover:bg-yellow-400 dark:focus:ring-yellow-600 focus:ring-yellow-600',
  textColor: 'hover:text-black text-yellow-400 dark:hover:text-black',
};

export default Default;

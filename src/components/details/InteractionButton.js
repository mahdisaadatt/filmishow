import React from 'react';
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const InteractionButton = ({ like, disLike, size }) => {
  // const [like, setLike] = useState(1256);
  // const [disLike, setDisLike] = useState(74);
  return (
    <>
      <button
        // onClick={() => setDisLike(disLike + 1)}
        className={`rounded-full flex justify-center items-center ${size} dark:bg-gray-900 bg-gray-700 text-red-400 hover:opacity-40 transition-all`}
      >
        {disLike?.toLocaleString()}
        <HandThumbDownIcon className="w-6" />
      </button>

      <button
        // onClick={() => setLike(like + 1)}
        className={`rounded-full flex justify-center items-center ${size} dark:bg-gray-900 bg-gray-700 text-blue-400 hover:opacity-40 transition-all`}
      >
        {like?.toLocaleString()}
        <HandThumbUpIcon className="w-6" />
      </button>
    </>
  );
};

InteractionButton.defaultProps = {
  size: 'px-6 py-2',
};

export default InteractionButton;

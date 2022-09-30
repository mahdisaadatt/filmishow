import React, { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
} from '@heroicons/react/24/outline';

const InteractionButton = ({
  likeCount,
  disLikeCount,
  size,
  likeHandler,
  disLikeHandler,
}) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const handleLike = () => {
    if (!isLoggedIn) {
      setTimeout(() => {
        navigate('/login/');
      }, 500);
    } else {
      return likeHandler();
    }
  };
  const handleDisLike = () => {
    if (!isLoggedIn) {
      setTimeout(() => {
        navigate('/login/');
      }, 500);
    } else {
      return disLikeHandler();
    }
  };

  return (
    <>
      <button
        onClick={handleDisLike}
        className={`rounded-full flex justify-center items-center ${size}
         dark:bg-gray-900 bg-gray-700 text-red-400 hover:opacity-60 transition-all`}
        title="دیسلایک"
      >
        {disLikeCount?.toLocaleString()}
        <HandThumbDownIcon className="w-6" />
      </button>

      <button
        onClick={handleLike}
        className={`rounded-full flex justify-center items-center ${size} 
        dark:bg-gray-900 bg-gray-700 text-blue-400 hover:opacity-60 transition-all`}
        title="لایک"
      >
        {likeCount?.toLocaleString()}
        <HandThumbUpIcon className="w-6" />
      </button>
    </>
  );
};

InteractionButton.defaultProps = {
  size: 'px-6 py-2',
};

export default InteractionButton;

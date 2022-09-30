import React, { useContext, useState } from 'react';
import AuthContext from '../../contexts/authContext';
import Default from '../../components/common/Buttons/Default';
import Neural from '../../components/common/Buttons/Neural';
import { addComment } from '../../api/commentApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import CommentInteraction from './CommentInteraction';
import Loader from '../../components/common/Loader';
import { Link } from 'react-router-dom';
import {
  ChatBubbleOvalLeftEllipsisIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const MovieComments = ({ comments, movieId }) => {
  const queryClient = useQueryClient();
  const { isLoggedIn } = useContext(AuthContext);
  const [comment, setComment] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const { mutate, isLoading } = useMutation(() => addComment(movieId, comment));

  const onSubmit = async e => {
    e.preventDefault();
    if (comment.length < 4) {
      setErrMsg('حداقل باید 4 کاراکتر برای تایید کامنت وارد کنید!');
    } else {
      setComment('');
      setErrMsg('');
      mutate(comment, {
        onSuccess: () => {
          queryClient.invalidateQueries(['movie']);
        },
      });
    }
  };

  const commentList = comments.map(
    ({ id, text, date, commenter, like, dislike }) => {
      const dateFormat = new Date(date);

      const year = dateFormat.getFullYear();
      const month = (dateFormat.getMonth() + 1).toString().padStart(2, '0');
      const day = dateFormat.getDate().toString().padStart(2, '0');

      const hour = dateFormat.getHours();
      const minute = dateFormat.getMinutes().toString().padStart(2, '0');

      return (
        <div
          key={id}
          className="flex justify-between dark:bg-slate-700 bg-slate-300 rounded-lg p-4 flex-wrap gap-2 w-full"
        >
          <div className="flex items-center justify-between w-full gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <UserCircleIcon className="w-14" />
              <div>
                <h2>{commenter.full_name}</h2>
                <small className="dark:text-gray-300 text-gray-600">
                  {year}-{month}-{day} {hour}:{minute}
                </small>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <CommentInteraction
                size="w-20 h-10"
                commentId={id}
                like={like}
                disLike={dislike}
              />
            </div>
          </div>
          <p className="my-1 sm:mx-8 mx-2">{text}</p>
        </div>
      );
    }
  );
  return (
    <div className="my-8 dark:bg-slate-900 bg-slate-200 rounded-lg p-4">
      {isLoading && <Loader />}
      <div className="flex items-center">
        <ChatBubbleOvalLeftEllipsisIcon className="w-8 ml-1" />
        <h3 className="text-lg">{commentList.length} کامنت</h3>
      </div>
      <div className="flex flex-col gap-3 my-3">
        {isLoggedIn ? (
          <form
            className="flex flex-col w-full gap-4 p-2 rounded-lg"
            onSubmit={onSubmit}
          >
            {!commentList.length ? (
              <h2>اولین دیدگاه را شما وارد کنید</h2>
            ) : (
              <h2>کاربر عزیز کامنت خود را وارد کنید</h2>
            )}

            <textarea
              placeholder="متن دیدگاه..."
              value={comment}
              onChange={e => setComment(e.target.value)}
              className="w-full text-black p-2 rounded"
            ></textarea>
            <p className="text-red-500">{errMsg}</p>
            <Default
              size="w-full h-12 sm:w-32"
              title="ثبت دیدگاه"
              type="submit"
              textColor="dark:text-yellow-400 text-yellow-500 hover:text-black dark:hover:text-black"
              btnStyle="mr-auto dark:border-yellow-400 border-yellow-500 dark:hover:bg-yellow-400 hover:bg-yellow-500 hover:bg-yellow-400 dark:focus:ring-yellow-600 focus:ring-yellow-700"
            />
          </form>
        ) : (
          <div className="flex justify-center mt-2 mb-4 text-lg flex-wrap">
            <span>برای انتشار دیدگاه خود وارد</span>
            <Link to="/login/" className="mx-1">
              <Neural
                title="پنل کاربری"
                className="dark:text-yellow-400 text-yellow-600 hover:opacity-50 transition-all"
              />
            </Link>
            <span>خود شوید یا در سایت</span>
            <Link to="/signup/" className="mx-1">
              <Neural
                title="عضو شوید"
                className="dark:text-yellow-400 text-yellow-600 hover:opacity-50 transition-all"
              />
            </Link>
            .
          </div>
        )}
        {commentList.reverse()}
      </div>
    </div>
  );
};

export default MovieComments;

import React, { useState } from 'react';
import InteractionButton from './InteractionButtons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { likeComment, disLikeComment } from '../../api/commentApi';

const CommentInteraction = ({ size, commentId, like, disLike }) => {
  const queryClient = useQueryClient();
  const { mutateAsync: likeClick } = useMutation(likeComment);
  const { mutateAsync: disLikeClick } = useMutation(disLikeComment);

  const likeHandler = () => {
    likeClick(commentId, {
      onSuccess: () => {
        queryClient.invalidateQueries(['movie']);
      },
    });
  };

  const disLikeHandler = () => {
    disLikeClick(commentId, {
      onSuccess: () => {
        queryClient.invalidateQueries(['movie']);
      },
    });
  };

  return (
    <InteractionButton
      size={size}
      commentId={commentId}
      likeCount={like}
      disLikeCount={disLike}
      likeHandler={likeHandler}
      disLikeHandler={disLikeHandler}
    />
  );
};

export default CommentInteraction;

import axios from 'axios';
import { getCookie } from '../utils/js';

const commentsApi = axios.create({
  baseURL: 'https://filmishow.iran.liara.run',
});

const addComment = async (id, comment) => {
  const access = getCookie('access-token');
  const { data } = await commentsApi.get(`/comment/${id}/?text=${comment}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access}`,
    },
  });
  return data;
};

const likeComment = async id => {
  const access = getCookie('access-token');
  const refresh = getCookie('refresh-token');
  const { data } = await commentsApi.post(
    `/comment/like/${id}/`,
    { refresh: refresh },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
    }
  );
  return data;
};

const disLikeComment = async id => {
  const access = getCookie('access-token');
  const refresh = getCookie('refresh-token');
  const { data } = await commentsApi.post(
    `/comment/dislike/${id}/`,
    { refresh: refresh },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
    }
  );
  return data;
};

export { addComment, likeComment, disLikeComment };

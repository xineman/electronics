import axios from './';

export const signIn = data => axios.post('/api/auth/login', data);

export const signUp = data => axios.post('/api/auth/register', data);

export const getWishes = () => axios.get('/api/user/wishes');

export const cart = (id, count) =>
  axios.post('/api/user/cart', {
    id,
    count,
  });

export const wish = id =>
  axios.post('/api/user/wish', {
    id,
  });

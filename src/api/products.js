import axios from './';

export const getAll = () =>
  axios.get('/api/products');

export const getOne = id =>
  axios.get(`api/products/${id}`);

export const cart = (id, count) =>
  axios.post('/api/products/cart', {
    id,
    count,
  });

export const wish = id =>
  axios.post('/api/products/wish', {
    id,
  });

import axios from './';

export const getAll = () =>
  axios.get('/api/products');

export const getOne = id =>
  axios.get(`api/products/${id}`);

export const buy = (id, count) =>
  axios.post('/api/products/buy', {
    id,
    count,
  });

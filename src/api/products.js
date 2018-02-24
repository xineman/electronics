import axios from './';

function parseQuery(qu) {
  return Object.keys(qu)
    .map(key => `${key}=${qu[key]}`)
    .join('&');
}

export const getAll = () =>
  axios.get('/api/products');

export const getOne = id =>
  axios.get(`api/products/${id}`);

export const filter = params =>
  axios.get(`api/products/filter?${parseQuery(params)}`); // eslint-disable-line

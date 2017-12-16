import http from 'axios';

export * from './products';
export * from './user';

const axios = http.create({
  baseURL,
  headers: { Authorization: `Bearer ${localStorage.jwt}` },
});

export default axios;

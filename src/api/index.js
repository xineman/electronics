import http from 'axios';

const axios = http.create({
  baseURL,
  headers: { Authorization: `Bearer ${localStorage.jwt}` },
});

export default axios;

import http from 'axios';

const axios = http.create({
  // baseURL: baseUrl, // eslint-disable-line
  headers: { Authorization: `Bearer ${localStorage.jwt}` },
});

export default axios;

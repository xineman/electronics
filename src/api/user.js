import axios from './';

export const signIn = data => axios.post('/api/auth/login', data);

export const signUp = data => axios.post('/api/auth/register', data);

export const getWishes = () => axios.get('/api/user/wishes');

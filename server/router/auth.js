const router = require('express').Router();
const usersApi = require('../controllers/auth');

router.post('/login', usersApi.login);

router.post('/register', usersApi.register);

router.get('/me', usersApi.getMyProfile);

router.get('/:id', usersApi.getProfile);

module.exports = router;

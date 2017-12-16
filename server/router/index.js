const router = require('express').Router();
const { validateToken } = require('../controllers/auth');

router.use('/api/auth', require('./auth'));

router.use(validateToken);

router.use('/api', require('./api'));


module.exports = router;

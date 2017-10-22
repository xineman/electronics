const router = require('express').Router();

router.use('/api', require('./api'));

router.use('/api/auth', require('./auth'));

module.exports = router;

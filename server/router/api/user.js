const router = require('express').Router();
const user = require('../../controllers/user');

router.get('/', user.getMyProfile);

router.get('/wishes', user.getWishes);

router.post('/wish', user.wish);

router.post('/cart', user.cart);

module.exports = router;

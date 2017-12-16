const router = require('express').Router();
const productsApi = require('../../controllers/products');

router.get('/create', productsApi.create);

router.get('/:id', productsApi.getProduct);

router.get('/', productsApi.getAll);

router.post('/cart', productsApi.cart);

router.post('/wish', productsApi.wish);

module.exports = router;

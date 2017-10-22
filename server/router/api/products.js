const router = require('express').Router();
const productsApi = require('../../controllers/products');

router.get('/create', productsApi.create);

router.get('/:id', productsApi.getProduct);

router.get('/', productsApi.getAll);

router.post('/buy', productsApi.buy);

module.exports = router;

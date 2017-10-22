const router = require('express').Router();
const productsApi = require('../../controllers/categories');

router.get('/', productsApi.getAll);

router.get('/create', productsApi.create);

module.exports = router;

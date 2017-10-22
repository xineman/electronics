const router = require('express').Router();

router.get('/search', (req, res) => {
  res.json([`${req.query.input}1`, `${req.query.input}33`]);
});

router.use('/products', require('./products'));

router.use('/categories', require('./categories'));

module.exports = router;

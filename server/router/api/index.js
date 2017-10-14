const router = require('express').Router();

router.get('/search', (req, res) => {
  res.json([`${req.query.input}1`, `${req.query.input}33`]);
});

router.get('/products', (req, res) => {
  res.json([
    {
      name: 'Laptop 1',
      params: {
        hdd: '800 GB',
        color: 'red',
      },
    },
    {
      name: 'Laptop 2',
      params: {
        hdd: '500 GB',
        color: 'red',
      },
    },
  ]);
});

module.exports = router;

const router = require('express').Router();

const jwt = require('jsonwebtoken');
const config = require('config');

router.post('/user/login', (req, res) => {
  const token = jwt.sign({
    sub: req.body.username,
  }, config.secret);
  res.send(token);
});

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

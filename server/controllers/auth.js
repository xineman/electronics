const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');

function login(req, res) {
  User.find({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (user) {
        const token = jwt.sign({
          sub: req.body.username,
        }, config.secret);
        res.send(token);
      } else {
        res.sendStatus(401);
      }
    })
    .catch(() => res.sendStatus(500));
}

function register(req, res) {
  User.find({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (user) {
        res.sendStatus(400);
      } else {
        User.create(req.body)
          .then(() => {
            const token = jwt.sign({
              sub: req.body.username,
            }, config.secret);
            res.status(201).send(token);
          });
      }
    })
    .catch(() => res.sendStatus(500));
}

function getMyProfile(req, res) {
  User.find({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      console.log('no user');
      if (user) {
        const token = jwt.sign({
          sub: req.body.username,
        }, config.secret);
        res.send(token);
      }
    })
    .catch(console.log);
}
function getProfile(req, res) {
  User.find({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      console.log('no user');
      if (user) {
        const token = jwt.sign({
          sub: req.body.username,
        }, config.secret);
        res.send(token);
      }
    })
    .catch(console.log);
}

module.exports = {
  login,
  register,
  getMyProfile,
  getProfile,
};

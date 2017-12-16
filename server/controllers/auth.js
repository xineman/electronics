const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');

async function validateToken(req, res, next) {
  const token = req.get('authorization').split(' ')[1];
  if (!token) next();

  const username = jwt.verify(token, config.secret).sub;
  if (!username) next();

  const { dataValues: user } = await User.find({
    where: {
      username,
    },
  });
  req.user = user;
  next();
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new Error('No username or password specified.');
    }
    const user = await User.find({
      where: {
        username,
      },
    });
    if (user && user.password === password) {
      const token = jwt.sign({
        sub: username,
      }, config.secret);
      res.status(201).json({ token });
    } else {
      res.status(401).json({
        error: 'Username or password is invalid',
      });
    }
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
}

async function register(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new Error('No username or password specified.');
    }
    const user = await User.find({
      where: {
        username,
      },
    });
    if (user) {
      res.sendStatus(400);
    } else {
      await User.create({ username, password });
      const token = jwt.sign({
        sub: username,
      }, config.secret);
      res.status(201).json({ token });
    }
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
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
  validateToken,
};

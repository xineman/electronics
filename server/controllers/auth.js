const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');

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
    if (user) {
      const token = jwt.sign({
        sub: username,
      }, config.secret);
      res.status(201).json({ token });
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.status(500).json({
      error,
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
  } catch (error) {
    res.status(500).json({
      error,
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
};

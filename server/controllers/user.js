const User = require('../models/User');

function cart(req, res) {
  res.sendStatus(200);
}

async function wish(req, res) {
  if (!req.user) return res.send();
  const { id } = req.body;
  try {
    const existing = await req.user.getWishes({
      where: {
        id,
      },
    });
    let status;
    if (existing.length) {
      status = 0;
      await req.user.removeWish(id);
    } else {
      status = 1;
      await req.user.addWish(id);
    }
    return res.json({
      status,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: 1,
    });
  }
}

async function getWishes(req, res) {
  res.json((await req.user.getWishes())
    .map(w => w.id));
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
  getWishes,
  cart,
  wish,
  getMyProfile,
  getProfile,
};

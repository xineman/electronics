/* eslint-disable no-console */
const config = require('config');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./services/sequelize');
const cors = require('cors');

const app = express();

sequelize.sync()
  .catch(() => console.error('Error: Connection to DB failed'));

app.use(bodyParser.json());

app.use(require('serve-static')(path.join(__dirname, '../dist'), { redirect: false }));

app.use(cors());

app.use(require('./router'));

app.run = () => app.listen(config.port, () => console.log(`[Server] Listening on ${config.port} port`));

module.exports = app;

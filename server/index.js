/* eslint-disable no-console */
const config = require('config');
const express = require('express');
const path = require('path');

const app = express();

app.use(require('serve-static')(path.join(__dirname, '../dist'), { redirect: false }));

app.use(require('./router'));

app.run = () => app.listen(config.port, () => console.log(`[Server] Listening on ${config.port} port`));

module.exports = app;

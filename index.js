'use strict';

const config = require('./config');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');
const mongoose = require('mongoose');
const fs = require("fs");

const routes = require('./controllers/routes');
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/', routes);
if (fs.existsSync(path.join(__dirname, 'views'))) {
  app.use(express.static(path.join(__dirname, 'views'), { index: false }));
}

// init connect to database
mongoose.connect(config.mongoDbUri, { useNewUrlParser: true, useCreateIndex: true });
mongoose.connection
  .once('open', () => console.log('Connected to MongoDB'))
  .on('error', (err) => console.error(err));

app.listen(port, () => {
  console.log('Listening on port ' + port);
});

'use strict';

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');

const app = express();
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'views'), { index: false }));

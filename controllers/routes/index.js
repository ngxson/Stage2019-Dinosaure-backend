'use strict';

const express = require('express');
const router = express.Router();
const registerController = require('../registerController');
const loginController = require('../loginController');

router.post('/register', registerController);
router.post('/login', loginController);

module.exports = router;

'use strict';

const express = require('express');
const router = express.Router();
const registerController = require('../registerController');
const loginController = require('../loginController');
const dinosaurController = require('../dinosaurController');
const friendController = require('../friendController');
const auth = require('../middlewares/auth');

router.post('/register', registerController);
router.post('/login', loginController);

router.get('/dinosaur/me', auth, dinosaurController.current);
router.patch('/dinosaur/me', auth, dinosaurController.update);
router.get('/dinosaur/find', auth, dinosaurController.findOneByUsername);

router.get('/friend', auth, friendController.list);
router.post('/friend', auth, friendController.add);
router.delete('/friend', auth, friendController.delete);

module.exports = router;

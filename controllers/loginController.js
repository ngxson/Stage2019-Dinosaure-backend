'use strict';

const Dinosaur = require('../models/dinosaur');
const config = require('../config');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  const { username, password } = req.body;
  const dino = await Dinosaur.findOne({ username }).select('+password');

  if (!dino) {
    return res.json({ error: 'Cannot find this dinosaur' });
  }

  if (await dino.comparePassword(password)) {
    const token = jwt.sign({ dinosaurId: dino._id }, config.JWTSecret);
    return res.json({ token });
  } else {
    return res.json({ error: 'Password is not correct' });
  }
};

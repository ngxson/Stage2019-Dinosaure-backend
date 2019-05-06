'use strict';

const Dinosaur = require('../models/dinosaur');

module.exports = (req, res) => {
  const dino = new Dinosaur(req.body);
  dino.save().then((doc) => {
    res.json(doc);
  }).catch(e => {
    res.json({ error: e.toString() });
  });
};

'use strict';

const Dinosaur = require('../models/dinosaur');

module.exports.current = async (req, res) => {
  const { dinosaurId } = req;
  const dino = await Dinosaur.findById(dinosaurId);
  res.json(dino);
};

module.exports.update = async (req, res) => {
  const { dinosaurId } = req;
  await Dinosaur.findByIdAndUpdate(dinosaurId, req.body);
  res.json({ success: true });
};

module.exports.findOneByUsername = async (req, res) => {
  const { username } = req.query;
  const dino = await Dinosaur.findOne({ username });
  res.json(dino);
};

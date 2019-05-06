'use strict';

const Dinosaur = require('../models/dinosaur');
const Friend = require('../models/friend');

module.exports.list = async (req, res) => {
  const { dinosaurId } = req;
  let arr = await Friend.find({ me: dinosaurId }).populate('friend');
  arr = arr.map(obj => obj.friend);
  res.send(arr);
};

module.exports.add = async (req, res) => {
  const { dinosaurId } = req;
  const { friendId } = req.body;
  try {
    const friend = await Friend.findOne({ me: dinosaurId, friend: friendId });
    if (friend) return res.json({ error: 'You have already added this friend' });
    await Friend.create({ me: dinosaurId, friend: friendId });
    res.json({ success: true });
  } catch (e) {
    res.json({ error: e.toString() });
  }
};

module.exports.delete = async (req, res) => {
  const { dinosaurId } = req;
  const { friendId } = req.query;
  try {
    await Friend.deleteOne({ me: dinosaurId, friend: friendId });
    res.json({ success: true });
  } catch (e) {
    res.json({ error: e.toString() });
  }
};

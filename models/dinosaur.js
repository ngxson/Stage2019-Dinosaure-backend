'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const dinosaurSchema = new mongoose.Schema({
  username: {
    type: 'String',
    required: true,
    unique: true
  },
  password: {
    type: 'String',
    required: true,
    select: false
  },
  name: String,
  age: Number,
  family: String,
  race: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Race'
  },
  food: String
});

dinosaurSchema.pre('save', async function (next) {
  const dino = this;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(dino.password, salt);
  dino.password = hash;
  next();
});

dinosaurSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('Dinosaur', dinosaurSchema);

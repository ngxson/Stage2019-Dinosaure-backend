'use strict';

const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
  me: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dinosaur'
  },
  friend: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dinosaur'
  }
});

module.exports = mongoose.model('Friend', friendSchema);

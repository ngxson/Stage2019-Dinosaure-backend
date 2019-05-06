'use strict';

const mongoose = require('mongoose');

const raceSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Race', raceSchema);

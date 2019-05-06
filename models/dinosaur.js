const mongoose = require('mongoose');

const dinosaurSchema = new mongoose.Schema({ 
	name: String,
  age: Number,
  family: String,
  race: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Race'
  },
  food: String
});

module.exports = mongoose.model('Dinosaur', dinosaurSchema);
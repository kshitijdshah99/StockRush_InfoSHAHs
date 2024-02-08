const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameschema = new Schema({
  duration: {
    type: Number, 
    required: true,
  },
  start_time: {
    type: Number,
    required: true,
  }
}, { collection: 'Game',
versionKey: false }); 

module.exports = mongoose.model('Game', gameschema);

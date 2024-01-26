const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const game = new Schema({
   Object_id: {
        type: String,
        required: true,
      },
  duration: {
    type: Int32Array, 
    required: true,
  },
  start_time: {
    type: Int32Array,
    required: true,
  }
});

module.exports = mongoose.model('Game', game);

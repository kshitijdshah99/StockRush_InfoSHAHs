const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const round = new Schema({
  round_no: {
    type: Int32Array, 
    required: true,
  },
  start_time: {
    type: Int32Array,
    required: true,
  },
  duration: {
    type: Int32Array,
    required: true,
  },
  game_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Round', round);

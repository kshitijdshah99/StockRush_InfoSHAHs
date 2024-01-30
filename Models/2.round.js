const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roundschema = new Schema({
  round_no: {
    type: Number,
    required: true,
  },
  start_time: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  game_id: {
    type: Schema.Types.ObjectId,
    ref: 'Game', 
    required: true,
  },
}, {
  collection: 'Round',
  versionKey: false
});

module.exports = mongoose.model('Round', roundschema);

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const player = new Schema({
 object_id: {
        type: String,
        required: true,
  },
  profile_id: {
    type: String,
    required: true,
  },
  game_id: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model('Player', player);

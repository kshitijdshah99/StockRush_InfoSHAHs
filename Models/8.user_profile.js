const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user_profile = new Schema({
  Object_id: {
    type: String,
    required: true,
  },
  email_id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  net_worth: {
    type: Float32Array, // Assuming float32 is used as Number in JavaScript
    required: true,
  },
});

module.exports = mongoose.model('User_Profile', user_profile);

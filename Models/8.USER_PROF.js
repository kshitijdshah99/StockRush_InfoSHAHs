const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user_profileschema = new Schema({
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
    unique: true,
  },
  net_worth: {
    type: Number, 
    required: true,
  },
},{ collection: 'User_Profile',
versionKey: false });

module.exports = mongoose.model('User_Profile', user_profileschema);

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
    required: false,
    unique: true,
  },
  net_worth: {
    type: Number, 
    required: false, 
  }
},{ collection: 'User_Profile',
versionKey: false });

user_profileschema.statics.login = async function(email_id, password) {

  if (!email_id || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email_id })
  if (!user) {
    throw Error('Incorrect email_id')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('User_Profile', user_profileschema);

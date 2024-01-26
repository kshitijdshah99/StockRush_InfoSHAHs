const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const buy = new Schema({
  stock_id: {
        type: String,
        required: true,
      },
  buyer_id: {
        type: String,
        required: true,
      },
  quantity: {
    type: Int32Array,
    required: true,
  },
  executed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Buy', buy);

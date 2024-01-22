const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sell = new Schema({
  seller_id: {
        type: String,
        required: true,
      },
  stock_id: {
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

module.exports = mongoose.model('Sell', sell);

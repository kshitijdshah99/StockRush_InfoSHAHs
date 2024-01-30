const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stockExchangeSchema = new Schema({
  stock_name: {
    type: String,
    required: true,
  },
  actual_price: {
    type: Number,
    required: true,
  },
  current_price: {
    type: Number,
    required: true,
  },
  valuation: {
    type: Number,
    required: true,
  },
  total_stocks: {
    type: Number,
    required: true,
  },
  limit_stocks: {
    type: Number,
    required: true,
  }
}, { collection: 'Stock_Exchange',
versionKey: false });

module.exports = mongoose.model('Stock_Exchange', stockExchangeSchema);

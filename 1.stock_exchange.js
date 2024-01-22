const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stockExchangeSchema = new Schema({
  Object_id: { //ig here unique:true will come here
    type: String,
    required: true,
  },
  stock_name: {
    type: String,
    required: true,
  },
  actual_price: {
    type: Float32Array,
    required: true,
  },
  current_price: {
    type: Float32Array,
    required: true,
  },
  invested_amount: {
    type: Float32Array,
    required: true,
  },
  total_stocks: {
    type: Int32Array,
    required: true,
  },
  limit_stocks: {
    type: Int32Array,
    required: true,
  },
  game_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Stock_Exchange', stockExchangeSchema);

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const owned_stock = new Schema({
  Object_id:{            //ig here that unique:true will come
        type: String,
        required: true,
      },
  stock_id:{
    type: String,
    required: true,
  },
  quantity: {
    type: Int32Array,
    required: true,
  },
});

module.exports = mongoose.model('owned_stock', owned_stock);

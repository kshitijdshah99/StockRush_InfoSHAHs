const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ownedStockSchema = new Schema({
  profile_id: {
    type: Schema.Types.ObjectId,
    ref: 'User_Profile',                 // Reference to the User_Profile collection
    required: true,
  },
  stock_id: {
    type: Schema.Types.ObjectId,
    ref: 'Stock_Exchange',              // Reference to the Stock_Exchange collection
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
}, { collection: 'Owned_Stock',
versionKey: false });

module.exports = mongoose.model('Owned_Stock', ownedStockSchema);

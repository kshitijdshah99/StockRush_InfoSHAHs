// stock_exchangeRoutes.js
const express = require('express');
const {  get_stock_exchange, post_stock_exchange , patch_stock_exchange} = require('../controllers/stock_exchangeController');
const router = express.Router();

router.post('/post', post_stock_exchange);
router.get('/get', get_stock_exchange);
router.patch('/patch/:stock_id', patch_stock_exchange);

module.exports = router;

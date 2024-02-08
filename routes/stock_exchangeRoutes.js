// stock_exchangeRoutes.js
const express = require('express');
const {  get_Banking, 
         get_Telecommunication,
         get_Natural_Gas_Petroleum, 
         get_Steel,
         get_IT,
         get_Investment_Banking,
         get_Automobile,
         get_Power_Energy,
         get_Tyres,
         get_Healthcare,

         post_stock_exchange , patch_stock_exchange} = require('../controllers/stock_exchangeController');
const router = express.Router();

router.post('/post', post_stock_exchange);

router.get('/get/Banking', get_Banking);
router.get('/get/Telecommunication', get_Telecommunication);
router.get('/get/Natural_Gas_Petroleum', get_Natural_Gas_Petroleum);
router.get('/get/Steel', get_Steel);
router.get('/get/IT', get_IT);
router.get('/get/Investment_Banking', get_Investment_Banking);
router.get('/get/Automobile', get_Automobile);
router.get('/get/Power_Energy', get_Power_Energy);
router.get('/get/Tyres', get_Tyres);
router.get('/get/Healthcare', get_Healthcare);

router.patch('/patch/:stock_id', patch_stock_exchange);

module.exports = router;

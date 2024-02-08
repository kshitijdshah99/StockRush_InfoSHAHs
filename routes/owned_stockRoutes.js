const express = require('express');
const {get_owned_stock, delete_owned_stock} = require('../controllers/owned_stocksControllers');
const {buy}=require('../Logic/buyControllers')
const {sell}=require('../Logic/sellControllers')
const router = express.Router();

// router.post('/post/os', post_owned_stock);
// router.patch('/patch/os/:profile_id/:stock_id', patch_owned_stock);
//in above { } do add post_owned_stock if required for later currently not required bcz the buy operation is already being performed

router.post('/buy/:profile_id', buy);
router.get('/get/:profile_id', get_owned_stock);
router.delete('/delete/:profile_id/:stock_id', delete_owned_stock);
router.patch('/sell/:profile_id', sell);

module.exports = router;
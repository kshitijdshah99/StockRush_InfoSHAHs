const express = require('express');
const { post_owned_stock, get_owned_stock, patch_owned_stock, delete_owned_stock } = require('../controllers/owned_stocksControllers');
const router = express.Router();

router.post('/post/os', post_owned_stock);
router.get('/get/os/:profile_id', get_owned_stock);
router.patch('/patch/os/:profile_id/:stock_id', patch_owned_stock);
router.delete('/delete/os/:profile_id/:stock_id', delete_owned_stock);


module.exports = router;
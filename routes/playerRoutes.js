const express = require('express');
const {post_Player,get_Player,patch_Player,delete_Player} = require('../controllers/playerControllers');
const router = express.Router();


router.post('/post', post_Player);
router.get('/get', get_Player);
router.patch('/patch/:game_id', patch_Player);
router.delete('/delete/:game_id', delete_Player);

module.exports = router;

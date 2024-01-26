const express = require('express');
const {post_Player,get_Player,patch_Player,delete_Player} = require('../controllers/playerControllers');
const router = express.Router();


router.post('/post/player', post_Player);
router.get('/get/players', get_Player);
router.patch('/patch/player/:game_id', patch_Player);
router.delete('/delete/player/:game_id', delete_Player);

module.exports = router;

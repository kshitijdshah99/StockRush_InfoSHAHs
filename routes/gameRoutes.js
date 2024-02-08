// gameRoutes.js

const express = require('express');
const {get_Game,post_Game,patch_Game,delete_Game,} = require('../controllers/gameControllers');
const router = express.Router();


router.get('/get/game/:game_id', get_Game);
router.post('/post/game', post_Game);
router.patch('/patch/game/:game_id', patch_Game);
router.delete('/delete/game/:game_id', delete_Game);

module.exports = router;

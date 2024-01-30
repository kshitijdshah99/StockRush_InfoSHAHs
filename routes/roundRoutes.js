const express = require('express');
const { get_Round, post_Round, patch_Round, delete_Round } = require('../controllers/roundControllers');
const router = express.Router();

router.get('/get/:round_id', get_Round);
router.post('/post', post_Round);
router.patch('/patch/:round_id', patch_Round);
router.delete('/delete/:round_id', delete_Round);

module.exports = router;

const express = require('express');
const { post_user_profile, get_user_profile, patch_user_profile } = require('../controllers/user_profileControllers');
const router = express.Router();

router.post('/post/up', post_user_profile);
router.get('/get/up/:profile_id', get_user_profile);
router.patch('/patch/up/:profile_id', patch_user_profile);

module.exports = router;

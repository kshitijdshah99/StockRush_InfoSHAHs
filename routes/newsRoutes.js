const express = require('express');
const {get_news} = require('../controllers/newsControllers');
const router = express.Router();


router.get('/get/news', get_news);

module.exports = router;
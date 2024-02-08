const express = require('express');
const router = express.Router();
const {handleNewUser} = require('../controllers/registerController');
// const authContoller=require('../controllers/authController')
// app.use(authContoller)
router.post('/', handleNewUser)

module.exports = router;

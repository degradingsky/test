const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');


router.post('/', loginController.user_token);

module.exports = router;
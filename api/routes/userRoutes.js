const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/',userController.authenticate_token, userController.user_details);
router.post('/', userController.user_create);

module.exports = router;
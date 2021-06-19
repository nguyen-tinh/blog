const express = require('express');
const router = express.Router();

const signupController = require('../app/controllers/signupController');

router.get('/', signupController.index);

module.exports = router;

const express = require('express');
const router = express.Router();
const UsersContller = require('./controllers/UsersController');

/**
 * These below routes are use to handle users activities
 * for eg. login, signup, forgot password, reset password, update profile, 
 */
router.get('/', UsersContller.login);


module.exports = router;
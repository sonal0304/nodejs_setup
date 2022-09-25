const express = require('express');
const router = express.Router();
const UsersContller = require('./controllers/UsersController');

/**
 * These below routes are use to handle users activities
 * for eg. login, signup, forgot password, reset password, update profile, 
 */
router.post('/', UsersContller.login);
router.post('/signup', UsersContller.signup);


module.exports = router;
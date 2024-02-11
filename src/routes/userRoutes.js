const express = require('express');
// const userController = require('./../controllers/userController');
const authController = require('../controller/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/forgetpassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.patch('/verifyemail/:token', authController.VerifyEmail);

router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/',authController.getAllUsers)



.route('/:id')
.get(authController.getUser)
.put(authController.updateUser)
.delete(authController.deleteUser);

module.exports = router;

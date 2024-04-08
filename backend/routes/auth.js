const express = require('express');
const router = express.Router();
const { deleteUser, updateUser, getUserDetails, allUsers, updateProfile, updatePassword, getUserProfile, forgotPassword, logout, registerUser, loginUser, resetPassword, registerAdmin, adminLogin } = require('../controllers/authController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/register').post(registerUser);
router.route('/admin/register').post(isAuthenticatedUser, authorizeRoles('admin'), registerAdmin);
router.route('/login').post(loginUser);
router.route('/admin/login').post(adminLogin);  // Added admin login route
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/me').get(isAuthenticatedUser, getUserProfile);
router.route('/password/update').put(isAuthenticatedUser, updatePassword);
router.route('/me/update').put(isAuthenticatedUser, updateProfile);
router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), allUsers);
router.route('/admin/user/:id')
    .get(isAuthenticatedUser, authorizeRoles('admin'), getUserDetails)
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateUser)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser);
router.route('/logout').get(logout);

module.exports = router;

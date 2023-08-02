const router = require('express').Router();

// Takes exported functions from 'userController.js' to be utilized for routing
const {
  getUsers,
  getSingleUser
} = require('../../controllers/userController');

// /api/users 
// Going to this route displays the stored data from 'userObj' in JSON formatting from the 'GetUsers' async function call
router.route('/').get(getUsers);

// /api/users/:userId
// Providing an existing userId will present a specific users data in JSON formatting
router.route('/:userId').get(getSingleUser);

module.exports = router;

const router = require('express').Router();

// Takes exported functions from 'userController.js' to be utilized for routing
const {
  getUsers,
  getSingleUser,
  createNewUser,
  updateUser,
  deleteUser
} = require('../../controllers/userController');

// /api/users 
// Going to this route displays the stored data from 'userObj' in JSON formatting from the 'GetUsers' async function call
// If a POST HTTP Request is made then you can creaate a new user (so long as all the data it needs to store is present)
router.route('/').get(getUsers).post(createNewUser);

// /api/users/:userId
// Providing an existing userId will present a specific users data in JSON formatting
// If a PUT HTTP Request is made then you can update an existing user
// If a DELETE HTTP Request is made then you can delete an existing user and associated thoughts if they exist
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;

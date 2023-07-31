const { Thought, User } = require('../models');

// Returns the total count of existing users
const userCount = async () => {
  const numberOfUsers = await User.aggregate()
    .count('userCount');
  return numberOfUsers;
}

module.exports = {

  // Async function to retrieve all users
  async getUsers(req, res) {

    // Try/Catch statement which will stop running the function if an error is detected
    try {

      // Takes the model of 'User' and stores it within 'users'
      const users = await User.find();
    
      // New object that will contain the contents of 'users' and calls the 'userCount' async function
      const userObj = {
        users,
        userCount: await userCount(),
      };
    
      // Responds with 'userObj' in JSON formatting
      res.json(userObj);

    // If an error is detected it will console log and return the error status in JSON formatting
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};

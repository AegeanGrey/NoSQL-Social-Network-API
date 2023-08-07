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
      const users = await User.find({});
    
      // New object that will contain the contents of 'users' and calls the 'userCount' async function
      const userObj = {
        users,
        friendCount: await userCount(),
      };
    
      // Responds with 'userObj' in JSON formatting
      res.json(users);

    // If an error is detected it will console log and return the error status in JSON formatting
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Async function to retrieve a specific user based off of the ID
  async getSingleUser(req, res) {

    // Try/Catch statement which will stop running the function if an error is detected
    try {

      // Takes the user id from the 'User' model and stores it in 'user'
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      // If there is no ID that matches that of the DB, then it will let the user know
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      // Responds with 'user' in JSON formatting
      res.json(user);

    // If an error is detected it will console log and return the error status in JSON formatting
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // 
  async createNewUser(req, res) {
    
    try {

      // 
      const user = await User.create(req.body);

      // Responds with the new user within 'user' as JSON formatting
      res.json(user);

    // If an error is detected it will console log and return the error status in JSON formatting
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

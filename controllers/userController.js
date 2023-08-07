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
        .select('-__v')
        .select('thoughts');

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

  // Async function to add a new user with a username and email
  async createNewUser(req, res) {
    
    // Try/Catch statement which will stop running the function if an error is detected
    try {

      // Stores the new save data (username and email) and creates it in the body of the User model
      const user = await User.create(req.body);

      // Responds with the new user within 'user' as JSON formatting
      res.json(user);

    // If an error is detected it will console log and return the error status in JSON formatting
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Async function to update an already existing user
  async updateUser(req, res) {

    // Try/Catch statement which will stop running the function if an error is detected
    try {

      // Finds the associated user with the matching userId and updates the username and/or email
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      // If there is no ID that matches that of the DB, then it will let the user know
      if (!user) {
        res.status(404).json({ message: 'No user with that ID can be found' });
      }

      // Responds with the updated user within 'user' as JSON formatting
      res.json(user);

    // If an error is detected it will console log and return the error status in JSON formatting
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a user and any associated thoughts
  async deleteUser(req, res) {

    // Try/Catch statement which will stop running the function if an error is detected
    try {

      // Takes the requested userId and matches it to the existing user it's associated with for deletion
      const user = await User.findOneAndRemove({ _id: req.params.userId });

      // If it cannot find the matched userId within the DB then it will say so
      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      }

      // If the user has any associated thoughts then it will also delete them with the user
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { _id: req.params.thoughtId } },
        { new: true }
      );

      // If a user had a thought associated with them then it will say it deleted the user and all associated thoughts
      if (thought) {
        return res.status(404).json({
          message: 'User deleted, but no thoughts found',
        });
      }
      
      // If there was a user and no thoughts associated then it will just delete the user
      res.json({ message: 'User successfully deleted' });

    // If an error is detected it will console log and return the error status in JSON formatting
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

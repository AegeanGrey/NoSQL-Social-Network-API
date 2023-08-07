const { Thought, User } = require('../models');

module.exports = {

  // Async function to retrieve all thoughts
  async getThoughts(req, res) {

    // Try/Catch statement which will stop running the function if an error is detected
    try {

      // Takes the model of 'Thoughts' and stores it within 'thoughts'
      const thoughts = await Thought.find();

      // Responds with the contents of 'thoughts' in JSON formatting
      res.json(thoughts);

    // If an error is detected it will console log the error in JSON with it's status
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Async function to retrieve a specific thought based off of the ID
  async getSingleThought(req, res) {

    // Try/Catch statement which will stop running the function if an error is detected
    try {

      // Takes the thought id from the 'Thought' model and stores it in 'thought'
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .select('reactions');

      // If there is no ID that matches that of the DB, then it will let the user know
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      // Responds with 'user' in JSON formatting
      res.json(thought);

    // If an error is detected it will console log and return the error status in JSON formatting
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Async function to add a new thought with content populated in thoughtText and username
  async createNewThought(req, res) {
    
    // Try/Catch statement which will stop running the function if an error is detected
    try {

      // Stores the new save data (thoughtText and username) and creates it in the body of the Thought model
      const thought = await Thought.create(req.body);

      // Takes the new thought to associate with the required user and populates it's ID within the 'thoughts' field
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: thought._id } },
        { new: true }
      );

      // If there is no ID that matches that of the DB, then it will let the user know
      if (!user) {
        return res.status(404).json({ message: 'Cannot add thought as the user ID does not exist' })
      }

      // Responds with the new user within 'thought' as JSON formatting
      res.json(thought);

    // If an error is detected it will console log and return the error status in JSON formatting
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Async function to update a users existing thought
  async updateThought(req, res) {

    // Try/Catch statement which will stop running the function if an error is detected
    try {

      // Finds the associated thought with the matching userId and updates the username and/or email
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      // If there is no ID that matches that of the DB, then it will let the user know
      if (!thought) {
        res.status(404).json({ message: 'No thought with that ID can be found' });
      }

      // Responds with the updated thought within 'thought' as JSON formatting
      res.json(thought);

    // If an error is detected it will console log and return the error status in JSON formatting
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

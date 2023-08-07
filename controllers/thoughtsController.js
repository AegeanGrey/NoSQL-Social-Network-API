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

  // Async function to add a new thought with content populated in thoughtText and username
  async createNewThought(req, res) {
    
    // Try/Catch statement which will stop running the function if an error is detected
    try {

      // Stores the new save data (thoughtText and username) and creates it in the body of the Thought model
      const thought = await Thought.create(req.body);

      // Responds with the new user within 'thought' as JSON formatting
      res.json(thought);

    // If an error is detected it will console log and return the error status in JSON formatting
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

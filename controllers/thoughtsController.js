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
};

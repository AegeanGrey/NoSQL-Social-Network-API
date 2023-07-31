const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');

// New Schema that creates a thought model
const thoughtSchema = new Schema(
  {
    // Takes in strings (280 characters max) and is required
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },

    // Creates a date and displays the time when each `thoughtText` was created
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (date) => timeSince(date)
    },

    // Takes in strings and is required
    username: {
      type: String,
      required: true
    },

    // Takes in the schema from 'reaction.js'
    reactions: [reactionSchema]
  }
);

// Takes thoughtSchema and converts it's contents into a model that's stored within 'Thought'
const Thought = model('thought', thoughtSchema);

// Exports the stored contents within 'Thought'
module.exports = Thought;

const { ObjectId } = require('bson');
const { Schema, Types } = require('mongoose');

// New Schema for reaction
const reactionSchema = new Schema(
  {
    // Establishes an ID for each reaction
    reactionID: {
      type: ObjectId,
      default: new ObjectId
    },

    // Takes in strings (280 characters max) and is required
    reactionBody: {
      type: String,
      required: true,
      max_length: 280
    },

    // Takes in strings and is required
    username: {
      type: String,
      required: true
    },

    // Creates a date and displays the time when each `reaction` was created
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => timeSince(date)
    }
  }
);

// Exports 'reactionSchema' to be used in 'thoughts.js'
module.exports = reactionSchema;

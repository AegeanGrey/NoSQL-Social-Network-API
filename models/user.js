const { Schema, model } = require('mongoose');

// New Schema that creates a user model
const userSchema = new Schema(
  {
    // Takes in strings (and trims them), is unique and required
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },

    // Takes in strings (and matches the email to verify), is unique and required
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid Email']
    },

    // Takes in ID's from the 'Thoughts' model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought"
      },
    ],

    // Takes in ID's from the 'User' model
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
    ],
  }
);

// Takes userSchema and converts it's contents into a model that's stored within 'User'
const User = model('user', userSchema);

// Exports the stored contents within 'User'
module.exports = User;
const { Schema, model } = require('mongoose');

// New Schema that creates a user model
const userSchema = new Schema();

// Takes userSchema and converts it's contents into a model that's stored within 'User'
const User = model('user', userSchema);

// Exports the stored contents within 'User'
module.exports = User;

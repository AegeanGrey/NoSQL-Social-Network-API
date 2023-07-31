const { Schema, model } = require('mongoose');

// New Schema that creates a thought model
const thoughtSchema = new Schema();

// Takes thoughtSchema and converts it's contents into a model that's stored within 'Thought'
const Thought = model('thought', thoughtSchema);

// Exports the stored contents within 'Thought'
module.exports = Thought;

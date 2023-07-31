// Utilizes the mongoose library
const { connect, connection } = require('mongoose');

// Stores MongoDB connection in 'connectionString' variable
const connectionString = 
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB';

  // 'connect' method opens Mongoose's default connection to our 'socialNetwork' database
connect(connectionString);

// Exports the contents of 'connection' (which associates the results of 'connectionString') to be used as the 'db' variable in 'server.js'
module.exports = connection;

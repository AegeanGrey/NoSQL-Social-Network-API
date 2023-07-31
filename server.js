const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Establishes port and express method
const PORT = process.env.PORT || 3000;
const app = express();

// Established middleware for json data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Allows the server to utilize routing from the 'routes' folder
app.use(routes);

// Connects to the mongoose database w/ PORT and confirms the connection via console log
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`)
  });
});

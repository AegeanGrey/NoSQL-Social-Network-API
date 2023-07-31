const router = require('express').Router();
const apiRoutes = require('./api');

// Establishes routing and appending additional routes after `/api`
router.use('/api', apiRoutes);

// When a user inputs an invalid URL and/or route, it will display `Wrong route!`
router.use((req, res) => res.send('Wrong route!'));

module.exports = router;

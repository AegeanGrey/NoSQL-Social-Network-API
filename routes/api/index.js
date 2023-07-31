const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');

// Establishes routing and appending additional routes for `users` and `thoughts`
router.use('/users', userRoutes);
// router.use('/thoughts', thoughtsRoutes);

module.exports = router;

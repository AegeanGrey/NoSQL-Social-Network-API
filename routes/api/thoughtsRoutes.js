const router = require('express').Router();

// Takes exported functions from 'thoughtsController.js' to be utilized for routing
const {
  getThoughts
} = require('../../controllers/thoughtsController');

// /api/thoughts 
// Going to this route displays the stored data from 'thoughts' in JSON formatting from the 'GetThoughts' async function call
router.route('/').get(getThoughts);

module.exports = router;

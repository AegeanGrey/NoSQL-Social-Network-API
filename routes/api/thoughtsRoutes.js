const router = require('express').Router();

// Takes exported functions from 'thoughtsController.js' to be utilized for routing
const {
  getThoughts,
  getSingleThought,
  createNewThought,
  updateThought
} = require('../../controllers/thoughtsController');

// /api/thoughts 
// Going to this route displays the stored data from 'thoughts' in JSON formatting from the 'GetThoughts' async function call
router.route('/').get(getThoughts).post(createNewThought);

// /api/thoughts/:thoughtId
// Providing an existing thoughtId will present a specific users thought in JSON formatting
router.route('/:thoughtId').get(getSingleThought).put(updateThought);

module.exports = router;

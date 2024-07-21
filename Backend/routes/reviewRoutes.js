const express = require('express');
const router = express.Router();
const { addReview } = require('../controllers/reviewController');

router.post('/audiobooks/:id/reviews', addReview);

module.exports = router;

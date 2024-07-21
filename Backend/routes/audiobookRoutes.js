const express = require('express');
const router = express.Router();
const { getAudiobooks, getAudiobookById } = require('../controllers/audiobookController');

router.get('/audiobooks', getAudiobooks);
router.get('/audiobooks/:id', getAudiobookById);

module.exports = router;

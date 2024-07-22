const express = require('express');
const router = express.Router();
const { getAllAudiobooks, getAudiobookById } = require('../controllers/audiobookController');

router.get('/audiobooks', getAllAudiobooks);
router.get('/audiobooks/:id', getAudiobookById);

module.exports = router;

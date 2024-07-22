const Audiobook = require('../models/Audiobook');

// Get all audiobooks
exports.getAllAudiobooks = async (req, res) => {
  try {
    const audiobooks = await Audiobook.find().populate('reviews');
    res.json(audiobooks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single audiobook by ID
exports.getAudiobookById = async (req, res) => {
  try {
    const audiobook = await Audiobook.findById(req.params.id).populate('reviews');
    if (!audiobook) return res.status(404).json({ message: 'Audiobook not found' });
    res.json(audiobook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

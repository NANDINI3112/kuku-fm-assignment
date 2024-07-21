const Audiobook = require('../models/Audiobook');

exports.getAudiobooks = async (req, res) => {
  const { genre, author, rating } = req.query;
  let filters = {};
  if (genre) filters.genre = genre;
  if (author) filters.author = author;
  if (rating) filters.rating = { $gte: rating };

  const audiobooks = await Audiobook.find(filters).populate('reviews');
  res.json(audiobooks);
};

exports.getAudiobookById = async (req, res) => {
  const audiobook = await Audiobook.findById(req.params.id).populate('reviews');
  res.json(audiobook);
};

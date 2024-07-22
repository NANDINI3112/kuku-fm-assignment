const mongoose = require('mongoose');

const AudiobookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  coverImage: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

module.exports = mongoose.model('Audiobook', AudiobookSchema);

const mongoose = require('mongoose');

const audiobookSchema = new mongoose.Schema({
  title: String,
  author: String,
  coverImage: String,
  description: String,
  genre: String,
  rating: Number,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

module.exports = mongoose.model('Audiobook', audiobookSchema);

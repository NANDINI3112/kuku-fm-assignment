const mongoose = require('mongoose');

const AudiobookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
  coverImage: String,
});

module.exports = mongoose.model('Audiobook', AudiobookSchema);

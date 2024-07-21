const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  audiobook: { type: mongoose.Schema.Types.ObjectId, ref: 'Audiobook' },
  rating: Number,
  comment: String,
});

module.exports = mongoose.model('Review', reviewSchema);

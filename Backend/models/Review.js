const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  audiobookId: mongoose.Schema.Types.ObjectId,
  rating: Number,
  comment: String,
});

module.exports = mongoose.model('Review', ReviewSchema);

const Review = require('../models/Review');
const Audiobook = require('../models/Audiobook');

exports.addReview = async (req, res) => {
  const { rating, comment } = req.body;
  const audiobook = await Audiobook.findById(req.params.id);

  const review = new Review({
    audiobook: audiobook._id,
    rating,
    comment,
  });

  await review.save();

  audiobook.reviews.push(review);
  await audiobook.save();

  res.status(201).json(review);
};

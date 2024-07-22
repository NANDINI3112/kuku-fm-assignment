const Review = require('../models/Review');
const Audiobook = require('../models/Audiobook');

// Add a review to an audiobook
exports.addReview = async (req, res) => {
  const { rating, comment } = req.body;
  const { id } = req.params;

  try {
    const audiobook = await Audiobook.findById(id);
    if (!audiobook) return res.status(404).json({ message: 'Audiobook not found' });

    const review = new Review({ audiobook: id, rating, comment });
    await review.save();

    audiobook.reviews.push(review._id);
    await audiobook.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


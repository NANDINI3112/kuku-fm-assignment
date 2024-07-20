const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const Audiobook = require('./models/Audiobook');
const Review = require('./models/Review');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/audiobooks', { useNewUrlParser: true, useUnifiedTopology: true });

// API Endpoints
app.get('/api/audiobooks', async (req, res) => {
  const { genre, author, rating } = req.query;
  let filter = {};
  if (genre) filter.genre = genre;
  if (author) filter.author = author;
  if (rating) filter.rating = { $gte: rating };

  const audiobooks = await Audiobook.find(filter);
  res.json(audiobooks);
});

app.get('/api/audiobooks/:id', async (req, res) => {
  const audiobook = await Audiobook.findById(req.params.id);
  res.json(audiobook);
});

app.get('/api/audiobooks/:id/reviews', async (req, res) => {
  const reviews = await Review.find({ audiobookId: req.params.id });
  res.json(reviews);
});

app.post('/api/audiobooks/:id/reviews', async (req, res) => {
  const { rating, comment } = req.body;
  const newReview = new Review({
    audiobookId: req.params.id,
    rating,
    comment,
  });

  await newReview.save();
  res.status(201).json(newReview);
});

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const audiobookRoutes = require('./routes/audiobookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use('/api', audiobookRoutes);
app.use('/api', reviewRoutes);

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to the Audiobook API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

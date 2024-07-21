const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect('mongodb://localhost/audiobooks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('MongoDB Connected');
};

module.exports = connectDB;

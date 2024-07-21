const express = require('express');
const connectDB = require('./config/database');
const audiobookRoutes = require('./routes/audiobookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

connectDB();

app.use(express.json());

app.use('/api', audiobookRoutes);
app.use('/api', reviewRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

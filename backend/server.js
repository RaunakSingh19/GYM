// server.js (Backend)
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const feedbackRoutes = require('./routes/feedbackRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// CORS Configuration (Allow requests from localhost during development)
const allowedOrigins = ['http://localhost:3000'];  // Add other frontend URLs in production
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  },
  credentials: true,
}));

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api/feedback', feedbackRoutes);

// Root Health Check
app.get('/', (req, res) => {
  res.send('🚀 Feedback Server is up and running!');
});

// Start the Server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});

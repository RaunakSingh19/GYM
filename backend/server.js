// // server.js (Backend)
// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const feedbackRoutes = require('./routes/feedbackRoutes');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// connectDB();

// // CORS Configuration (Allow requests from localhost during development)
// const allowedOrigins = ['http://localhost:3000','https://gym-rose-alpha.vercel.app'];  // Add other frontend URLs in production
// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("CORS not allowed"));
//     }
//   },
//   credentials: true,
// }));

// // Middleware to parse JSON requests
// app.use(express.json());

// // Routes
// app.use('/api/feedback', feedbackRoutes);

// // Root Health Check
// app.get('/', (req, res) => {
//   res.send('🚀 Feedback Server is up and running!');
// });

// // Start the Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server listening on port ${PORT}`);
// });



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

// ============================
// ✅ CORS Configuration
// ============================
const allowedOrigins = [
  'http://localhost:3000',              // React Dev
  'http://localhost:5173',              // Vite Dev (if you ever use Vite)
  'https://gym-five-omega.vercel.app',  // Production Frontend
  'https://gym-git-main-raunaksingh142004-gmailcoms-projects.vercel.app',   // Production Frontend
  'https://gym-pzdbbia20-raunaksingh142004-gmailcoms-projects.vercel.app',   // Production Frontend
];

// Dynamic origin check
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) {
      // Allow requests like Postman / curl with no origin
      return callback(null, true);
    }
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      console.warn(`❌ CORS blocked for origin: ${origin}`);
      return callback(new Error("CORS not allowed"));
    }
  },
  methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
  credentials: true,
}));

// Explicitly handle preflight requests
app.options('*', cors()); // adding new ||  you can uncomment this and comment other if not working

// ============================
// Middleware
// ============================
app.use(express.json());

// Routes
app.use('/api/feedback', feedbackRoutes);

// Root Health Check
app.get('/', (req, res) => {
  res.send('🚀 Feedback Server is up and running!');
});

// ============================
// Start the Server
// ============================
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});

// const express = require('express');
// const connectDB = require('./config/db');
// const cors = require('cors');
// const mongoose = require('mongoose');//         ->fresh added


// //for facalitiesDetails
// const facilityRoutes = require("./routes/facilityRoutes");
// const Registration = require("./models/Registration");
// const paymentRoutes = require('./routes/paymentRoutes');
// const transactionRoutes= require("./routes/paymentRoutes")
// const purchaseRoutes = require("./routes/purchaseRoutes");
// const feedbackRoutes = require('./routes/feedbackRoutes');

// const app = express();

// // Connect Database
// connectDB();

// // Init Middleware
// // app.use(express.json({ extended: false }));
// app.use(cors({
//   origin: "https://gym-rose-alpha.vercel.app", // ✅ replace this
//    methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true // optional: only if you’re using cookies or sessions
// }));
// app.use(express.json()); 

// // Define Routes
// // const Registration = require("./models/Registration");
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/admin', require('./routes/admin'));
// // app.use('/api/adminPanel',require('./routes/admin'))
// app.use("/facilities", facilityRoutes);
// app.use('/api', paymentRoutes);
// app.use("/api", transactionRoutes);
// app.use("/api/purchases", purchaseRoutes);
// app.use("/api/registrations", require("./routes/registrationRoutes"));
// app.use('/api/feedback', feedbackRoutes);

// // app.use("/api/purchase", userRoutes);


// app.post("/register", async (req, res) => {
//     try {
//       const { name, phone, email, address, servicePlan, price, purchaseTime, expiryTime } = req.body;
  
//       const newRegistration = new Registration({
//         name,
//         phone,
//         email,
//         address,
//         servicePlan,
//         price,
//         purchaseTime,
//         expiryTime,
//       });
  
//       await newRegistration.save();
//       res.status(201).json({ message: "Registration Successful" });
//     } catch (error) {
//       res.status(500).json({ error: "Server Error" });
//     }
//   });



// app.get("/api/registrations/all", async (req, res) => {
//   try {
//       const registrations = await Registration.find();
//       res.status(200).json(registrations);
//   } catch (error) {
//       console.error("Error fetching registrations:", error);
//       res.status(500).json({ error: "Server Error" });
//   }
// });


//   const corsOptions = {
//     origin: "http://localhost:3000", // React frontend URL
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   };
  
//   app.use(cors(corsOptions));
//   app.use(express.json());
  

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const mongoose = require('mongoose');

const facilityRoutes = require("./routes/facilityRoutes");
const Registration = require("./models/Registration");
const paymentRoutes = require('./routes/paymentRoutes');
const transactionRoutes = require("./routes/transactionRoutes"); // ✅ corrected
const purchaseRoutes = require("./routes/purchaseRoutes");
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();

// Connect to MongoDB
connectDB();


const allowedOrigins = [
  // "http://localhost:3000", // for development
  "https://gym-rose-alpha.vercel.app", // your deployed frontend
];
// Middleware
// app.use(cors({
//   origin: "https://gym-rose-alpha.vercel.app", // ✅ Replace with frontend origin
// }));
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));
app.use('/facilities', facilityRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/purchases', purchaseRoutes);
app.use('/api/registrations', require("./routes/registrationRoutes"));
app.use('/api/feedback', feedbackRoutes);

// Temp registration route
app.post("/register", async (req, res) => {
  try {
    const { name, phone, email, address, servicePlan, price, purchaseTime, expiryTime } = req.body;
    const newRegistration = new Registration({
      name,
      phone,
      email,
      address,
      servicePlan,
      price,
      purchaseTime,
      expiryTime,
    });

    await newRegistration.save();
    res.status(201).json({ message: "Registration Successful" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get all registrations
app.get("/api/registrations/all", async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.status(200).json(registrations);
  } catch (error) {
    console.error("Error fetching registrations:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

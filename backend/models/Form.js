const mongoose = require("mongoose");

// Define Schema
const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  servicePlan: { type: String, required: true },
  price: { type: Number, required: true },
  purchaseTime: { type: Date, required: true, default: Date.now },
  expiryTime: { type: Date, required: true },
  
});

// Create Model
const Registration = mongoose.model("Registration", registrationSchema);

module.exports = Registration;

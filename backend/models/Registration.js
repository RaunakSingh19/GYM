const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    servicePlan: { type: String, required: true },
    price: { type: Number, required: true },
    purchaseTime: { type: Date, default: Date.now },
    expiryTime: { type: Date }
});

module.exports = mongoose.model("Registration", registrationSchema);

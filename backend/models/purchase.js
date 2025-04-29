const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  service: { type: String, required: true },
  facilities: { type: String, required: true },
  trainer: { type: String, required: true },
  duration: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  privacyAccepted: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Purchase", purchaseSchema);
    
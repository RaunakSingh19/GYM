// //this is for facalities to make it dynamic 
// const mongoose = require("mongoose");

// const FacilitySchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   price: Number,
//   image: String,
// });

// module.exports = mongoose.model("Facility", FacilitySchema);
const mongoose = require('mongoose');

const facilitySchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
});

const Facility = mongoose.model('Facility', facilitySchema);

module.exports = Facility;
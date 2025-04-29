// //this is for facilities , to make facilities dynamic 
// const express = require("express");
// const router = express.Router();
// const Facility = require("../models/Facility");

// // Add a new facility
// router.post("/add", async (req, res) => {
//   try {
//     const facility = new Facility(req.body);
//     await facility.save();
//     res.status(201).json({ message: "Facility added successfully!", facility });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get all facilities
// router.get("/", async (req, res) => {
//   try {
//     const facilities = await Facility.find();
//     res.status(200).json(facilities);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;
const express = require('express');
const Facility = require('../models/Facility');
const router = express.Router();

// Add a new facility
router.post('/', async (req, res) => {
  const newFacility = new Facility(req.body);
  try {
    await newFacility.save();
    res.status(201).send(newFacility);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all facilities
router.get('/', async (req, res) => {
  try {
    const facilities = await Facility.find();
    res.status(200).send(facilities);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get a facility by ID
router.get('/:id', async (req, res) => {
  try {
    const facility = await Facility.findById(req.params.id);
    res.status(200).send(facility);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;

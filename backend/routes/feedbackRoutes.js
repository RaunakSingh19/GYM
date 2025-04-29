const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback');

// Create feedback
router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).send(feedback);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
router.post('/', async (req, res) => {
    try {
      const feedback = new Feedback(req.body);
      await feedback.save();
      res.status(201).send(feedback);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  });
  
  // Get all feedback (for admin)
  router.get('/', async (req, res) => {
    try {
      const { name, location } = req.query;
      const filter = {};
      
      if (name) filter.name = { $regex: name, $options: 'i' };
      if (location) filter.location = { $regex: location, $options: 'i' };
      
      const feedbacks = await Feedback.find(filter).sort({ createdAt: -1 });
      res.send(feedbacks);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });
  
  module.exports = router;
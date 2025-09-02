// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback');

// POST: Submit Feedback
router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    console.log('✅ Feedback received:', feedback);
    res.status(201).send({ message: "Feedback submitted successfully." });
  } catch (err) {
    console.error('❌ Error saving feedback:', err.message);
    res.status(400).send({ message: err.message });
  }
});

// GET: Retrieve Feedbacks (for admin/dashboard)
router.get('/', async (req, res) => {
  try {
    const { name, location } = req.query;
    const filter = {};

    if (name) filter.name = { $regex: name, $options: 'i' };
    if (location) filter.location = { $regex: location, $options: 'i' };

    const feedbacks = await Feedback.find(filter).sort({ createdAt: -1 });
    res.send(feedbacks);
  } catch (err) {
    console.error('❌ Error fetching feedbacks:', err.message);
    res.status(500).send({ message: err.message });
  }
});

// PUT: Update Feedback
router.put('/:id', async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!feedback) {
      return res.status(404).send({ message: "Feedback not found" });
    }
    res.send(feedback);
  } catch (err) {
    console.error('❌ Error updating feedback:', err.message);
    res.status(400).send({ message: err.message });
  }
});

// DELETE: Delete Feedback
router.delete('/:id', async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndDelete(req.params.id);
    if (!feedback) {
      return res.status(404).send({ message: "Feedback not found" });
    }
    res.send({ message: "Feedback deleted successfully" });
  } catch (err) {
    console.error('❌ Error deleting feedback:', err.message);
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;

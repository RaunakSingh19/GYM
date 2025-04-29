const express = require("express");
const router = express.Router();
const Registration = require("../models/Registration");

// Fetch all registrations
router.get("/all", async (req, res) => {
    try {
        const registrations = await Registration.find();
        res.status(200).json(registrations);
    } catch (error) {
        console.error("Error fetching registrations:", error);
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Purchase = require("../models/purchase");

// // ✅ Correct POST route for purchase registration
// router.post("/register", async (req, res) => {
//     try {
//         const { name, email, contact, service, facilities, trainer, duration, totalAmount } = req.body;

//         if (!name || !email || !contact || !service || !facilities || !trainer || !duration || !totalAmount) {
//             return res.status(400).json({ error: "All fields are required" });
//         }

//         const newPurchase = new Purchase({ name, email, contact, service, facilities, trainer, duration, totalAmount });
//         await newPurchase.save();

//         res.status(201).json({ message: "Purchase created successfully" });
//     } catch (error) {
//         console.error("Error saving purchase:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// // Export the router
// module.exports = router;
const express = require("express");
const router = express.Router();
const Purchase = require("../models/purchase");

// ✅ Ensure this route exists
router.post("/register", async (req, res) => {
    try {
        const { name, email, contact, service, facilities, trainer, duration, totalAmount } = req.body;

        if (!name || !email || !contact || !service || !facilities || !trainer || !duration || !totalAmount) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newPurchase = new Purchase({ name, email, contact, service, facilities, trainer, duration, totalAmount });
        await newPurchase.save();

        res.status(201).json({ message: "Purchase created successfully" });
    } catch (error) {
        console.error("Error saving purchase:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Export the router
module.exports = router;

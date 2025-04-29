// const express = require('express');
// const router = express.Router();
// const Payment = require('../models/payment');

// // Payment API - Handles form submission
// router.post('/payment', async (req, res) => {
//     try {
//         const { fullName, email, address, city, state, zip, cardName, cardNumber, expMonth, expYear, cvv } = req.body;

//         // Ensure expiry date is in the future
//         const currentYear = new Date().getFullYear();
//         const currentMonth = new Date().getMonth() + 1; // JavaScript months start from 0

//         if (parseInt(expYear) < currentYear || (parseInt(expYear) === currentYear && parseInt(expMonth) < currentMonth)) {
//             return res.status(400).json({ error: "Card expiration date must be in the future" });
//         }

//         // Save payment to MongoDB
//         const newPayment = new Payment({
//             fullName,
//             email,
//             address,
//             city,
//             state,
//             zip,
//             cardName,
//             cardNumber,
//             expMonth,
//             expYear,
//             cvv
//         });

//         await newPayment.save();
//         res.status(201).json({ message: "Payment Successful" });
//     } catch (error) {
//         res.status(500).json({ error: "Server Error" });
//     }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Payment = require('../models/payment');

// Payment API - Handles form submission
router.post('/payment', async (req, res) => {
    try {
        const { fullName, email, address, city, state, zip, cardName, cardNumber, expMonth, expYear, cvv } = req.body;

        // Ensure expiry date is in the future
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1; // JavaScript months start from 0

        if (parseInt(expYear) < currentYear || (parseInt(expYear) === currentYear && parseInt(expMonth) < currentMonth)) {
            return res.status(400).json({ error: "Card expiration date must be in the future" });
        }

        // Save payment to MongoDB
        const newPayment = new Payment({
            fullName,
            email,
            address,
            city,
            state,
            zip,
            cardName,
            cardNumber,
            expMonth,
            expYear,
            cvv
        });

        await newPayment.save();
        res.status(201).json({ message: "Payment Successful" });
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;

// Fetch all transactions
// router.get('/transactions', async (req, res) => {
//     try {
//         const transactions = await Payment.find();
//         console.log("Fetched Transactions: ", transactions); // Debugging
//         res.status(200).json(transactions);
//     } catch (error) {
//         console.error("Error fetching transactions:", error);
//         res.status(500).json({ error: "Server Error" });
//     }
// });
router.get("/transactions", async (req, res) => {
    try {
        const transactions = await Payment.find(); // Fetch all payments
        console.log("Fetched Transactions:", transactions); // Debugging log
        res.status(200).json(transactions);
    } catch (error) {
        console.error("Error fetching transactions:", error);
        res.status(500).json({ message: "Server Error" });
    }
});
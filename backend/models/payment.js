const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    cardName: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    expMonth: {
        type: String,
        required: true
    },
    expYear: {
        type: String,
        required: true
    },
    cvv: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Payment', paymentSchema);
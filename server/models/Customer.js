const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    room_id: {
        type: String,
        required: true,
        unique: true
    },
    customer_name: {
        type: String,
        required: true
    },
    customer_age: {
        type: Number,
        required: true
    },
    customer_address: {
        type: String,
        required: true
    },
    customer_mobileNo: {
        type: Number,
        required: true
    },
    customer_aadharno: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);
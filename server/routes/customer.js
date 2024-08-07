const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Customer = require('../models/Customer');

// Create Customer
router.post('/add', auth, async (req, res) => {
    try {
        const newCustomer = new Customer(req.body);
        await newCustomer.save();
        res.status(201).json(newCustomer);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

// Get All Customers
router.get('/', auth, async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

// Update Customer
router.put('/:room_id', auth, async (req, res) => {
    try {
        const customer = await Customer.findOneAndUpdate(
            { room_id: req.params.room_id },
            req.body,
            { new: true }
        );
        res.json(customer);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

// Delete Customer
router.delete('/:room_id', auth, async (req, res) => {
    try {
        await Customer.findOneAndDelete({ room_id: req.params.room_id });
        res.json({ msg: 'Customer removed' });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

module.exports = router;
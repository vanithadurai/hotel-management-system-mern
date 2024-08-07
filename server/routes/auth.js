const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
require('dotenv').config();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = {
            user: {
                id: user.id,
                name: user.username
            }
        };

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
});

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({ username, password: bcrypt.hashSync(password, 10) });
        await user.save();
        res.json({ msg: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

module.exports = router;
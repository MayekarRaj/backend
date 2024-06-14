    const express = require('express');
    const User = require('../models/user');
    const jwt = require('jsonwebtoken');
    const dotenv = require('dotenv');
    const crypto = require('crypto');
    const { sendVerificationEmail } = require('../utils/email');

    dotenv.config();

    const router = express.Router();

    function generateVerificationToken() {
        return crypto.randomBytes(20).toString('hex');
    }

    router.post('/register', async (req, res) => {
    try {
        const { username, email, password, } = req.body;

        // Validate inputs
        // ...

        const verificationToken = generateVerificationToken();
        const user = new User({ username, email, password, verificationToken });
        await user.save();
        sendVerificationEmail(user, user.verificationToken); // Send verification email


        // Generate JWT for registration confirmation (optional)
        // ...

        res.status(201).json({ message: 'Registration successful!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating user' });
    }
    });

    router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT for logged-in user:
        const payload = { userId: user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error logging in' });
    }
    });

    module.exports = router;

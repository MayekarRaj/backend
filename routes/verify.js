const express = require('express');
const User = require('../models/user');
const { sendVerificationEmail } = require('../utils/email');

const router = express.Router();

router.get('/verify/:token', async (req, res) => {
  try {
    const token = req.params.token;
    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(400).json({ message: 'Invalid verification token' });
    }

    // user.verified = true;
    // user.verificationToken = undefined; // Remove used token
    // await user.save();
    sendVerificationEmail(user, user.verificationToken)

    res.status(200).json({ message: 'Account verified successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error verifying account' });
  }
});

module.exports = router;
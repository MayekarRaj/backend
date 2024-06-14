const nodemailer = require('nodemailer');

const config = require('../config/email.json');

const transporter = nodemailer.createTransport({
    service: config.service,
    auth: {
      user: config.user,
      pass: config.password
    }
});

const sendVerificationEmail = async (user, token) => {
  const verificationUrl = `http://localhost:3000/verify/${token}`; // Replace with your domain
  const message = {
    from: config.from,
    to: user.email,
    subject: 'Verify your account',
    html: `Click here to verify your account: <a href="${verificationUrl}">Verify</a>`
  };

  await transporter.sendMail(message);
};

module.exports = { sendVerificationEmail };

const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faqController');

router.get('/getfaq', faqController.getFAQs);
router.post('/createfaq', faqController.createFAQ);

module.exports = router;

const express = require('express');
const router = express.Router();
const seminarController = require('../controllers/seminarController');

router.get('/getseminar', seminarController.getSeminars);
router.post('/createseminar', seminarController.createSeminar);

module.exports = router;

const express = require('express');
const { scheduleEmail } = require('../controllers/emailController');
const router = express.Router();

// Route to schedule an email
router.post('/email', scheduleEmail);

module.exports = router;

const express = require('express');
const { saveFlowchart, getFlowchart } = require('../controllers/flowchartController');
const router = express.Router();

// Route to save flowchart data
router.post('/flowchart', saveFlowchart);

// Route to get flowchart data
router.get('/flowchart', getFlowchart);

module.exports = router;

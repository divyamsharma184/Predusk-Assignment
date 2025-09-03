const express = require('express');
const router = express.Router();

// GET /health - health check endpoint
router.get('/', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'Me-API Playground is running successfully'
  });
});

module.exports = router;

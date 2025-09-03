const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// GET /profile - returns user profile
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT name, email, education, github, linkedin, portfolio FROM users LIMIT 1');
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching profile:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /profile - create/update profile
router.post('/', async (req, res) => {
  try {
    const { name, email, education, github, linkedin, portfolio } = req.body;
    
    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    
    // Check if profile exists
    const existingProfile = await pool.query('SELECT id FROM users LIMIT 1');
    
    if (existingProfile.rows.length > 0) {
      // Update existing profile
      const result = await pool.query(
        'UPDATE users SET name = $1, email = $2, education = $3, github = $4, linkedin = $5, portfolio = $6, updated_at = CURRENT_TIMESTAMP WHERE id = $7 RETURNING name, email, education, github, linkedin, portfolio',
        [name, email, education, github, linkedin, portfolio, existingProfile.rows[0].id]
      );
      res.json(result.rows[0]);
    } else {
      // Create new profile
      const result = await pool.query(
        'INSERT INTO users (name, email, education, github, linkedin, portfolio) VALUES ($1, $2, $3, $4, $5, $6) RETURNING name, email, education, github, linkedin, portfolio',
        [name, email, education, github, linkedin, portfolio]
      );
      res.status(201).json(result.rows[0]);
    }
  } catch (err) {
    console.error('Error creating/updating profile:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

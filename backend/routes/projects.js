const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// GET /projects - list all projects with optional skill filtering
router.get('/', async (req, res) => {
  try {
    const { skill } = req.query;
    
    let query = `
      SELECT DISTINCT p.id, p.title, p.description, p.link, 
             ARRAY_AGG(s.name) as skills
      FROM projects p
      LEFT JOIN project_skills ps ON p.id = ps.project_id
      LEFT JOIN skills s ON ps.skill_id = s.id
    `;
    
    const queryParams = [];
    
    if (skill) {
      query += ` WHERE s.name ILIKE $1`;
      queryParams.push(`%${skill}%`);
    }
    
    query += ` GROUP BY p.id, p.title, p.description, p.link ORDER BY p.created_at DESC`;
    
    const result = await pool.query(query, queryParams);
    
    // Format the response
    const projects = result.rows.map(row => ({
      id: row.id,
      title: row.title,
      description: row.description,
      link: row.link,
      skills: row.skills.filter(s => s !== null) // Remove null values
    }));
    
    res.json(projects);
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

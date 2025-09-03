-- Database schema for Me-API Playground

-- Users table for profile information
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    education TEXT,
    github VARCHAR(255),
    linkedin VARCHAR(255),
    portfolio VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Skills table
CREATE TABLE IF NOT EXISTS skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    link VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Project skills junction table
CREATE TABLE IF NOT EXISTS project_skills (
    project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
    skill_id INTEGER REFERENCES skills(id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, skill_id)
);

-- Insert sample data
INSERT INTO users (name, email, education, github, linkedin, portfolio) VALUES
('Divyam Sharma', 'divyamsharma184@gmail.com', 'Information Technology, Manipal University Jaipur', 'https://github.com/divyamsharma184', 'https://linkedin.com/in/divyamsharma184', '-')
ON CONFLICT (email) DO NOTHING;

INSERT INTO skills (name) VALUES
('JavaScript'), ('Python'), ('React'), ('Node.js'), ('PostgreSQL'), ('Express'), ('HTML'), ('CSS')
ON CONFLICT (name) DO NOTHING;

INSERT INTO projects (title, description, link) VALUES
('E-commerce Platform', 'A full-stack e-commerce application built with React and Node.js', 'https://github.com/divyamsharma184/ecommerce'),
('Task Manager API', 'RESTful API for task management with Express and PostgreSQL', 'https://github.com/divyamsharma184/task-manager'),
('Portfolio Website', 'Personal portfolio website built with React and modern CSS', 'https://github.com/divyamsharma184/portfolio')
ON CONFLICT DO NOTHING;

-- Link projects to skills
INSERT INTO project_skills (project_id, skill_id) VALUES
(1, 1), (1, 3), (1, 4), (1, 6), -- E-commerce: JS, React, Node.js, Express
(2, 1), (2, 4), (2, 5), (2, 6), -- Task Manager: JS, Node.js, PostgreSQL, Express
(3, 1), (3, 3), (3, 7), (3, 8)  -- Portfolio: JS, React, HTML, CSS
ON CONFLICT DO NOTHING;

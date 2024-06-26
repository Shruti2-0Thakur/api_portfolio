// routes/project.js
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const upload = require('../middlewares/projectMulter');

// Get all projects
router.get('/', projectController.getAllProjects);

// Get a single project by ID
router.get('/:id', projectController.getProjectById);

// Add a new project
router.post('/', upload, projectController.addProject);

// Update an existing project
router.put('/:id', upload, projectController.updateProject);

// Delete a project
router.delete('/:id', projectController.deleteProject);

module.exports = router;

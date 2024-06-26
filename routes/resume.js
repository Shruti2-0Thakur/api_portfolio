const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');
const upload = require('../middlewares/uploadResume');

// Get resume
router.get('/', resumeController.getResume);

// Upload or update resume
router.post('/', upload, resumeController.uploadResume);

module.exports = router;

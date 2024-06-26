const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');
const upload = require('../middlewares/multer');

// Get all experiences
router.get('/', async (req, res) => {
    try {
        const experiences = await Experience.find();
        res.json(experiences);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single experience by ID
router.get('/:id', async (req, res) => {
    try {
        const experience = await Experience.findById(req.params.id);
        if (!experience) return res.status(404).json({ message: 'Experience not found' });
        res.json(experience);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new experience
router.post('/', upload, async (req, res) => {
    const { role, company, period, details } = req.body;
    const logo = req.files['logo'] ? req.files['logo'][0].path : null;
    const certificates = req.files['certificates'] ? req.files['certificates'].map(file => file.path) : [];

    const newExperience = new Experience({
        role,
        company,
        logo,
        period,
        details: details.split(','),
        certificates
    });

    try {
        const savedExperience = await newExperience.save();
        res.status(201).json(savedExperience);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update an existing experience
router.put('/:id', upload, async (req, res) => {
    const { role, company, period, details } = req.body;
    const logo = req.files['logo'] ? req.files['logo'][0].path : null;
    const certificates = req.files['certificates'] ? req.files['certificates'].map(file => file.path) : [];

    const updateData = {
        role,
        company,
        period,
        details: details.split(',')
    };

    if (logo) updateData.logo = logo;
    if (certificates.length > 0) updateData.certificates = certificates;

    try {
        const updatedExperience = await Experience.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );

        if (!updatedExperience) return res.status(404).json({ message: 'Experience not found' });

        res.json(updatedExperience);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete an experience
router.delete('/:id', async (req, res) => {
    try {
        const deletedExperience = await Experience.findByIdAndDelete(req.params.id);
        if (!deletedExperience) return res.status(404).json({ message: 'Experience not found' });

        res.json({ message: 'Experience deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

const Resume = require('../models/Resume');


exports.getResume = async (req, res) => {
    try {
        const resume = await Resume.findOne();
        if (!resume) return res.status(404).json({ message: 'Resume not found' });
        res.json(resume);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.uploadResume = async (req, res) => {
    const resumePath = req.file ? req.file.path : null;

    if (!resumePath) {
        return res.status(400).json({ message: 'No resume file uploaded' });
    }

    try {
        const existingResume = await Resume.findOne();
        if (existingResume) {
            // Update existing resume
            existingResume.path = resumePath;
            const updatedResume = await existingResume.save();
            res.json(updatedResume);
        } else {
            // Add new resume
            const newResume = new Resume({ path: resumePath });
            const savedResume = await newResume.save();
            res.status(201).json(savedResume);
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

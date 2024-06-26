
const Skill = require('../models/Skill');


exports.getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.getSkillsByCategory = async (req, res) => {
    try {
        const skills = await Skill.find({ category: req.params.category });
        res.json(skills);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.addSkill = async (req, res) => {
    const { category, name, level } = req.body;

    const newSkill = new Skill({
        category,
        name,
        level
    });

    try {
        const savedSkill = await newSkill.save();
        res.status(201).json(savedSkill);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


exports.updateSkill = async (req, res) => {
    const { category, name, level } = req.body;

    try {
        const updatedSkill = await Skill.findByIdAndUpdate(
            req.params.id,
            { category, name, level },
            { new: true }
        );
        if (!updatedSkill) return res.status(404).json({ message: 'Skill not found' });
        res.json(updatedSkill);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


exports.deleteSkill = async (req, res) => {
    try {
        const deletedSkill = await Skill.findByIdAndDelete(req.params.id);
        if (!deletedSkill) return res.status(404).json({ message: 'Skill not found' });
        res.json({ message: 'Skill deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

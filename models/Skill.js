// models/Skill.js
const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Skill', SkillSchema);

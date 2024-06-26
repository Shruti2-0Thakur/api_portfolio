const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    details: {
        type: [String],
        required: true
    },
    certificates: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('Experience', ExperienceSchema);

const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    demo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Project', ProjectSchema);

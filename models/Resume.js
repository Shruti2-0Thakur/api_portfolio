const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Resume', ResumeSchema);

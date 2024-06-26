const express = require('express');
const mongoose = require('mongoose');
const experienceRoutes = require('./routes/experience');
const projectRoutes = require('./routes/project');
const skillRoutes = require('./routes/skill');
const resumeRoutes = require('./routes/resume');

const app = express();

// Middleware
app.use(express.json());

app.use('/api/experience', experienceRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/skill', skillRoutes);
app.use('/api/resume', resumeRoutes);
// MongoDB connection
const mongoURI = 'mongodb+srv://shrutithakur9508:adWYyz4xpq9hgT5T@cluster0.s4vlc2v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define routes
app.get('/', (req, res) => {
    res.send('API Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

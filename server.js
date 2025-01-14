const express = require('express');
const linkedIn = require('./index');
const app = express();
const port = process.env.PORT || 4000;

app.get('/api/jobs', async (req, res) => {
    try {
        // Convert query parameters to linkedIn query options
        const queryOptions = {
            keyword: req.query.keyword || '',
            location: req.query.location || '',
            dateSincePosted: req.query.dateSincePosted || '',
            jobType: req.query.jobType || '',
            remoteFilter: req.query.remoteFilter || '',
            salary: req.query.salary || '',
            experienceLevel: req.query.experienceLevel || '',
            limit: req.query.limit || '',
            sortBy: req.query.sortBy || '',
            page: req.query.page || '0'
        };

        const jobs = await linkedIn.query(queryOptions);
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

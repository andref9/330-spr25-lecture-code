const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const users = [];

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/health', (req, res) => {
    res.status(200).json({
        applicationName: 'First Express app',
    });
});

app.post('/users', (req, res) => {
    console.log(req.body);
    // Add a user... somewhere? How do DBs work?
    users.push(req.body.firstName);

    res.status(201).json({success: true});
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/:name/courses', (req, res) => {
    res.send(req.params.name);
});

module.exports = app;
const express = require('express');
const Items = require('./models/items');

const server = express();
server.use(express.json());

server.get('/query', (req, res) => {
    // TODO: Your queries
    const results = null;

    res.send(results);
});

module.exports = server;
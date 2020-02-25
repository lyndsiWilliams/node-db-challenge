const express = require('express');

const projectRouter = require('./router/projectRouter.js');

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);

module.exports = server;
const express = require('express');
const routes = require('./src/routes');
const server = express();

//server.use(express.json());

server.use(routes);

server.use(express.urlencoded({ extended: false }));

module.exports = routes

server.listen(8080)    


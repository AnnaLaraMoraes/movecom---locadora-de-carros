const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');
const server = express();

server.use(express.json());
server.use(cors());

server.use(routes);

server.listen(3000, '192.168.1.7', function() {
    console.log('Porta:  ' + 3000);
});    


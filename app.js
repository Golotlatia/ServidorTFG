require('dotenv').config()

console.log("hola mundo");

const Server = require('./models/server.js');

const server = new Server();

server.listen();
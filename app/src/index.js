const db = require('./models/db');
const server = require('./server');

server.start();
db.connect();


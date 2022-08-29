const fetch = require('node-fetch');
const { db } = require('./models/db');
const server = require('./server');
const { getUsers } = require('./functions/getUsers')

getUsers()
server.start();
db.connect();
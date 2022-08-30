const { db } = require('../models/db');

async function getUsers() {
    return db.models.Users.findAll();
}
module.exports = {
    getUsers,
}
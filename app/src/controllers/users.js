const { db } = require('../models/db');

async function getUsers() {
    return db.models.Users.findAll();
}
async function createUser(user) {
    return db.models.Users.create(user)
}

async function deleteUser(id) {
    return db.models.Users.destroy({
        where: {
            id: id
        }
    });
}
module.exports = {
    getUsers,
    createUser,
    deleteUser
}
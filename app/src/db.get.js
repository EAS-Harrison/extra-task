const { query } = require('express');
const fetch = require('node-fetch');
var mysql = require('mysql');
const users = require('./models/users');

var connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "example",
    database: 'Users'
});

connect.connect(async function (err) {
    if (err) throw err;
    console.log("Connected!");
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()

    for (var i = 0; i < data.length; i++) {
        var name = data[i].name
        var username = data[i].username
        var id = (`${data[i].id}`)
        var address = `${data[i].address.suite}, ${data[i].address.street}`
        var date = new Date()
        user = [name, username, id, address, date, date]
        var sql = 'INSERT INTO Users SET name = ?, username = ?, id = ?, address = ?, createdAt = ? , updatedAt = ? '
        connect.query(sql, user, function (error, results, fields) {
            if (error) throw error;
        });
    }
});
module.exports = {
    connect
}
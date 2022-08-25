const fetch = require('node-fetch')

async function getUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()
    for (var i = 0; i < data.length; i++) {
        console.log(`
User Details:
    ID: ${data[i].id}
    Name: ${data[i].name}
    Username: ${data[i].username}
    Address: ${data[i].address.suite}, ${data[i].address.street}, ${data[i].address.city}, ${data[i].address.zipcode}
    Contact: ${data[i].phone} or ${data[i].email}

Company Details: 

    Name: ${data[i].company.name}
    Website: ${data[i].website}`);
    }
}
getUsers()

async function getPosts() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json()
    for (var i = 0; i < data.length; i++) {
        console.log(`
Post:

ID: ${data[i].id}
Title: ${data[i].title}
    
${data[i].body}
    
    `);
    }
}
getPosts()

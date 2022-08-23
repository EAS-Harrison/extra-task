const fetch = require('node-fetch')

async function getUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    let data = await response.json()
    return data;
}
getUsers().then((data) => console.log(`
User Details:

    Name: ${data.name}
    Username: ${data.username}
    Address: ${data.address.suite}, ${data.address.street}, ${data.address.city}, ${data.address.zipcode}
    Contact: ${data.phone} or ${data.email}

Company Details: 

    Name: ${data.company.name}
    Website: ${data.website}
`))
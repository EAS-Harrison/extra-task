const fetch = require('node-fetch')

async function getUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let data = await response.json()
    return data;
}
getUsers().then((data) => console.log(data))
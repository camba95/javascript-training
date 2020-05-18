const express = require('express');

const app = express();

app.get('/users', (_, response) => {
  const users = ['Jhon', 'Aria'];
  response.status(200).json({ users });
});

const port = 3000;
app.listen(port, () => {
  console.info(`Application running on port: ${port}`);
});

// uri: protol + host (hostaname + port) + path
// uri: http://locahost:3000
// restful api / rest
// architectural style -> api: based on htpp protocol
// resource -> users/documents/products
// get/post/put/patch/delete
// http://locahost:3000/users (get) -> user list
// http://locahost:3000/documents/{id} (get) -> single document
// http://locahost:3000/documents (post) -> create a single document
// http://locahost:3000/documents/{id} (put) -> update a single document
// http://locahost:3000/documents/{id} (delete) -> delete a single document

// http request / http response (status)
// server1 --->  request ---> server2
// server1 <---  response (status, data(json)) <--- server2

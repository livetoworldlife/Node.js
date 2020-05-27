'use strict';

const http = require('http');

const PORT = 3000;

//create a server with Node
let server = http.createServer((request, response) => {

  switch (request.url) {
    case '/':// send HTML  
      response.setHeader('Content-Type', 'text/html');
      response.write(`<html>
      <head>
        <title>My First Web Server</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
      </head>
      <body>
        <h1>Hello, anyone there?</h1>
        <div id="content"></div>
        <script src="script.js"></script>
      </body>
    </html>`);
      break;
    case '/style.css':// send css
      response.setHeader('Content-Type', 'text/css');
      response.write(`#content { color: blue }`);
      break;
    case '/script.js': // send javascript 
      response.setHeader('Content-Type', 'text/javascript');
      response.write(`document.getElementById('content').appendChild(document.createTextNode('Welcome to Server-land!'));`);
      break;
    default: // send other case
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/plain');
      response.write(`${response.statusCode} : File not found!`);

  }

  response.end(); //Ends the response
});

server.listen(PORT, () => console.log(`Server is running on ${PORT}...`)); //The server listens on port 3000
'use strict';

// creating an Express instance,
const axios = require('axios');
const expHbr = require('express-handlebars');
const express = require('express');
const app = express();
const PORT = 3000;

// Make a GET request to / that sends the message
app.get('/', (request, response) => {
  response.send('hello from backend to frontend!');
})

//listen to port 3000
app.listen(PORT, () => console.log(`Server is running on ${PORT}...`)); 
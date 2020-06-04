'use strict';
// https://quiet-lowlands-26235.herokuapp.com/

const axios = require('axios'),
  exphbs = require('express-handlebars'),
  express = require('express'),
  app = express(),
  PORT = process.env.PORT || 3000;

// set the handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Make a GET request to / that sends the message
app.get('/', (request, response) => {
  response.render('index');
})

//listen to port 
app.listen(PORT, () => console.log(`Server is running on ${PORT}...`)); 
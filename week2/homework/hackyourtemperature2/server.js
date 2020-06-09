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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Make a GET request to / that sends the message
app.get('/', (request, response) => {
  response.render('index');
})
// Create a POST route, that has as an endpoint: /weather
app.post('/weather', (request, response) => {
  const cityName = request.body.cityName;
  response.send(cityName);
});

//listen to port 3000
app.listen(PORT, () => console.log(`Server is running on ${PORT}...`)); 

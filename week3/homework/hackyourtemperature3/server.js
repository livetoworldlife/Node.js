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
app.post('/weather', (req, res) => {
  const API_KEY = require('./sources/keys.json').API_KEY;
  const cityName = req.body.cityName;
  if (cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${cityName}&units=metric`;
    axios
      .get(url)
      .then(response =>
        res.render('index', {
          weatherText: `The temperature in ${cityName} is ${response.data.main.temp} °C! `,
        }),
      )
      .catch(() => res.render('index', { weatherText: 'City is not found' }));
    return;
  }
  res.status(400).render('index', { weatherText: 'Bad Request.Your browser sent a request that this server could not understand.' });
});

//listen to port 3000 
app.listen(PORT, () => console.log(`Server is running on ${PORT}...`)); 
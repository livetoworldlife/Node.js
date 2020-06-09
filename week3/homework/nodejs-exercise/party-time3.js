"use strict";

const fetch = require('node-fetch'),
  URL = 'https://reservation100-sandbox.mxapps.io/api/reservations';


// Post with JSON
async function makeReservation(URL) {
  try {
    const bodyObject = {
      "name": "John Doe",
      "numberOfPeople": 3
    };
    const response = await fetch(URL, {
      method: 'post',
      body: JSON.stringify(bodyObject),
      headers: { 'Content-Type': 'application/json' }
    });
    const text = await response.text();
    console.log(text);
  } catch (error) {
    console.log(`Error!! : ${error}`);
  }
}

makeReservation(URL);


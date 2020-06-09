"use strict";

const fetch = require('node-fetch'),
  URL = 'https://api.icndb.com/jokes/random';


async function getNorrisJoke(URL) {
  try {
    const response = await fetch(URL);
    const json = await response.json();
    console.log(` Chuck Norris joke id is ${json.value.id},
    the category of the joke is ${json.value.categories.length === 0 ? "not categorized" : json.value.categories},
    WHAT A JOKE :)))
    "${json.value.joke}".`);
  } catch (error) {
    console.log(`Error!! : ${error}`);
  }
}

getNorrisJoke(URL);


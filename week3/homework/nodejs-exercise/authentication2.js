"use strict";

const fetch = require('node-fetch'),
  URL = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books';


async function getBooks(URL) {
  try {
    const response = await fetch(URL, {
      headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' }
    });
    const json = await response.json();
    const data = await json;
    data.forEach((book, index) =>
      console.log(`
      ${++index}.book id : ${book.id},
      ${index}.book title : ${book.title},
      ${index}.book author : ${book.author}`));
  } catch (error) {
    console.log(`Error!! : ${error}`);
  }
}

getBooks(URL);
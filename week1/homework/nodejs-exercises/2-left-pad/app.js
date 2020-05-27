'use strict';

const padLeft = require('./node_modules/left-pad/index');

const numbers = ["12", "846", "2", "1236"];

numbers.forEach((number, index) => {

  let result = padLeft(number, 8, "_");
  console.log(result);
})

'use strict';

const padLeft = require("./padLeft");

const numbers = ["12", "846", "2", "1236"];

numbers.forEach((number, index) => {

  let result = padLeft.padLeft(number, 5, "_");
  console.log(result);
})

'use strict';

const padLeft = require('./node_modules/left-pad/index');

const numbers = ["12", "846", "2", "1236"];

numbers.forEach(number => console.log(padLeft(number, 8, " ")) );

const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')


const middle = function(testArray) {
  if (testArray.length === 1 || testArray.length === 2) {
    return []
  } else if (testArray.length % 2 === 0) {
    return [testArray[testArray.length / 2 - 1], testArray[testArray.length / 2]]
  } else if (testArray.length % 2 !== 0) {
    return [testArray[testArray.length / 2 - .5]]
  }
};


module.exports = middle
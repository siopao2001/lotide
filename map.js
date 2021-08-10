const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`😄 Assertion Passed: ${arr1}` + ` === ${arr2}`)
  } else {
    console.log(`🤯 Assertion Failed:  ${arr1}` + ` !==  ${arr2}`)
  }
}
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, function1) {
  const results = [];
  for (item of array) {
    results.push(function1(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
console.log(results1);


module.exports = map
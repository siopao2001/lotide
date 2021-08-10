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
const letterPositions = function(sentence) {
  const results = {};
  for (letters in sentence) {
    if (sentence[letters] !== ' ') {
      if (results[sentence[letters]]) {
        results[sentence[letters]].push(+letters);
      } else {
        results[sentence[letters]] = [+letters]
      }
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"))
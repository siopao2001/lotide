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
};
const middle = function(testArray) {
  if (testArray.length === 1 || testArray.length === 2) {
    return []
  } else if (testArray.length % 2 === 0) {
    return [testArray[testArray.length / 2 - 1], testArray[testArray.length / 2]]
  } else if (testArray.length % 2 !== 0) {
    return [testArray[testArray.length / 2 - .5]]
  }
};
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
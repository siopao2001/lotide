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
const flatten = function(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let b = 0; b < arr[i].length; b++) {
        newArray.push(arr[i][b]);
      }
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]))
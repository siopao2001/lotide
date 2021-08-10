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
const without = function(source, itemsToremove) {
  const newArray = [];
  for (var i = 0; i < source.length; i++) {
    if (!itemsToremove.includes(source[i])) {
      newArray.push(source[i])
    };
  }
  return newArray;
};
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
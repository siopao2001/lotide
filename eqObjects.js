const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄 Assertion Passed: ${actual}` + ` === ${expected}`)
  } else if (actual !== expected) {
    console.log(`🤯 Assertion Failed:  + ${actual}` + ` !==  ${expected}`)
  }
};
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);
  if (objKeys1.length !== objKeys2.length) return false;
  for (keys of objKeys1) {
    if (Array.isArray(object1[keys]) === true && Array.isArray(object2[keys]) === true) {
      if (eqArrays(object1[keys], object2[keys]) === false) {
        return false
      }
    } else if (object1[keys] !== object2[keys]) {
      return false
    };
  };
  return true
};
const ab = {
  a: "1",
  b: "2"
};
const ba = {
  b: "2",
  a: "1"
};
//console.log(eqObjects(ab, ba)); // => true
const abc = {
  a: "1",
  b: "2",
  c: "3"
};
//console.log(eqObjects(ab, abc));
const cd = {
  c: "1",
  d: ["2", 3]
};
const dc = {
  d: ["2", 3],
  c: "1"
};
console.log(eqObjects(cd, dc)); // => true
const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};
console.log(eqObjects(cd, cd2)); // => false
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
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true) {
    console.log(`😄 Assertion Passed: ${inspect(object1)}` + ` === ${inspect(object2)}`)
  } else {
    console.log(`🤯 Assertion Failed:  ${inspect(object1)}` + ` !==  ${inspect(object2)}`)
  }
};

//console.log(assertObjectsEqual(ab, ba))

module.exports = assertObjectsEqual
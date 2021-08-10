const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄 Assertion Passed: ${actual}` + ` === ${expected}`)
  } else if (actual !== expected) {
    console.log(`🤯 Assertion Failed:  + ${actual}` + ` !==  ${expected}`)
  }
};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  Horror: "It"
};
const findKeyByValue = function(object, value) {
  for (key in object) {
    if (object[key] === value) return key;
  }
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


const assertEqual = function(actual, expected) {
	if (actual === expected) {
	  console.log(`😄 Assertion Passed: ${actual}` + ` === ${expected}`)
	} else if (actual !== expected) {
	  console.log(`🤯 Assertion Failed:  ${actual}` + ` !==  ${expected}`)
	}
      };
     
const eqArrays = function (arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;
};
      
      console.log(eqArrays([1, 2, 4], [1, 2, 4]));
      assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
      assertEqual(eqArrays([1, 2, "blue"], [1, 2, 3]), true)
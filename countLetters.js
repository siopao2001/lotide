const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`😄 Assertion Passed: ${actual}` + ` === ${expected}`)
	} else if (actual !== expected) {
		console.log(`🤯 Assertion Failed:  + ${actual}` + ` !==  ${expected}`)
	}
};


let word = "I lLove my self";

const countLetters = function (string) {
	const result = {};
	let string2 = string.replace(/\s+/g, '').toUpperCase();

	for (letters of string2) {

		if (result[letters]) {
			result[letters] += 1;
		} else {
			result[letters] = 1;
		}

	}

	return result
};

console.log(countLetters(word));
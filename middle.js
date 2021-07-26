const middle = function(testArray) {
	if (testArray.length === 1 || testArray.length === 2) {
		return []
	} else if (testArray.length % 2 === 0) {
		return [testArray[testArray.length/2 - 1], testArray[testArray.length/2]]
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
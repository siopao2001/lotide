const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`😄 Assertion Passed: ${actual}` + ` === ${expected}`)
	} else if (actual !== expected) {
		console.log(`🤯 Assertion Failed:  + ${actual}` + ` !==  ${expected}`)
	}
};

const firstNames = [
	"Karl",
	"Salima",
	"Agouhanna",
	"Fang",
	"Kavith",
	"Jason",
	"Salima",
	"Fang",
	"Joe"
];

const neededObjects = {
	"Jason": true,
	"Karima": true,
	"Fang": true,
	"Agouhanna": false
}



const countOnly = function (allItems, itemsToCount) {
	const results = {};
	for (const item of allItems) {
		if (itemsToCount[item]) {
			if (results[item]) {
				results[item] += 1;
			} else {
				results[item] = 1;
			}
		}
	}
	return results
}


console.log(countOnly(firstNames, neededObjects))
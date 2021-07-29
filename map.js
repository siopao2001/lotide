const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, function1) {
	const results = [];
	for(item of array){
		results.push(function1(item));
	}
	return results;
};


const results1 = map(words, word => word[0]);
console.log(results1);
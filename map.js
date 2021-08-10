const map = function(array, function1) {
  const results = [];
  for (item of array) {
    results.push(function1(item));
  }
  return results;
};




module.exports = map
const letterPositions = function(sentence) {
  const results = {};
  for (letters in sentence) {
    if (sentence[letters] !== ' ') {
      if (results[sentence[letters]]) {
        results[sentence[letters]].push(+letters);
      } else {
        results[sentence[letters]] = [+letters]
      }
    }
  }
  return results;
};




module.exports = letterPositions
const countLetters = function(string) {
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



module.exports = countLetters
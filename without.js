const without = function(source, itemsToremove) {
  const newArray = [];
  for (var i = 0; i < source.length; i++) {
    if (!itemsToremove.includes(source[i])) {
      newArray.push(source[i])
    };
  }
  return newArray;
};



module.exports = without


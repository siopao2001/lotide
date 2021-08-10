const takeUntil = function(array, callback) {
  let newArray = [];
  for (let item = 0; item < array.length; item++) {
    if (callback(array[item]) === true) {
      break;
    }
    newArray.push(array[item]);
  }
  return newArray
}



module.exports = takeUntil
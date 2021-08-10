const flatten = function(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let b = 0; b < arr[i].length; b++) {
        newArray.push(arr[i][b]);
      }
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};




module.exports = flatten
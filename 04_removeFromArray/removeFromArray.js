const removeFromArray = function(arr, ...args) {
  for (let arg of args) {
    let iToDelete = arr.indexOf(arg);
    while (iToDelete != -1) {
      arr.splice(iToDelete, 1);
      iToDelete = arr.indexOf(arg);
    } // while
  } // for-each

  return arr;
};
// Do not edit below this line
module.exports = removeFromArray;

const reverseString = function(str) {
  let reverse = "";
  for (let i = str.length-1; i >= 0; i--) {
    reverse += str[i];
  } // for

  return reverse;
};

// Do not edit below this line
module.exports = reverseString;

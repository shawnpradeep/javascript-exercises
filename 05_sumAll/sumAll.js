const sumAll = function(start, stop) {
  if ((typeof start == 'number' && typeof stop == "number") && (start >= 0 && stop >= 0)) {
    if (start > stop) {
      let x = start;
      start = stop;
      stop = x;
    } // edge case

    let sum = 0;
    for (let i = start; i <= stop; i++) {
      sum += i;
    } // for
  
    return sum;
  } else {
    return "ERROR";
  } // if-else
};

// Do not edit below this line
module.exports = sumAll;

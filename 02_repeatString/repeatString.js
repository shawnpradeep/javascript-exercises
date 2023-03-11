const repeatString = function(str, num) {
  if (num < 0) return "ERROR";
  let rt = "";
  for (let i = 0; i < num; i++) {
    rt += str;
  }

  return rt;
};

// Do not edit below this line
module.exports = repeatString;

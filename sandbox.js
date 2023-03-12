const arr = [1,3,4,5];

arr.splice(1, 0, 100, 200, 300);
// const foo = arr.splice(1,3);


// console.log(foo);
console.log(arr);


console.log("\n");
let str = 'Hello';
console.log(str);
str = str.split('').reverse().join('');
console.log(str);

console.log("\n");

function add(x, ...args) {
  let sum = x;
  for (let arg of args) {
    if (typeof arg == 'number') {
      sum += arg;
    } // if
  } // for-each
  console.log(sum);
};

add(9,1,0,0,0,4);

const array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array);

function removeFromArray(arr, ...args) {
  const array = [];

  for (a of arr) {
    if (!args.includes(a))
      array.push(a);
  }
  return array;
} // removeFromArray


const array2 = removeFromArray(array, 4, 6, 8);
console.log(array2);

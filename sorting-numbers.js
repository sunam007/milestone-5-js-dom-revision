// an array containing random integer numbers; sort numbers in ascending (lower to higher) order;
const randomIntegers = [
  23, 56, 12, 19, 9, 4, 124, 456, 1, 3, 678, 324, 7, 55, 34, 8,
];

console.log("original random integers ", randomIntegers);

const sortedIntegers = randomIntegers.sort();
// numbers have been sorted but not in ascending order; to solve this we have to use call-back function;
console.log("sorted but w/o call-back function ", sortedIntegers);

// after using call-back function within .sort() method;

const ascendingIntegers = randomIntegers.sort(function (a, b) {
  return a - b;
});
console.log("sorted using call-back function ", ascendingIntegers);

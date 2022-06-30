// Commenting on your code is one of the best ways than taking physical notes on pen and paper; I do both ;

// An array of JavaScript Books; Make a new array with the books which contains the exact string "JavaScript" in it. Have to be case-insensitive;

const jsBooks = [
  "A Smarter Way to Learn JavaScript",
  "JavaScript: The Definitive Guide",
  "Speaking JS",
  "Head First JavaScript Programming",
  "JS and JQuery",
  "You Don't Know JS",
  "Effective JavaScript",
];
console.log("Best books on JavaScripts  = ", jsBooks);

const search = "JAVASCRIPT";

// if an empty array is declared for holding multiple elements later , then it must be declared with "let"; declaring with "const" will give errors;
let matched = [];

for (const book of jsBooks) {
  // .includes checks if the string exists or not;
  // parenthesis () is a must for toLowerCase() and toUpperCase();
  //.push() inserts new elements to an array;
  if (book.toLowerCase().includes(search.toLowerCase()) == true) {
    matched.push(book);
  }
}

console.log("Matching keywords ", matched);

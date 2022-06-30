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

let matched = [];

for (const book of jsBooks) {
  //   console.log(book);
  if (book.toLowerCase().includes(search.toLowerCase()) == true) {
    matched.push(book);
  }
}

console.log("Matching keywords ", matched);

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

let words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let fiveLettersWords = words.filter(function(word) {
  return word.length === 5;
});
console.log(fiveLettersWords); // ['apple', 'cherry', 'date']
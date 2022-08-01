// 142. Simple Array Methods

let arr = ["a", "b", "c", "d", "e"];

// SLICE - creates a new array, doesn't mutate the original array

console.log(arr.slice(2)); //['c', 'd', 'e']
console.log(arr.slice(2, 4)); //['c', 'd'] (start element, end element - not included)
console.log(arr.slice(-2)); //['d', 'e']
console.log(arr.slice(-1)); //['e']
console.log(arr.slice(1, -2)); //['b','c']
console.log(arr.slice()); //['a', 'b', 'c', 'd', 'e']
//the same as:
console.log([...arr]); //['a', 'b', 'c', 'd', 'e']

// SPLICE - does mutate the original array (changes it)

console.log(arr.splice(2)); //['c', 'd', 'e']
console.log(arr); //['a', 'b']
arr.splice(-1); // deletes the last element
arr.splice(1, 2); //(start element, how many element to delete);

// REVERSE - does mutate the original array (changes it)

const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']

// CONCAT - does not mutate any of the original arrays

const letters = arr.concat(arr2);
// the same as
console.log(...arr, ...arr2);
console.log(letters);

// JOIN

console.log(letters.join(" - ")); //a - b - f - g - h - i - j

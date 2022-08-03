//143. The new at Method

const arr = [23, 11, 64];
console.log(arr[0]); //23
// the same as:
console.log(arr.at(0)); //23

// getting the last array element
console.log(arr[arr.length - 1]); //64
// he same as:
console.log(arr.slice(-1)[0]); //64
// new at method:
console.log(arr.ar(-2)); //64

// method at is working also with a string:

console.log("maryna".at(0));
console.log("maryna".at(-1));

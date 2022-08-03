"use strict";

// IIFE
// We can hide our variables like this:

(function () {
  console.log(`This will never run again`);
})();

(() => console.log(`This will ALSO never run again`))();

// or we can hide it like this:

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(isPrivate);
console.log(notPrivate);

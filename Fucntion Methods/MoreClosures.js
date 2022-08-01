"use strict";

// 138. More Closures

// Example 1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Re-assigning f funcion
h();
f();
console.dir(f);

//Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// The closure has a priority over a scope-chain
// const perGroup = 1000;

boardPassengers(180, 3);

//Excercise

(function () {
  const header = document.querySelector(`h1`);
  header.style.color = `red`;
  function changeColor(event) {
    header.style.color = `blue`;
  }
  document.querySelector(`body`).addEventListener("click", changeColor);
})();

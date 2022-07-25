'use strict';

///////////////////////////////////
// 128. Function Default Parameters

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers //should be already specified
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking(`LH123`);
// createBooking(`LY126`, 2, 800);
// createBooking(`LN22`, 5);

// // we cannot leave the number of pax as a default value and specify the price
// createBooking(`Lv198`, undefined, 1000);

//////////////////////////
// 129. How Passing Arguments Works: Value vs. Reference
/*
const flight = `LH234`;
const jonas = {
  name: `Jonas Schmedtmann`,
  passport: 23495800,
};

const checkIn = function (flightNum, passenger) {
  flightNum = `LY999`; //hasn't changed
  passenger.name = `Mr. ` + passenger.name; //changed
  if (passenger.passport === 23495800) {
    alert(`Checked in`);
  } else {
    alert(`Wrong passport!`);
  }
};
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the sdme as doing...
// const flightNum = flight; // one more primitive value
// const passenger = jonas; // the same reference value

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas); // `Wrong passport`. Two functions manipulatiing the same object.

// Terms "passing by value" and "passing by reference" in other programming languages. In JS we have only "passing by value" - even if its a memory address, that looks like a value.


///////////////////////
/// 130. First-Class and Higher-Order Functions

////////////////

// // 131. Functions Accepting Callback Functions


const oneWord = function (str) {
  return str.replace(/ /g, ``).toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(` `);
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer(`JavaScript is the best!`, upperFirstWord);
transformer(`JavaScript is the best!`, oneWord);
// creates a level of abstruction - doesn't care how in particular it's transformed, delegating it to a lower-level function

const high5 = function () {
  console.log('👋');
};
document.body.addEventListener(`click`, high5); // high5 is a callback function, addEventListener is a higher order function

[`Jonas`, `Martha`, `Adam`].forEach(high5); // high5 - callback function

// 132. Functions Returning Functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet(`Hey`);
// greeterHey(`Jonas`);
// greeterHey(`Steven`);

// greet(`Hello`)(`Jonas`);

// //the same with Arrow function
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr(`Hi`)(`Jonas`);

// 132. The call and apply methods

/*
const lufthansa = {
  airline: `Lufthansa`,
  iataCode: `LH`,
  bookings: [],
  // book: function() {} // old syntax
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, `Jonas Schmedtmann`);
lufthansa.book(625, `Jonh Smith`);
console.log(lufthansa);

const eurowings = {
  airline: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
};

const book = lufthansa.book;

//book(23, `Sarah Williams`); does NOT work, points to undefined, because it's now just a regular function, so this keyword points to undefined.

// Call method
book.call(eurowings, 23, `Sarah Williams`); // we are setting this keyword to first parameter by call method, then two arguments of original function
console.log(eurowings);

book.call(lufthansa, 239, `Mary Cooper`);
console.log(lufthansa);

const swiss = {
  airline: `Swiss Air Lines`,
  iataCode: `LX`,
  bookings: [],
};

book.call(swiss, 583, `Mary Cooper`);

//Apply method does not recieve the list of arguments after this keyword, instead it takes an array. But it not so common now, because we can still use call.

const flightData = [583, `George Cooper`];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// 133. The bind Method
//Just like the call method it allows us to manually set this keyword for any function call. Bind does not immideately call a function, instead it returns a new function, where this keyword is bounded.
// book.call(eurowings, 23, `Sarah Williams`);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, `Steven Williams`);

const bookEW23 = book.bind(eurowings, 23); // 'partial applicatio' - part of the arguments already applied
bookEW23(`Jonas Schmedtmann`);
bookEW23(`Martha Cooper`);

// With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector(`.buy`)
  .addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// the same as addVAT = value => value + value *0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

*/

// 134. Coding Challenge #1

/*Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉*/

const poll = {
  question: 'What is your favourite programming language?',
  options: [`0: JavaScript`, `1: Python`, `2: Rust`, `3: C++`],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join(`\n`)}\n (Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === `number` &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults(`string`);
  },
  displayResults(type = `array`) {
    if (type === `array`) {
      console.log(this.answers);
    } else if (type === `string`) {
      console.log(`Poll results are ${this.answers.join(`, `)}`);
    }
  },
};
poll.registerNewAnswer();

document
  .querySelector(`.poll`)
  .addEventListener(`click`, poll.registerNewAnswer.bind(poll));

//   [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]

poll.displayResults.call({ answers: [5, 2, 3] }, `string`);
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, `string`);
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

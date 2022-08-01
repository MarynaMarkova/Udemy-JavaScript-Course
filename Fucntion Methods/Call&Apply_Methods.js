"use strict";

// 133. The call and apply methods

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

//Apply method

// takes an array instead of the list of arguments. Not so common any more.

const flightData = [583, `George Cooper`];
book.apply(swiss, flightData);
console.log(swiss);

// the Same:

book.call(swiss, ...flightData);

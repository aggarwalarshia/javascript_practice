// NUMBERS AND MATHS

// const score = 400;
// console.log(score); // 400
// const balance = new Number(100);
// console.log(balance); // [Number: 100]

// console.log(balance.toString().length); // 3

// console.log(balance.toFixed(2)); // 100.00

// const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3)); // 124 (to 3 places that is 123, not 123.8 or 123.89 etc etc)

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // 1,000,000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 (india standard)

// CHECK OTHER FUNCTIONS OR FEATURES LIKE THESE ON MDN DOCS

// MAX AND MIN (run it on browser console)
// Number.MIN_VALUE; // 5e-324
// Number.MAX_VALUE; // 1.7976931348623157e+308
// Number.MAX_SAFE_INTEGER // 9007199254740991


// ******MATHS******(TRY IT ON BROWSER CONSOLE)

// console.log(Math); // there u will get to know a variety of things about Math
// // like
// console.log(Math.abs(-33)); // 33 (absolute value)
// console.log(Math.round(4.4567)); // 4
// console.log(Math.round(4.5)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

// console.log(Math.random()); // any random value b/w 0 and 1

// console.log((Math.random()*10) + 1); // so as to avoid random value that comes 0.something we add 1 to it


// Math.random() function may be used while creating a DICE or something like that
// to optimise the value more, we can apply floor or ceil function to math.random function, soo that we obtain roundoff values 

//  question: define values b/w which you wish to get number

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)) + min);

// REVISE:
// Math.random() hume 0 and 1 k beech m value deti hai
// to shift values to left side we multiply it with 10, but in some cases it is possible that value may be 0.something
// so to avoid this we add 1, to make sure ki value 1 toh minimum ho hi, 1 se badi value chahiye

// in some cases where u have to define the min and max value b/w which u wish to get numbers, we use the formula
// Math.random()*(max-min+1)
// and to make sure ki min value se bada aaye answer, we add min to the formula

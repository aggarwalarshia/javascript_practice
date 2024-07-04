// let score = 33
// let score1 = "33"
// console.log(typeof score)
// console.log(typeofscore1)

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber) //converted to number

// let score2 = "33abc"
// let changeToNumber = Number(score2);

// console.log(typeof changeToNumber) // Number
// console.log(changeToNumber)  //NaN

// in js, the string type values cannot be converted to number type sometimes

// let score = null
// console.log(typeof score) // object

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber) // number
// console.log(valueInNumber) // 0 (zero)

// let score = undefined
// console.log(typeof score) // undefined

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber) // number
// console.log(valueInNumber) // NaN (Not a Number)

// let score = true
// console.log(typeof score) // boolean

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber) // number
// console.log(valueInNumber) // 1 (true converted to 1)

// let score = "arshia"
// console.log(typeof score) // string

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber) // number
// console.log(valueInNumber) // NaN (Not a Number)

// NOTES:

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn); 
// console.log(booleanIsLoggedIn); // true

// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn); 
// console.log(booleanIsLoggedIn); // false

// let isLoggedIn = "arshia"
// let booleanIsLoggedIn = Boolean(isLoggedIn); 
// console.log(booleanIsLoggedIn); // true

// NOTES:

// 1 => true; 0 => false
// "" => false
// "arshia" => true

// let someNumber = 33
// let stringNumber =String(someNumber);
// console.log(typeof stringNumber); // string
// console.log(stringNumber); // 33


// *********OPERATIONS***********

// let value = 3
// let negValue = -value
// console.log(negValue) // -3

// let str1 = "hello"
// let str2 = "Arshia"

// let str3 = str1 + str2
// console.log(str3)  // hello Arshia
// NOTE: in above case, only addition is possible, not subtraction

// console.log("1" + 2) // 12
// console.log(1 + "2") // 12
// console.log("1" + 2 + 2) //122
// console.log(1 + 2 + "2") // 32
// Notes: all this is because of guidelines defined in ECMA Script

// console.log(3 + 4 * 5 % 3); // not good practice
// console.log((3 + 4) * (5 % 3));

// console.log(+true) // 1    worst practice
//console.log(+"") // 0       worst practice
// the + sign converts the value into integer

// let num1, num2, num3
// num1=num2=num3        worst practice

// PREFIX/POSTFIX OPERATORS

// let gameCounter = 100;
// gameCounter++;
// console.log(gameCounter); // 101

// let gameCounter = 100;
// ++gameCounter;
// console.log(gameCounter); // 101

// NOTE: learn from MDN docs
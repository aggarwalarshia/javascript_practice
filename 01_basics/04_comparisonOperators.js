// console.log(2 > 1); true
// console.log(2 >= 1); true
// console.log(2 < 1); false
// console.log(2 == 1); false
// console.log(2 != 1); true
// etc etc

// console.log("2" > 1); true 
// console.log("02" > 1); true
// but these types of comparisons may not return expected results all the time

// console.log(null > 0); false
// console.log(null == 0); false
// console.log(null >= 0); true

// == and comparison operators like <,>,>=,<= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why null>=0 is true and null>0 is false

// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false

// STRICT CHECK : checks both the values strictly including content and dataType

// console.log("2" === 2); // false
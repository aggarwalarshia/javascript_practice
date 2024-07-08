// const name = "arshia";
// const repoCount = 50;

// console.log(name + repoCount + "xyzzzz"); BAD PRACTICE

// console.log(`Hello my name is  ${name} and my repo Count is ${repoCount} `); //GOOD PRACTICE

// access characters of string

const gameName = new String('arshiaag');
// console.log(gameName[0]); // a
// console.log(gameName.__proto__); // type of this is object, not array

// TRY IT ON BROWSER CONSOLE WINDOW AS WELL

// console.log(gameName.length); // 8

// console.log(gameName.toUpperCase()); // ARSHIAAG

// console.log(gameName.charAt(2)); // s

// console.log(gameName.indexOf('i')); // 4


// NOTE: 

/* learn about strings and its functions as much as 
you can from the browser console window after 
implementing the string declaration and pass value, 
also practice all functions available on the browser console
*/

const str= new String('arshia-aggarwal');

const newString = str.substring(2,5);
console.log(newString); // shi
// Note: here the index of last value mentioned in the substring range is excluded

const anotherString = str.slice(-14,4); 
console.log(anotherString); // rsh

const newStringOne = "      arshiaaa         ";
console.log(newStringOne.trim()); // removes all extra spaces

// READ MDN DOCS for more unknown functions

const url = "https://arshia.com/arshia%31aggarwal";
console.log(url.replace('%31', '-'));

console.log(url.includes('arshia')); // true
console.log(url.includes('ananya')); // false

console.log(str.split('-'));
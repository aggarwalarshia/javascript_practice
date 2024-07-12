const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc)
// console.log(marvel); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// // yaha toh array k andar array aagya

// // yaha kya hua hai ki marvel m 3rd index pr ek array ki value add hogyi hai
// // agar hum marvel ka 3rd element access karenge toh hume uska further index batana padega
// // like
// console.log(marvel[3][1]); // flash

// marvel.concat(dc); // doesn't work this way
// console.log(marvel);

// const all_heros = marvel.concat(dc);
// console.log(all_heros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// this method will combine both arrays together

// other way to merge 2 arrays
// using SPREAD OPERATOR (better approach)

// const all_heros_array = [...marvel, ...dc];
// console.log(all_heros_array); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

/* 

[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]

*/

// console.log(Array.isArray("Arshia")); // false
// // convert to array
// console.log(Array.from("Arshia")); // [ 'A', 'r', 's', 'h', 'i', 'a' ]

// // interesting case
// console.log(Array.from({name: "Arshia"})) // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 ,score2, score3)); // [ 100, 200, 300 ]
const myArr = [0, 1, 2, 3, 4, 5];

// // NOTE: js arrays are resizable, unlike in Java, or other languages

// console.log(myArr[1]);

// // SHALLOW COPY
// // DEEP COPY

// // READ MDN DOCS

// const myHeros = ["spiderman","deadpool"];

// const myArr2= new Array(1, 2, 3, 4);


// // Array Methods

// myArr.push(6); // adds a value to array
// console.log(myArr); // [0,1,2,3,4,5,6]
// myArr.pop(); // removes the last value/element from array
// console.log(myArr); // [0,1,2,3,4,5]

// myArr.unshift(9); // [9,0,1,2,3,4,5] // adds a value at beginning of array

// // drawback of unshift is, if there are 1000 elements in array, and we unshift a number to it, the process will take a lot of time to shift every value one place forward, which is not good

// myArr.shift(); // [0,1,2,3,4,5]

// console.log(myArr.includes(9)); // false (boolean type output)

// console.log(myArr.indexOf(9)); // -1

// const newArr = myArr.join();
// console.log(newArr); // 0,1,2,3,4,5
// console.log(typeof newArr); // string

// the .join() func changed the array to string 

// SLICE vs SPLICE

console.log("A",myArr); // A [ 0, 1, 2, 3, 4, 5 ]

const myyNewArr = myArr.slice(1,3);

console.log(myyNewArr); // [ 1, 2 ]

console.log("B",myArr) // B [ 0, 1, 2, 3, 4, 5 ]

const myyNewArr1 = myArr.splice(1,3);

console.log("B",myyNewArr1) // [ 1, 2, 3 ]

// Now, print the original array

console.log("C",myArr); // [ 0, 4, 5 ]

// *******IMPORTANT*******

// NOTE: when u slice a part of array, the output comes from the mentioned start index to last index exclusive
// and the original array remains intact
// but when u splice a part of array, the output prints from mentioned start index to last index inclusive
// and when the original array is printed, it shows the all elements other than spliced part of array.
// with this we know that splice alters the original array as well

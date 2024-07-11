// read about Date object in MDN Docs

let myDate = new Date();

// console.log(myDate); // 2024-07-11T05:15:56.148Z

// console.log(myDate.toString()); // Thu Jul 11 2024 05:16:47 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()); // Thu Jul 11 2024

// console.log(myDate.toLocaleString()); // 7/11/2024, 5:18:39 AM

//******** IMPORTANT

// console.log(typeof myDate); //object


// let myCreatedDate = new Date(2024, 6, 11);
// console.log(myCreatedDate); // 2024-07-11T00:00:00.000Z
// console.log(myCreatedDate.toDateString()); // Thu Jul 11 2024

// NOTE: months 0 se start hote hain js m

let createdDate = new Date("07-11-2024");
// console.log(createdDate.toDateString()); // Thu Jul 11 2024

// Note: agar month single digit se start karte hain toh array 0 se start hota hai,
// agar 01 yaa 02 etc karte hain toh array 1 se hi shuru hota hai


// *******TIMESTAMPS******

// let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1720676254316
// this is the value in millisecs or so, since the time js started to count dates and timestamps

// console.log(createdDate.getTime()); // 1720656000000

// Now, to obtain the timestamp of a specific event, you can compare that value in milisec with the present day's time timestamp in milisec and use the obtained result

// to convert it into seconds **** IMP *****
// console.log(Math.floor(Date.now()/1000));

// Always compare values of timestmaps in millisecs only

let newDate = new Date();
console.log(newDate); // 2024-07-11T05:44:39.666Z

// console.log(newDate.getMonth()); // 6

console.log(newDate.getDay()); // 4
// here 4 means Thursday


// INTERESTING STUFF
// u can customize how date, time, month, year etc etc will appear
// eg: Thu ko Thursday OR Jun ko June
newDate.toLocaleString('default', {
    weekday: "long"
})

// read mdn docs for all functions 
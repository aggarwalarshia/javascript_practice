// const accountId/account_id any
const accountId = 12345
let accountEmail = "arshia@gmail.com"
var accountPass = "54321"
accountCity = "Yoganda" //not good practice to declare or initialize a variable 
// Investigation wali padhai karte hain
// 1.
// accountId=2 This is not allowed because value of accountId is set with constant dataType
// console.log(accountId); //OUTPUT: errorrr
// 2.
accountEmail = "aa@aa.com"
accountPass = "121212"
accountCity = "Palampur"

// console.table[accountId, accountEmail, accountPass, accountCity];
// console.log(accountId) output as 12345
// console.log(accountEmail) output as aa@aa.com
// console.log(accountPass) output as 121212
// console.log(accountCity) output as Palampur


// LEARNING: 
// to declare constant variables we use 'const' keyword 
// to declare variables which can be changed later, we use 'let' keyword
// we don't use 'var' keyword to declare variables because of scope issues in javascript

/*
prefer not to use 'var'
because of issue in block scope and functional scope
*/

let accountState
console.log(accountState) //undefined

//if you declare a variable and do not pass a value in it, then it will return result as undefined

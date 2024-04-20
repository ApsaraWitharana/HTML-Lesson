//There are 6 types in javascripte

//1. String
let firstName = "Sachini"

console.log( "Type of firstName:",typeof firstName)

//2. Number
let age = 20;
console.log("Type of age",typeof age)
let sistancekm=3.5
console.log("Type of sistancekm",typeof sistancekm)

//3. boolean

let isAdded = true
console.log("Type of idAdded",typeof isAdded)
let isDeleted = false
console.log("Type of isDelete",typeof isDeleted)

//4.Undifined --- undefined wal walue danne natuwa unt puluwan assing kranna
let address;
console.log("Type of address",typeof address)

let email = undefined
console.log("Type of email",typeof undefined)

//5.Null -- Represent the inteantional absence of any object value .It is a primitive value tha
let phoneNumber = null
console.log("Type of phoneNumber",typeof phoneNumber)

//6.Symbols - Introduced in ECMAScript 6 (ES6) symbols are unique and immutable primitive 

let symbol ="a";
console.log("Type of symbol",typeof symbol)

//7. BigInt ---agata==> n

const number1 = 1212313232323232322322323223223233232n
const number2 = 100;

const result = number1+BigInt(number2);
console.log("resut",result)
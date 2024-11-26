
// console.log(typeof score);


let score1=32
let sscore=String(score1)  // converstion of number to string
console.log(typeof sscore) // string
console.log(sscore) //32


let score="51abc"
let nscore=Number(score) // converstion of string to number
console.log(typeof nscore) // number
console.log(nscore) // NaN

// let uscore=undefined(score) // strting to undefined
// console.log(uscore) // throe an error unexpected module error

let state;
// let ustate=String(state) // converstion of undefined to string
// console.log(typeof ustate) // string
// console.log(ustate)  //undefined

let ustate=Number(state) // converstion of undefined to number
console.log(typeof ustate) // Number
console.log(ustate)  //NaN

let country=null
let ncountry=Number(country) // converstion of null to number
console.log(typeof ncountry) // number
console.log(ncountry)  // 0

let scountry=String(country)  // converstion of null to string
console.log(typeof scountry)  // string
console.log(scountry) // null

// let isloggedin= "ami" 
// let bisloggedin=Boolean(isloggedin)  // string to boolean
// console.log(bisloggedin) // true

let isloggedin= ""
let bisloggedin=Boolean(isloggedin)  // string to boolean
console.log(bisloggedin) // false

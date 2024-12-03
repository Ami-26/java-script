
// ++++++++**NUMBER FUNCTIOS**+++++++++//

const number = new Number(100)
console.log(number)
console.log(number.toString().length)
console.log(number.toFixed(2))

const num = 100000000
console.log(num.toLocaleString('en-IN'))

const num1 = 113.6556
console.log(num1.toPrecision(4))
console.log(num1.toPrecision(3))

// +++++++++**MATH FUNCTIONS**+++++++++//

console.log(Math)
console.log(Math.abs(-6))
console.log(Math.round(12.69))
console.log(Math.round(12.32))
console.log(Math.floor(12.69)) //it is work like round but different is that it can take lowest roundable value
console.log(Math.ceil(12.32))  //it is work like round but different is that it can take higest roundable value
console.log(Math.random())     // it can give between 0 to 1 random value
console.log(Math.random()*10)  // here *10 is use for shift one digit to left side
console.log((Math.random()*10)+1) // here +1 is use to give 1 value not start with 0. to somthing

// here it is exapmle that start random value with 11 to plus value
const min=10
const max=20
console.log(Math.floor((Math.random()*10)))
console.log(Math.floor((Math.random()*10))+min)
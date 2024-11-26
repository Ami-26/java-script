// postfix operation
let a=2
let b=a++
console.log(a);
console.log(b)

//prefix operation
let x=3
let y=++x
console.log(x)
console.log(y)

console.log(2**10) // 2 power of 10
console.log(7%2) // show a reminder

/*

AVOID THIS TYPE OF COMPARISION BECAUSE SOMETIME NULL CAN BE NaN OR SOMETIME NULL CAN BE 0 SO IT'S CONFUSING SO AVOID THIS TYPE OF COMPARISION

console.log(null>0)
console.log(null==0)
console.log(null>=0)

console.log(undefined>0)
console.log(undefined>=0)
console.log(undefined==0)

*/

console.log("2" == 2) // convert automatically into number so it's return TRUE
console.log("2"===2)  // return FALSE because '===' also check value with it's datatype..
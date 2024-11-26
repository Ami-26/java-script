"use strict";  // treat all js code as newar version..
let name="ami"
let no=1
let sirname;
let salary=null
let isloggedin=false

console.log(typeof no);
console.log(typeof "ami")
console.log(typeof sirname)
console.log(typeof salary)
console.log(typeof isloggedin)

console.log(typeof undefined) // datatyp of undefine is UNDEFINED
console.log(typeof null)  // datatype of null is OBJECT

console.log(5*6)
// alert(5*6) // throw an error because we use nodejs not use browser

console.table([typeof "ami", typeof sirname, typeof salary, typeof no, typeof isloggedin, typeof null, typeof undefined])

/* 2 type of datatype
    1.primitive data type :- string , number , null etc...
    2.non-primitive data type :- object , array , function.
*/

let myarray=["a","b","c","d"];
console.log(typeof myarray)
console.log(myarray)

let myobj={
    name : "ami",
    no : 1
}
console.log(typeof myobj)
console.log(myobj)

let myfunction=function(){
    console.log("hello")
}
console.log(typeof myfunction)


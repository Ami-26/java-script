// +++++ SIMPLE FUNCTION CRERATION +++++

function myfunction() {
    console.log("hello i am execute my first function into javascript")
}
myfunction()

// +++++ ADD TWO_NUMBER_FUNCTION WITH RETURN VALUE +++++

// function add(num1,num2){
//     return num1+num2
    
// }
// console.log(add(3,6))





// +++++ ADD TWO_NUMBER_FUNCTION WITH NO RETURN VALUE +++++

function add1(num1,num2){
    console.log(num1+num2) 
}

 add(3,6)
//  ++++ OR ++++
console.log("sum of two number",add1(3,6)); // here we are not give RETURN value and then print like this "CONSOLE" then it is give like ==> "SUM OF TWO NUMBER : UNDEFINED"



// +++++ ADD TWO_NUMBER_FUNCTION WITH RETURN VALUE WITH STORE THAT VALUE INTO ONE VARIABLE +++++

function add(num1, num2) {
    sum = num1 + num2
    return sum
}
// add(3,6)
console.log("sum of two number", add(3, 6));


// function userloginmsg(username){
//     console.log(`${username} you are just loggedin`);
//     }
// userloginmsg("ami")
// userloginmsg() HERE WHEN VALUE IS NOT PASS THEN IT IS TAKE UNDEFINED VALUE

function userloginmsg(username = "ami") {
    console.log(`${username} you are just loggedin`);
}
userloginmsg("ritu")
userloginmsg()  // WHEN WE CAN NOT GIVE VALUE THEN IT IS TAKE AUTOMATICALLY DEFAULT VALUE OF A FUNCTION , LIKE HERE IT IS TAKE DEFAULT VALUE IS "AMI" OR WHEN WE GIVE VALUE THEN IT IS OVEERRIGT WITH NEW VALUE. 

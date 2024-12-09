
// when we pass one parametr to the function,and when we call function with one or more value then function only print first value of that function.....

// function calculatecartprice(num1){
//     return num1
// }
// console.log(calculatecartprice(100,200,300,400))

//above function have some issue so for that we have soultion it's name is "REST OF OPERATION" it's just same syntax like "SPREAD OPERATION" like SYNTAX IS :- ... 
function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(100,200,300,400)) // using this function we can print all the value of calling function

const myobj ={
    username : "ami",
    rate : 200
}

function functionwithobj(anotheerobj){
    console.log(`${anotheerobj.username} is my username and my rate is ${anotheerobj.rate}`)
}
// functionwithobj(myobj)
// ++++++++ OR +++++++++
// FUNCTION WITHIN OBJECT
functionwithobj({
                    username:"ritu",
                    rate:500
                })

const myarray = [1000,2000,3000,4000]
function functionwitharray(anotherarray){
    console.log(anotherarray[2])
}                
// functionwitharray(myarray)
// +++++++++++ OR ++++++++++++
// FUNCTION WITHIN ARRAY
functionwitharray([1000,2000,3000,4000])

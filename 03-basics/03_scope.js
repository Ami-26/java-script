let a=10
// const b=20
var c=300

if(true){
    let a=10
    const b=20
    var c=30
    console.log("Inner variable :" , a)

}
console.log("Outer variable :",a)
// console.log(b)
console.log(c)

// ++++++ Nesting_Function_Scope_concept +++++++++

function one(){
    const username = "ami"

    function two(){
        const website = "youtube"
        console.log(username);
        console.log(website);
        
    }
    // console.log(website)
    two()
}

one()

// ++++++ Nesting_IF_Scope_concept +++++++++

if(true){
    const username = "ritu"
    if(username === "ritu")
    {
        const website = " Youtube"
        console.log(username + website)
    }
    // console.log(website);
}
// console.log(username);

// main concept above is that child should access all the value of the parent,but parent not access child value..,this concept apply all like nesting_function or nesting_if_statement..

//+++++++++++++ intersting about FUNCTION +++++++++++++++

console.log(addone(3)) // here can be no issue that, where we call function,which means that call before intalization of function or after intalization of a function.
function addone(num){
    return num+1
}
// console.log(addone(3))

// console.log(addtwo(5)); // throw an error because here ADDTWO_FUNCTION is work like variable , it's value should be store into variable
const addtwo = function(num){
    return num+2
}
console.log(addtwo(5));


const myobj = {
    username : "ami",
    course : "javascript",
    fee : 999,
    welcomemsg : function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}
// myobj.welcomemsg()  
// myobj.username = "ritu"
// myobj.welcomemsg()

// console.log(this);

// function one(){
//     console.log(this);
// }
// one()

// function one(){
//     let username = "ami"
//     console.log(this.username);
// }
// one()

// const one = function(){ 
//     let username = "ami"
//     console.log(this.username);
// }
// one()

// () => {} syntax of an ARROW_FUNCTION

// const one = () => { 
//     let username = "ami"
//     console.log(this.username);
// }
// one()

const one = () => { 
    let username = "ami"
    console.log(this);
}
one()

// const addtwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addtwo(2,2))

// ++++++++ OR ++++++++++++

// const addtwo = (num1,num2) => num1+num2
// console.log(addtwo(2,2))

// ++++++++ OR ++++++++++++

// const addtwo = (num1,num2) => (num1+num2)
// console.log(addtwo(2,2))

// array_function with an object

const funwithobj = () => ({username:"ami"})
console.log(funwithobj())
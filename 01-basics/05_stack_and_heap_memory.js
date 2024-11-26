
//******************************************* */
// STACK (primitive data_type) memory
//******************************************* */

let myname="ami"
let anothername=myname
anothername="ritu"
console.log(myname)
console.log(anothername)

//******************************************* */
//HEAP(non-primitive data_type)memory
//******************************************* */

let myemail={
    email:"abc@gmail.com"
}
let anotheremail = myemail
anotheremail.email = "xyz@gmail.com"
console.log(myemail.email)
console.log(anotheremail.email)
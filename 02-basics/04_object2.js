// METHOD :-1 SINGLETONE_OBJECT CREATION SYNTAX

const singletoneobj = new Object({name : "ami", emailid : "abc@abc.com"})
console.log(singletoneobj)

// METHOD :- 2 OBJECT_LITERALS

const litobj = {
    id : 1,
    usernaame : "ami",
    useremail : "abc@xyz.com",
    userpassword : 123456789,
    isuserloggedin : true 

}
console.log(litobj)

// nested object is print into in one object for that 

const mainobj = {
    email : "some@google.com",
     anotherobj : {
        anotherobj1 : {
            fname : "ami",
            lname : "rangadia"
        }
    }
}
console.log(mainobj.anotherobj.anotherobj1.fname)
// or
console.log(mainobj.anotherobj.anotherobj1)
//or
console.log(mainobj.anotherobj)

/* one or more object combine into single object for that methods are :
1.assign_method , 2. spread_method */

const obj1 = { 1 : "a", 2 : "b"}
const obj2 = { 3 : "a", 4 : "b"}
const obj3 = { 5 : "a", 6 : "b"}

console.log(Object.assign({},obj1,obj2,obj3)) // assign method
const obj4 = {...obj1,...obj2,...obj3} // spread method 
console.log(obj4)

// how to access array into objects

const myarray = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 2,
        email : "a@gmail.com"
    },
    {
        id : 3,
        email : "a@gmail.com"
    }
]
console.log(myarray[1].email)

// when fatch data from database : 

console.log(litobj)
console.log(Object.keys(litobj))
console.log(Object.values(litobj))
console.log(Object.entries(litobj))

console.log(litobj.hasOwnProperty('isuserloggedin'))
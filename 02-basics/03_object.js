/*
FIERST METHOD IS TO CREATE AN OBJECT IS :  "SINGLETONE"
Object.create // SYNTAX OF SINGLETONE OBJECT CREATION
*/


/*

SECOND METHOD TO CREATE AN OBJECT IS : "OBJECT_LITERALS"

*/

const mysymbol = Symbol("mysym")

const jsobj = {
    name : "ami",
    "fullname" : "ami rangadia",
    age : 28,
    emailid : "abc@gmail.com",
    isloggedin : false,
    lastloggedin : ["monday","sunday"],
    [mysymbol] : "mysym1"
}
console.log(jsobj.name)
// ++++ OR ANOTHER WAY TO ACCESS OBJECT ELEMENT ++++
console.log(jsobj["name"])

console.log(jsobj.fullname)
console.log(jsobj["fullname"])

console.log(jsobj[mysymbol])

jsobj.name="ritu"
console.log(jsobj.name)
// Object.freeze(jsobj) // LOCK AN OBJECT .. SO NOW WE CAN NOT CHANGE ANY OBJECT VALUE ..
jsobj.name="dhara"
console.log(jsobj.name)
jsobj.emailid="ritu@gmail.com"
console.log(jsobj.emailid)

 jsobj.myfunction = function() {
    console.log("hello i am learing JS");
}
console.log(jsobj.myfunction())

jsobj.myfunction1 = function() {
    console.log(`hello i am learing JS.. and my emailid is ${this.emailid}`); // it is call string_interpolation..
}
console.log(jsobj.myfunction1())



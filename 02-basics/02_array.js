
const numarray = new Array(1,2,3,4,5,6,7,8,9)
const strarray = new Array("a","b","c","d","e")
const mixarray = new Array(1,"dhara",2,"ami",3,"ritu",4,"vikas")

// SPERAD FUNCTION SYNTAX :- [...arrayname,...arrayname1,...arrayname3,...so on]
const comarray = [...numarray,...strarray,...mixarray] // it is call spread array , which means all of an array are cpmbine into one array
console.log(comarray)

// OR also we can use CONCAT FUNCTIONS for combine one or more array in to an single array..
console.log(numarray.concat(strarray,mixarray))

// FLAT FUNCTIONS when array into an one or more arrays and we want all array print into one array then we use FLAT FUNCTIONS
const comboarray = [1,2,3,4,[4.1,4.2,4.3],5,6,[7,8,[8.1,8.2]]]
console.log(comboarray.flat(Infinity))

// ARRAY.FROM FUNCTION is use to convert string into an array
console.log(Array.isArray("ami")) // return boolen vaule is "ami" is array then return TRUE otherwise return FALSE
console.log(Array.from("ami"))
console.log(Array.from({name : "ami"})) // it is give empty array 


// ARRAY.OF FUNCTION is also use to convert one or many varibles into an array..
const name = "ami"
const name1 = 1
const name2 = "dhara1"
console.log(Array.of(name,name1,name2))

// ++++++ FOR_OF_LOOP ++++++++

// ++++ ARRAY SHOULD BE INTERABLE USING FOR_OF_LOOP +++++

// const arr=[1,2,3,4,5,6,7]

// for (const myarr of arr) {
//     console.log(myarr);
// }

// +++++ STRING ALSO INTERABLE USING FOR_OF_LOOP +++++

// const grreating = "hello word!"
// for (const grreat of grreating) {
//     console.log(grreat);
    
// }

// const grreating = "hello word!" // HERE LOGIC IS WHEN DETECT WHITW SPACE INTO A STRING THEN IT SKIP AND CONTINUE NEXT 
// for (const grreat of grreating) {
//     if(grreat === " "){
//         continue
//     }
//     console.log(grreat);
// }

const map = new Map()
map.set('IN' , 'INDIA')
map.set('CN' , 'CANDA')
map.set('FR' , 'FRANCE')

console.log(map);

for (const [key , value] of map) {
    // console.log(mymap);
    console.log(`${key} :- ${value}`);    
}

// +++++++ USING FOR_OF_LOOP, OBJECT SHOULD NOT BE INTERABLE ++++++++++

// const myobj = {
//     username : "ami@abc.com",
//     password : 123456
// }

// for (const [key ,value] of myobj) {
//     console.log(key , value);
    
// }


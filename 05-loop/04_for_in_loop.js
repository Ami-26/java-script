// const myobj = {
//     name : "ami",
//     id : 1,
//     city : "dhangdhra"
// }

// +++++ OBJECT should be interable using FOR_IN_LOOP +++++++

// for (const key in myobj) {
//         console.log(key,myobj[key]);
//     }

// const arr = ["js","py","cpp","java"]

// ++++++ ARRAY also should be iterable using FOR_IN_LOOP ++++++++

// for (const key in arr) {
//         console.log(arr[key]);
//     }

const map = new Map()
map.set('IN' , 'India')
map.set('CN' , 'Canda')
map.set('FR' , 'France')
map.set('IN' , 'India')

// console.log(map);

// +++++ Map should not be iterable using FOR_IN_LOOP +++++++

for (const key in map) {
   console.log(key);
    }

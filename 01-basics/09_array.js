const myarray = [1,2,3,4,5,6]
console.log(myarray)

const myarray1 = new Array(1,2,3,4,5,6,7,8,9,10)
console.log(myarray1)

console.log(myarray1.indexOf(5))

console.log(myarray1.includes(11))
console.log(myarray1.indexOf(11))

console.log(myarray1.concat(myarray))
console.log(myarray1.join("-"))

console.log(myarray1.push(11))
console.log(myarray1)
console.log(myarray1.pop())
console.log(myarray1)

console.log(myarray1.unshift(11))
console.log(myarray1)
console.log(myarray1.shift())
console.log(myarray1)

console.log(" SLICE ",myarray1.slice(2,6))
console.log("after slice operation" , myarray1)

console.log(" SPLICE ",myarray1.splice(2,6))
console.log("after splice operation" , myarray1)
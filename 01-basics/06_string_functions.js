const str = new String('Ami-Valjibhai-Rangadia')
console.log(`hello my name is ${str}`)


console.log(str.length)
console.log(str.charAt(14))
console.log(str.indexOf(['V']))
console.log(str.replace('Ami','ritu'))
console.log(str.slice(-22,12)) // slice also give string output between start_index number and end_index number.. and it can be contain negative index number..

console.log(str.split("-")) // split means divide string as per input charecter..

console.log(str.substring(2,12)) // substring also give output between start_index number and end_index number.. but it can not contain negative index number, whenever we write nagative index number it can be perform on 0 index value..

const str1 = new String("   ami   ")
console.log(str1)
console.log(str1.trim())

const mobno = "9265367021"
const last3digit = mobno.slice(-3)
console.log(last3digit.padStart(mobno.length,"*"))

const relexp = /[A-Z]/g;
console.log(str.match(relexp))
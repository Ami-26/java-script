// ++++++++ forward print number ++++++++

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
// }

// +++++++ backward print number +++++++++

// for (let index = 5; index >= 0; index--){
//     const element = index;
//     console.log(element);  
// }

// +++++++ Neasted loop ++++++++

// for (let i = 1; i <=10 ; i++) {
//     for (let j = 1; j <=10 ; j++) {
//         console.log(i + "*" + j + "=" + i*j);
//     }
// }

// +++++++ for loop with BREAK statement ++++++++

// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         console.log("found 5");
//         break
//     }
//     console.log(i);   
// }

// ++++++++ for loop with CONTINUE statement +++++++

// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         console.log("found 5");
//         continue
//     }
//     console.log(i);   
// }


// +++++++ for loop with an ARRAY +++++++++

let arr = ["ami","ritu","vikas","dhara"]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
    
}
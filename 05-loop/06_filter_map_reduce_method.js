
// const arr = ["js","py","cpp","java"]

//  const myarr= arr.forEach((val) => {
//         // console.log(val); // here throw an error because foreach_loop does not support to access return value.. for that javascript should have some methods like FILTER,REDUCE,ETC...
//             return val
// })
// console.log(myarr);


const arr = [1,2,3,4,5,6,7,8,9,10]

// myarr = arr.filter((item)=> item > 4)
// console.log(myarr);

// ++++++++++ OR +++++++++++

// myarr = arr.filter((item) => {
//     return item > 5
// })
// console.log(myarr);

// +++++++ same logic using for_each_loop ++++++++

// const newarr = []

// arr.forEach((num) => {
//     if(num>4){
//         newarr.push(num)
//         return num
//     }
// })
// console.log(newarr);

// ++++++++  another_example of FILTER_METHOD ++++++++

const book = [
    {
        title : "book1",
        genre : "history",
        publish : 1990,
        edition : 2002
    },
    {
        title : "book2",
        genre : "science",
        publish : 1993,
        edition : 2005
    },
    {
        title : "book3",
        genre : "history",
        publish : 1995,
        edition : 2007
    },
    {
        title : "book4",
        genre : "maths",
        publish : 1997,
        edition : 2015
    },
    {
        title : "book5",
        genre : "science",
        publish : 2002,
        edition : 2023
    },
    {
        title : "book6",
        genre : "english",
        publish : 1992,
        edition : 2012
    },
]

// myarr = book.filter((bk) => bk.genre === "history")

// myarr = book.filter((bk) => bk.publish >= 1995)

myarr = book.filter((bk) => {
     return bk.publish >= 1995 && bk.genre === "history"
})
console.log(myarr);

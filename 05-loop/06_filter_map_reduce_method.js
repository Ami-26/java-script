
// const arr = ["js","py","cpp","java"]

//  const myarr= arr.forEach((val) => {
//         // console.log(val); // here throw an error because foreach_loop does not support to access return value.. for that javascript should have some methods like FILTER,REDUCE,ETC...
//             return val
// })
// console.log(myarr);

// +++++++++++++ FILTER_METHOD +++++++++++++++

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

// myarr = book.filter((bk) => {
//      return bk.publish >= 1995 && bk.genre === "history"
// })
// console.log(myarr);

// +++++++++ MAP_METHOD ++++++++++

const numarr = [1,2,3,4,5,6,7,8,9,10]

//const newnum = numarr.map((num) => num+10)

//const newnum = numarr.map((num) => { return num+10}) // when we use scope means {} then we complusary use RETURN_KEYWORD..
// console.log(newnum);

// ++++++++ CHAINING_OF_METHODS ++++++++

const newnum = numarr
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 50)
// console.log(newnum);

// ++++++++++ REDUCE_METHOD ++++++++++

const rarray = [1,2,3,4]

 const newarr = rarray.reduce((acc , cval) => {return acc + cval},0)
//  console.log(newarr)

const shoppingcart = [
    {
        course : "js",
        price : 2999
    },
    {
        course : "cpp",
        price : 999
    },
    {
        course : "py",
        price : 1999
    },
    {
        course : "java",
        price : 3999
    },
    {
        course : "ai",
        price : 9999
    },
]

const total = shoppingcart.reduce((accval , item) => 
    {return accval + item.price},0)
console.log(total);

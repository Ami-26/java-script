const arr = ["js","cpp","py","java"]

// arr.forEach(function (val) {
//     console.log(val);
// })

// arr.forEach( (val) => {
//     console.log(val);
// })

// function printme(val){
//     console.log(val);
// }

// arr.forEach(printme)

// arr.forEach((item , index , arr) => {
//     console.log(item,index,arr);
    
// })

const arrwithobj = [
    {
        languagename : "javascript",
        langfile : "js"
    },
    {
        languagename : "python",
        langfile : "py"
    },
    {
        languagename : "cpp",
        langfile : "c++"
    },
]

arrwithobj.forEach((item) => {
    console.log(item.languagename);
    
})
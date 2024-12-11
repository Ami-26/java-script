// immediately invoked function expreession (IIFE)

(function one(){
    console.log("hello i am named IIFE")
})();

(() => {
    console.log("hello without named IIFE with ARROW_FUNCTION")
})();

((name) => {
    console.log(`hello i am ${name}, and this is parameter iife`)
})('ami');
'use strict';

// main

function makeFibonacciFunction() {
    let a = 1;
    let b = -1;
    return function()  {
        a = a + b;
        b = a - b;
        console.log(a);
    };
};


const fibonacci = makeFibonacciFunction();

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();




// addition *

// const fibonacci = (function makeFibonacciFunction() {
//     let a = 1;
//     let b = -1;
//     return function()  {
//         a = a + b;
//         b = a - b;
//         console.log(a);
//     };
// })();


// fibonacci();
// fibonacci();
// fibonacci();
// fibonacci();
// fibonacci();
// fibonacci();

// addition IIFE arrow function 

// const fibonacci = ((prev = -1, next = 1) => () => {
//     const result = prev + next;
//     prev = next;
//     next = result;
//     return console.log(result);
// })();

//         fibonacci();
//         fibonacci();
//         fibonacci();
//         fibonacci();
//         fibonacci();
//         fibonacci(); 







'use strict';

// addition 

// const fibonacci = ((prev = 0, next = 1) => () => {
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


// main

function makeFibonacciFunction() {
    let a = 1;
    let b = 0;
    return () => {
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



